import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "node:path";
import { DATA } from "@/data/goals";
import type { Attribute, Goal, Path, Step } from "@/lib/types";

type AttrKind = "vehicle" | "driver";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const adapter = new PrismaBetterSqlite3({ url: `file:${path.join(process.cwd(), "data", "reverse-goal-map.db")}` });

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

function uid(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

function readJson<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function maxPosition(items: { position: number }[]) {
  return items.reduce((max, item) => Math.max(max, item.position), -1) + 1;
}

function clampRating(value: unknown, fallback = 0) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(0, Math.min(10, Math.round(number)));
}

function slug(value: unknown, fallback: string) {
  const text = String(value || fallback)
    .trim()
    .replace(/[^a-zA-Z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 48);
  return text || fallback;
}

async function ensureSeeded() {
  const existing = await prisma.goal.count();
  if (existing > 0) return;

  await prisma.$transaction(async (tx) => {
    for (const [goalIndex, goal] of DATA.entries()) {
      await tx.goal.create({
        data: {
          id: goal.id,
          title: goal.title,
          position: goalIndex,
          steps: {
            create: goal.steps.map((step, stepIndex) => ({
              id: `${goal.id}_step_${stepIndex}`,
              label: step.label,
              title: step.title,
              meaning: step.meaning,
              build: JSON.stringify(step.build),
              factors: JSON.stringify(step.factors),
              position: stepIndex,
            })),
          },
        },
      });

      for (const [pathIndex, item] of goal.paths.entries()) {
        const pathId = `${goal.id}_path_${pathIndex}`;
        await tx.goalPath.create({
          data: {
            id: pathId,
            goalId: goal.id,
            name: item.name,
            position: pathIndex,
            metrics: {
              create: [
                ...item.vehicleAttrs.map((attr, index) => seedMetric(pathId, "vehicle", attr, index)),
                ...item.driverAttrs.map((attr, index) => seedMetric(pathId, "driver", attr, index)),
              ],
            },
          },
        });
      }
    }
  });
}

function seedMetric(pathId: string, kind: AttrKind, attr: Attribute, index: number) {
  return {
    id: `${pathId}_${kind}_${index}`,
    kind,
    name: attr.name,
    final: attr.final,
    groupName: attr.group,
    meaning: attr.meaning,
    build: JSON.stringify(attr.build),
    current: 0,
    position: index,
  };
}

export async function getDashboardData(): Promise<Goal[]> {
  await removeGoalsWithoutSteps();

  const goals = await prisma.goal.findMany({
    orderBy: [{ position: "asc" }, { title: "asc" }],
    include: {
      steps: {
        orderBy: [{ position: "asc" }, { title: "asc" }],
      },
      paths: {
        orderBy: [{ position: "asc" }, { name: "asc" }],
        include: {
          metrics: {
            orderBy: [{ position: "asc" }, { name: "asc" }],
          },
        },
      },
    },
  });

  return goals.map((goal) => ({
    id: goal.id,
    title: goal.title,
    steps: goal.steps.map((step) => ({
      id: step.id,
      label: step.label,
      title: step.title,
      meaning: step.meaning,
      build: readJson(step.build, []),
      factors: readJson(step.factors, { default: 0 }),
    })),
    paths: goal.paths.map((item) => ({
      id: item.id,
      name: item.name,
      currentStepId: item.currentStepId,
      vehicleAttrs: item.metrics.filter((metric) => metric.kind === "vehicle").map(toAttribute),
      driverAttrs: item.metrics.filter((metric) => metric.kind === "driver").map(toAttribute),
    })),
  }));
}

async function removeGoalsWithoutSteps() {
  await prisma.goal.deleteMany({
    where: {
      steps: {
        none: {},
      },
    },
  });
}

function toAttribute(row: {
  id: string;
  name: string;
  final: number;
  groupName: string;
  meaning: string;
  build: string;
  current: number;
}): Attribute {
  return {
    id: row.id,
    name: row.name,
    final: row.final,
    group: row.groupName,
    meaning: row.meaning,
    build: readJson(row.build, []),
    current: row.current,
  };
}

export async function createGoal(title: string) {
  const position = maxPosition(await prisma.goal.findMany({ select: { position: true } }));
  const id = uid("goal");

  await prisma.goal.create({
    data: {
      id,
      title,
      position,
      steps: {
        create: {
          id: uid("step"),
          label: "First Step",
          title: "Define the first required roadmap step.",
          meaning: "Every goal needs at least one step. Edit this starter step with the real first milestone for your roadmap.",
          build: JSON.stringify(["Replace this with the concrete actions for this step."]),
          factors: JSON.stringify({ default: 0.25 }),
          position: 0,
        },
      },
      paths: {
        create: {
          id: uid("path"),
          name: "Default Roadmap",
          position: 0,
        },
      },
    },
  });
}

export async function updateGoal(id: string, title: string) {
  await prisma.goal.update({ where: { id }, data: { title } });
}

export async function deleteGoal(id: string) {
  await prisma.goal.delete({ where: { id } });
}

export async function importGoals(input: Goal | Goal[]) {
  const incoming = Array.isArray(input) ? input : [input];
  if (!incoming.length) return;
  const invalidGoal = incoming.find((goal) => !Array.isArray(goal.steps) || goal.steps.length === 0);
  if (invalidGoal) throw new Error("Every imported goal must include at least one step.");

  const existingGoalPositions = await prisma.goal.findMany({ select: { position: true } });
  let nextGoalPosition = maxPosition(existingGoalPositions);
  const existingGoalIds = new Set((await prisma.goal.findMany({ select: { id: true } })).map((item) => item.id));

  await prisma.$transaction(async (tx) => {
    for (const importedGoal of incoming) {
      const baseGoalId = slug(importedGoal.id, "imported_goal");
      const goalId = existingGoalIds.has(baseGoalId) ? uid("goal") : baseGoalId;
      existingGoalIds.add(goalId);

      const steps = Array.isArray(importedGoal.steps) ? importedGoal.steps : [];
      const paths = Array.isArray(importedGoal.paths) ? importedGoal.paths : [];
      const stepIdMap = new Map<string, string>();

      await tx.goal.create({
        data: {
          id: goalId,
          title: String(importedGoal.title || "Imported Goal"),
          position: nextGoalPosition++,
          steps: {
            create: steps.map((step, stepIndex) => {
              const stepId = `${goalId}_step_${stepIndex}`;
              if (step.id) stepIdMap.set(step.id, stepId);
              return {
                id: stepId,
                label: String(step.label || `Step ${stepIndex + 1}`),
                title: String(step.title || "Imported roadmap step"),
                meaning: String(step.meaning || ""),
                build: JSON.stringify(Array.isArray(step.build) ? step.build.map(String) : []),
                factors: JSON.stringify(step.factors && typeof step.factors === "object" ? step.factors : { default: 0 }),
                position: stepIndex,
              };
            }),
          },
        },
      });

      for (const [pathIndex, item] of paths.entries()) {
        const pathId = `${goalId}_path_${pathIndex}`;
        const vehicleAttrs = Array.isArray(item.vehicleAttrs) ? item.vehicleAttrs : [];
        const driverAttrs = Array.isArray(item.driverAttrs) ? item.driverAttrs : [];
        const currentStepId = item.currentStepId ? stepIdMap.get(item.currentStepId) || null : null;

        await tx.goalPath.create({
          data: {
            id: pathId,
            goalId,
            name: String(item.name || `Roadmap ${pathIndex + 1}`),
            currentStepId,
            position: pathIndex,
            metrics: {
              create: [
                ...vehicleAttrs.map((attr, index) => importMetric(pathId, "vehicle", attr, index)),
                ...driverAttrs.map((attr, index) => importMetric(pathId, "driver", attr, index)),
              ],
            },
          },
        });
      }

      if (!paths.length) {
        await tx.goalPath.create({
          data: {
            id: `${goalId}_path_0`,
            goalId,
            name: "Imported Roadmap",
            position: 0,
          },
        });
      }
    }
  });
}

function importMetric(pathId: string, kind: AttrKind, attr: Attribute, index: number) {
  return {
    id: `${pathId}_${kind}_${index}`,
    kind,
    name: String(attr.name || "Imported metric"),
    final: clampRating(attr.final, 10),
    groupName: "default",
    meaning: String(attr.meaning || ""),
    build: JSON.stringify(Array.isArray(attr.build) ? attr.build.map(String) : []),
    current: clampRating(attr.current, 0),
    position: index,
  };
}

export async function createPath(goalId: string, name: string) {
  const existing = await prisma.goalPath.findMany({ where: { goalId }, select: { position: true } });
  await prisma.goalPath.create({
    data: {
      id: uid("path"),
      goalId,
      name,
      position: maxPosition(existing),
    },
  });
}

export async function updatePath(id: string, name: string) {
  await prisma.goalPath.update({ where: { id }, data: { name } });
}

export async function deletePath(id: string) {
  await prisma.goalPath.delete({ where: { id } });
}

export async function setProgress(pathId: string, stepId: string | null) {
  await prisma.goalPath.update({ where: { id: pathId }, data: { currentStepId: stepId } });
}

export async function createStep(goalId: string, input: Omit<Step, "id">) {
  const existing = await prisma.roadmapStep.findMany({ where: { goalId }, select: { position: true } });
  await prisma.roadmapStep.create({
    data: {
      id: uid("step"),
      goalId,
      label: input.label,
      title: input.title,
      meaning: input.meaning,
      build: JSON.stringify(input.build),
      factors: JSON.stringify(input.factors),
      position: maxPosition(existing),
    },
  });
}

export async function updateStep(id: string, input: Omit<Step, "id">) {
  await prisma.roadmapStep.update({
    where: { id },
    data: {
      label: input.label,
      title: input.title,
      meaning: input.meaning,
      build: JSON.stringify(input.build),
      factors: JSON.stringify(input.factors),
    },
  });
}

export async function deleteStep(id: string) {
  await prisma.roadmapStep.delete({ where: { id } });
}

export async function createMetric(pathId: string, kind: AttrKind, input: Omit<Attribute, "id" | "current">) {
  const existing = await prisma.metric.findMany({ where: { pathId, kind }, select: { position: true } });
  await prisma.metric.create({
    data: {
      id: uid("metric"),
      pathId,
      kind,
      name: input.name,
      final: input.final,
      groupName: input.group,
      meaning: input.meaning,
      build: JSON.stringify(input.build),
      current: 0,
      position: maxPosition(existing),
    },
  });
}

export async function updateMetric(id: string, input: Omit<Attribute, "id" | "current">) {
  await prisma.metric.update({
    where: { id },
    data: {
      name: input.name,
      final: input.final,
      groupName: input.group,
      meaning: input.meaning,
      build: JSON.stringify(input.build),
    },
  });
}

export async function updateMetricRating(id: string, current: number) {
  await prisma.metric.update({ where: { id }, data: { current } });
}

export async function deleteMetric(id: string) {
  await prisma.metric.delete({ where: { id } });
}
