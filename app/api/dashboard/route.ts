import { NextResponse } from "next/server";
import {
  createGoal,
  createMetric,
  createPath,
  createStep,
  deleteGoal,
  deleteMetric,
  deletePath,
  deleteStep,
  getDashboardData,
  importGoals,
  setProgress,
  updateGoal,
  updateMetric,
  updateMetricRating,
  updatePath,
  updateStep,
} from "@/lib/database";
import { clamp } from "@/lib/ratings";
import type { Attribute, Step } from "@/lib/types";
import type { Goal } from "@/lib/types";

export const dynamic = "force-dynamic";

type AttrKind = "vehicle" | "driver";

function lines(value: unknown) {
  return String(value || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function stepInput(input: Record<string, unknown>): Omit<Step, "id"> {
  return {
    label: String(input.label || "New Step"),
    title: String(input.title || "Untitled step"),
    meaning: String(input.meaning || ""),
    build: Array.isArray(input.build) ? input.build.map(String) : lines(input.buildText),
    factors: typeof input.factors === "object" && input.factors ? (input.factors as Record<string, number>) : { default: 0 },
  };
}

function metricInput(input: Record<string, unknown>): Omit<Attribute, "id" | "current"> {
  return {
    name: String(input.name || "New metric"),
    final: clamp(Number(input.final || 10), 0, 10),
    group: String(input.group || "default"),
    meaning: String(input.meaning || ""),
    build: Array.isArray(input.build) ? input.build.map(String) : lines(input.buildText),
  };
}

export async function GET() {
  return NextResponse.json({ goals: await getDashboardData() });
}

export async function POST(request: Request) {
  const body = await request.json();
  const action = String(body.action || "");

  try {
    switch (action) {
      case "createGoal":
        await createGoal(String(body.title || "New goal"));
        break;
      case "updateGoal":
        await updateGoal(String(body.id), String(body.title || "Untitled goal"));
        break;
      case "deleteGoal":
        await deleteGoal(String(body.id));
        break;
      case "importGoals":
        await importGoals(body.goals as Goal | Goal[]);
        break;
      case "createPath":
        await createPath(String(body.goalId), String(body.name || "New roadmap"));
        break;
      case "updatePath":
        await updatePath(String(body.id), String(body.name || "Untitled roadmap"));
        break;
      case "deletePath":
        await deletePath(String(body.id));
        break;
      case "setProgress":
        await setProgress(String(body.pathId), body.stepId ? String(body.stepId) : null);
        break;
      case "createStep":
        await createStep(String(body.goalId), stepInput(body));
        break;
      case "updateStep":
        await updateStep(String(body.id), stepInput(body));
        break;
      case "deleteStep":
        await deleteStep(String(body.id));
        break;
      case "createMetric":
        await createMetric(String(body.pathId), String(body.kind) as AttrKind, metricInput(body));
        break;
      case "updateMetric":
        await updateMetric(String(body.id), metricInput(body));
        break;
      case "updateMetricRating":
        await updateMetricRating(String(body.id), clamp(Number(body.current || 0), 0, 10));
        break;
      case "deleteMetric":
        await deleteMetric(String(body.id));
        break;
      default:
        return NextResponse.json({ error: "Unknown action" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Dashboard update failed" }, { status: 400 });
  }

  return NextResponse.json({ goals: await getDashboardData() });
}
