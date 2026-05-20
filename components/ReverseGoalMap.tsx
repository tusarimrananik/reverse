"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  HeartHandshake,
  LineChart,
  Route,
  Search,
  Target,
  UserRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select } from "@/components/ui/select";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { DATA } from "@/data/goals";
import { avgRating, clamp, clean, currentAttrKey, currentGapClass, stepRating } from "@/lib/ratings";
import type { Attribute, Path, Step } from "@/lib/types";

type AttrKind = "vehicle" | "driver";
type CurrentRatings = Record<string, number>;

const goalIcons = {
  freedom10m: CircleDollarSign,
  physicalHealth: Activity,
  relationship: HeartHandshake,
};

function currentValue(current: CurrentRatings, path: Path, kind: AttrKind, attr: Attribute) {
  return current[currentAttrKey(path, kind, attr)] ?? 0;
}

function averageCurrent(current: CurrentRatings, path: Path, attrs: Attribute[], kind: AttrKind) {
  if (!attrs.length) return 0;
  return Math.round(attrs.reduce((sum, attr) => sum + currentValue(current, path, kind, attr), 0) / attrs.length);
}

function gapLabel(gap: number) {
  if (gap <= 0) return "Ready";
  if (gap <= 2) return "Close";
  return "Build";
}

function ScoreTile({ label, value, tone = "default" }: { label: string; value: string | number; tone?: "default" | "dark" }) {
  return (
    <div className={tone === "dark" ? "score-tile score-tile-dark" : "score-tile"}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function AttributeEditor({
  title,
  attrs,
  kind,
  path,
  current,
  onChange,
}: {
  title: string;
  attrs: Attribute[];
  kind: AttrKind;
  path: Path;
  current: CurrentRatings;
  onChange: (key: string, value: number) => void;
}) {
  return (
    <Card className="attribute-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Rate your current state from 0 to 10.</CardDescription>
      </CardHeader>
      <CardContent className="attribute-list">
        {attrs.map((attr) => {
          const key = currentAttrKey(path, kind, attr);
          const value = current[key] ?? 0;

          return (
            <label className="attribute-row" key={key}>
              <span>
                <strong>{clean(attr.name)}</strong>
                <small>{attr.group}</small>
              </span>
              <Input
                type="number"
                min="0"
                max="10"
                step="1"
                value={value}
                aria-label={`Current level for ${clean(attr.name)}`}
                onChange={(event) => onChange(key, clamp(Number(event.target.value) || 0, 0, 10))}
              />
              <Progress value={value} indicatorClassName="progress-current" />
            </label>
          );
        })}
      </CardContent>
    </Card>
  );
}

function StepStats({ path, step, current }: { path: Path; step: Step; current: CurrentRatings }) {
  const vehicleRequired = avgRating(path.vehicleAttrs, step);
  const driverRequired = avgRating(path.driverAttrs, step);
  const vehicleCurrent = averageCurrent(current, path, path.vehicleAttrs, "vehicle");
  const driverCurrent = averageCurrent(current, path, path.driverAttrs, "driver");
  const vehicleGap = Math.max(0, Math.ceil(vehicleRequired - vehicleCurrent));
  const driverGap = Math.max(0, Math.ceil(driverRequired - driverCurrent));

  return (
    <div className="step-stats">
      <ScoreTile label="Vehicle" value={`${vehicleCurrent}/${vehicleRequired}`} />
      <ScoreTile label="Driver" value={`${driverCurrent}/${driverRequired}`} />
      <ScoreTile label="Gap" value={vehicleGap + driverGap} tone="dark" />
    </div>
  );
}

function StepButton({
  path,
  step,
  index,
  current,
  active,
  onClick,
}: {
  path: Path;
  step: Step;
  index: number;
  current: CurrentRatings;
  active: boolean;
  onClick: () => void;
}) {
  const vehicleGap = avgRating(path.vehicleAttrs, step) - averageCurrent(current, path, path.vehicleAttrs, "vehicle");
  const driverGap = avgRating(path.driverAttrs, step) - averageCurrent(current, path, path.driverAttrs, "driver");
  const status = gapLabel(Math.max(vehicleGap, driverGap));

  return (
    <button className={active ? "timeline-item is-active" : "timeline-item"} type="button" onClick={onClick}>
      <span className="timeline-index">{index + 1}</span>
      <span className="timeline-main">
        <span className="timeline-meta">
          <Badge>{clean(step.label)}</Badge>
          <span className={`gap-pill ${currentGapClass(Math.max(vehicleGap, driverGap))}`}>{status}</span>
        </span>
        <strong>{clean(step.title)}</strong>
        <small>{clean(step.note)}</small>
      </span>
      <StepStats path={path} step={step} current={current} />
    </button>
  );
}

function AttributeComparison({
  title,
  attrs,
  kind,
  path,
  step,
  current,
}: {
  title: string;
  attrs: Attribute[];
  kind: AttrKind;
  path: Path;
  step: Step;
  current: CurrentRatings;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Current rating compared with what this step asks for.</CardDescription>
      </CardHeader>
      <CardContent className="comparison-list">
        {attrs.map((attr) => {
          const required = stepRating(attr, step);
          const now = currentValue(current, path, kind, attr);
          const gap = required - now;

          return (
            <div className="comparison-row" key={`${kind}-${attr.name}`}>
              <div>
                <strong>{clean(attr.name)}</strong>
                <small>{attr.group}</small>
              </div>
              <div className="comparison-bars">
                <span>Now {now}/10</span>
                <Progress value={now} indicatorClassName="progress-current" />
                <span>Need {required}/10</span>
                <Progress value={required} />
              </div>
              <span className={`gap-pill ${currentGapClass(gap)}`}>{Math.max(0, Math.ceil(gap))}</span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

function StepDetails({
  open,
  path,
  step,
  stepIndex,
  current,
  onClose,
}: {
  open: boolean;
  path: Path;
  step: Step | null;
  stepIndex: number;
  current: CurrentRatings;
  onClose: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={(nextOpen) => (!nextOpen ? onClose() : undefined)}>
      <SheetContent onClose={onClose}>
        {step ? (
          <div className="sheet-scroll">
            <div className="detail-heading">
              <Badge>{clean(step.label)}</Badge>
              <h2>{clean(step.title)}</h2>
              <p>{clean(step.note)}</p>
              <StepStats path={path} step={step} current={current} />
            </div>
            <AttributeComparison title="Vehicle / System" attrs={path.vehicleAttrs} kind="vehicle" path={path} step={step} current={current} />
            <AttributeComparison title="Driver / Person" attrs={path.driverAttrs} kind="driver" path={path} step={step} current={current} />
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

export default function ReverseGoalMap() {
  const [goalId, setGoalId] = useState(DATA[0].id);
  const goal = useMemo(() => DATA.find((item) => item.id === goalId) || DATA[0], [goalId]);
  const [pathIndex, setPathIndex] = useState(0);
  const path = goal.paths[pathIndex] || goal.paths[0];
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState<CurrentRatings>({});
  const [selectedStepIndex, setSelectedStepIndex] = useState<number | null>(null);
  const GoalIcon = goalIcons[goal.id as keyof typeof goalIcons] || Target;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextGoal = params.get("goal");
    const initialGoal = DATA.find((item) => item.id === nextGoal) || DATA[0];

    if (nextGoal && initialGoal.id === nextGoal) setGoalId(nextGoal);
    if (params.has("path")) setPathIndex(clamp(Number(params.get("path") || 0), 0, initialGoal.paths.length - 1));
    if (params.has("step")) setSelectedStepIndex(clamp(Number(params.get("step") || 0), 0, initialGoal.steps.length - 1));
  }, []);

  useEffect(() => {
    const next: CurrentRatings = {};
    [...path.vehicleAttrs.map((attr) => currentAttrKey(path, "vehicle", attr)), ...path.driverAttrs.map((attr) => currentAttrKey(path, "driver", attr))].forEach((key) => {
      const saved = localStorage.getItem(key);
      if (saved !== null) next[key] = clamp(Number(saved), 0, 10);
    });
    setCurrent(next);
  }, [path]);

  const updateUrl = useCallback(
    (step: number | null) => {
      const url = new URL(window.location.href);
      url.searchParams.set("goal", goal.id);
      url.searchParams.set("path", String(pathIndex));
      if (step === null) url.searchParams.delete("step");
      else url.searchParams.set("step", String(step));
      history.replaceState(null, "", url);
    },
    [goal.id, pathIndex],
  );

  const visibleSteps = goal.steps.filter((step) => {
    const haystack = `${step.label} ${step.title} ${step.note}`.toLowerCase();
    return !query.trim() || haystack.includes(query.trim().toLowerCase());
  });

  const vehicleCurrent = averageCurrent(current, path, path.vehicleAttrs, "vehicle");
  const driverCurrent = averageCurrent(current, path, path.driverAttrs, "driver");
  const selectedStep = selectedStepIndex === null ? null : goal.steps[selectedStepIndex] || null;

  function updateCurrent(key: string, value: number) {
    localStorage.setItem(key, String(value));
    setCurrent((previous) => ({ ...previous, [key]: value }));
  }

  function changeGoal(nextGoalId: string) {
    setGoalId(nextGoalId);
    setPathIndex(0);
    setSelectedStepIndex(null);
    setQuery("");
  }

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <Badge className="hero-badge">
            <Route size={14} />
            Reverse planning workspace
          </Badge>
          <h1>{clean(goal.title)}</h1>
          <p>{clean(goal.subtitle)}</p>
        </div>
        <div className="hero-stat-grid">
          <ScoreTile label="Goal fit" value={`${path.goalFit}/10`} tone="dark" />
          <ScoreTile label="Vehicle now" value={`${vehicleCurrent}/10`} />
          <ScoreTile label="Driver now" value={`${driverCurrent}/10`} />
        </div>
      </section>

      <section className="control-bar" aria-label="Map filters">
        <label>
          <Target size={16} />
          <Select aria-label="Select goal" value={goal.id} onChange={(event) => changeGoal(event.target.value)}>
            {DATA.map((item) => (
              <option value={item.id} key={item.id}>
                {clean(item.title)}
              </option>
            ))}
          </Select>
        </label>
        <label>
          <GoalIcon size={16} />
          <Select
            aria-label="Select path"
            value={pathIndex}
            onChange={(event) => {
              setPathIndex(Number(event.target.value));
              setSelectedStepIndex(null);
            }}
          >
            {goal.paths.map((item, index) => (
              <option value={index} key={item.name}>
                {clean(item.name)}
              </option>
            ))}
          </Select>
        </label>
        <label>
          <Search size={16} />
          <Input value={query} type="search" placeholder="Search steps..." onChange={(event) => setQuery(event.target.value)} />
        </label>
      </section>

      <section className="workspace-grid">
        <aside className="left-rail">
          <Card className="path-overview">
            <CardHeader>
              <div className="path-icon">
                <GoalIcon size={20} />
              </div>
              <CardTitle>{clean(path.name)}</CardTitle>
              <CardDescription>{clean(path.description)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{clean(path.evidence)}</p>
              <div className="basis-list">
                {goal.basis.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={15} />
                    {clean(item)}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <AttributeEditor title="Vehicle / System" attrs={path.vehicleAttrs} kind="vehicle" path={path} current={current} onChange={updateCurrent} />
          <AttributeEditor title="Driver / Person" attrs={path.driverAttrs} kind="driver" path={path} current={current} onChange={updateCurrent} />
        </aside>

        <section className="timeline-panel">
          <div className="section-heading">
            <div>
              <Badge>
                <LineChart size={14} />
                {goal.pathLabel}
              </Badge>
              <h2>Work backward from the finish line</h2>
            </div>
            <Button variant="outline" type="button" onClick={() => window.print()}>
              <BarChart3 size={16} />
              Print
            </Button>
          </div>

          <div className="timeline-list">
            {visibleSteps.length ? (
              visibleSteps.map((step) => {
                const originalIndex = goal.steps.indexOf(step);
                return (
                  <StepButton
                    key={`${step.label}-${step.title}`}
                    path={path}
                    step={step}
                    index={originalIndex}
                    current={current}
                    active={selectedStepIndex === originalIndex}
                    onClick={() => {
                      setSelectedStepIndex(originalIndex);
                      updateUrl(originalIndex);
                    }}
                  />
                );
              })
            ) : (
              <Card className="empty-state">
                <CardContent>
                  <Search size={22} />
                  <strong>No matching steps</strong>
                  <span>Try a broader search term.</span>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </section>

      <button className="floating-action" type="button" aria-label="Open selected step" onClick={() => selectedStepIndex !== null && updateUrl(selectedStepIndex)}>
        <ArrowUpRight size={18} />
      </button>

      <StepDetails
        open={selectedStepIndex !== null}
        path={path}
        step={selectedStep}
        stepIndex={selectedStepIndex ?? 0}
        current={current}
        onClose={() => {
          setSelectedStepIndex(null);
          updateUrl(null);
        }}
      />
    </main>
  );
}
