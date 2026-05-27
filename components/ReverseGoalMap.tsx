"use client";

import type { FormEvent, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Database,
  Gauge,
  HeartHandshake,
  Loader2,
  Pencil,
  Plus,
  Save,
  Target,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { avgRating, clamp, clean, currentGapClass, stepRating } from "@/lib/ratings";
import type { Attribute, Goal, Path, Step } from "@/lib/types";

type AttrKind = "vehicle" | "driver";
type SelectedMetric = { attr: Attribute; kind: AttrKind } | null;
type EditTarget =
  | { type: "goal"; item: Goal }
  | { type: "path"; item: Path }
  | { type: "step"; item: Step }
  | { type: "metric"; item: Attribute; kind: AttrKind }
  | null;

const goalIcons = {
  freedom10m: CircleDollarSign,
  physicalHealth: Activity,
  relationship: HeartHandshake,
};

function currentValue(attr: Attribute) {
  return clamp(attr.current ?? 0, 0, 10);
}

function averageCurrent(attrs: Attribute[]) {
  if (!attrs.length) return 0;
  return Math.round(attrs.reduce((sum, attr) => sum + currentValue(attr), 0) / attrs.length);
}

function ratingPercent(value: number) {
  return `${clamp(value, 0, 10) * 10}%`;
}

function buildText(items: string[]) {
  return items.join("\n");
}

function linesFromForm(form: FormData, name: string) {
  return String(form.get(name) || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseFactors(value: FormDataEntryValue | null) {
  try {
    const parsed = JSON.parse(String(value || "{}"));
    return parsed && typeof parsed === "object" ? parsed : { default: 0 };
  } catch {
    return { default: 0 };
  }
}

function ActionButton({
  children,
  disabled,
  onClick,
  title,
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      className="icon-action"
      type="button"
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      title={title}
      aria-label={title}
    >
      {children}
    </button>
  );
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function StepStats({ path, step }: { path: Path; step: Step }) {
  const vehicleRequired = avgRating(path.vehicleAttrs, step);
  const driverRequired = avgRating(path.driverAttrs, step);
  const vehicleCurrent = averageCurrent(path.vehicleAttrs);
  const driverCurrent = averageCurrent(path.driverAttrs);
  const businessPercent = vehicleRequired <= 0 ? 100 : clamp(Math.round((vehicleCurrent / vehicleRequired) * 100), 0, 100);
  const personPercent = driverRequired <= 0 ? 100 : clamp(Math.round((driverCurrent / driverRequired) * 100), 0, 100);
  const readinessGapPercent = clamp(100 - Math.round((businessPercent + personPercent) / 2), 0, 100);

  return (
    <div className="step-stats">
      <div className="score-tile">
        <span>
          <BriefcaseBusiness size={13} />
          Business
        </span>
        <strong>{businessPercent}%</strong>
      </div>
      <div className="score-tile">
        <span>
          <UserRound size={13} />
          Person
        </span>
        <strong>{personPercent}%</strong>
      </div>
      <div className="score-tile score-tile-dark">
        <span>
          <Gauge size={13} />
          Gap
        </span>
        <strong>{readinessGapPercent}%</strong>
      </div>
    </div>
  );
}

function StepCard({
  step,
  path,
  number,
  current,
  onOpen,
}: {
  step: Step;
  path: Path;
  number: number;
  current: boolean;
  onOpen: () => void;
}) {
  const vehicleGap = avgRating(path.vehicleAttrs, step) - averageCurrent(path.vehicleAttrs);
  const driverGap = avgRating(path.driverAttrs, step) - averageCurrent(path.driverAttrs);
  const gap = Math.max(vehicleGap, driverGap);
  const status = gap <= 0 ? "Ready" : gap <= 2 ? "Close" : "Build";

  return (
    <article className={current ? "timeline-item progress-current-step" : "timeline-item"} onClick={onOpen}>
      <span className="timeline-index">{number}</span>
      <span className="timeline-main">
        <span className="timeline-meta">
          <span className={`gap-pill ${currentGapClass(gap)}`}>{status}</span>
          {current ? <span className="end-goal-badge">Current step</span> : null}
        </span>
        <strong>{clean(step.title)}</strong>
        <small>{clean(step.label)}</small>
      </span>
      <StepStats path={path} step={step} />
    </article>
  );
}

function StepSheet({
  open,
  step,
  goal,
  path,
  busy,
  onClose,
  onSetProgress,
  onDeleteStep,
  onSaveStep,
  onSaveMetric,
  onDeleteMetric,
}: {
  open: boolean;
  step: Step | null;
  goal: Goal;
  path: Path;
  busy: boolean;
  onClose: () => void;
  onSetProgress: (step: Step) => void;
  onDeleteStep: (step: Step) => void;
  onSaveStep: (step: Step, form: FormData) => void;
  onSaveMetric: (attr: Attribute, kind: AttrKind, form: FormData) => void;
  onDeleteMetric: (attr: Attribute) => void;
}) {
  const [view, setView] = useState<"details" | "business" | "person">("details");
  const [selectedMetric, setSelectedMetric] = useState<SelectedMetric>(null);
  const [editingStep, setEditingStep] = useState(false);
  const [editingMetric, setEditingMetric] = useState(false);

  useEffect(() => {
    if (open) {
      setView("details");
      setSelectedMetric(null);
      setEditingStep(false);
      setEditingMetric(false);
    }
  }, [open, step?.id]);

  function switchView(nextView: "details" | "business" | "person") {
    setView(nextView);
    setSelectedMetric(null);
    setEditingStep(false);
    setEditingMetric(false);
  }

  const selectedMetricMatchesView =
    selectedMetric && ((view === "business" && selectedMetric.kind === "vehicle") || (view === "person" && selectedMetric.kind === "driver"));

  return (
    <Sheet open={open} onOpenChange={(nextOpen) => (!nextOpen ? onClose() : undefined)}>
      <SheetContent className="step-detail-sheet" onClose={onClose}>
        {step ? (
          <div className="sheet-scroll">
            <div className="detail-heading step-sheet-heading">
              <div>
                <p>{clean(goal.title)} / {clean(path.name)}</p>
                <h2>{clean(step.title)}</h2>
              </div>
              <div className="sheet-view-switcher" aria-label="Step detail view">
                <Button variant={view === "details" ? "default" : "outline"} type="button" onClick={() => switchView("details")}>
                  Details
                </Button>
                <Button variant={view === "business" ? "default" : "outline"} type="button" onClick={() => switchView("business")}>
                  <BriefcaseBusiness size={16} />
                  Business
                </Button>
                <Button variant={view === "person" ? "default" : "outline"} type="button" onClick={() => switchView("person")}>
                  <UserRound size={16} />
                  Person
                </Button>
              </div>
            </div>

            {view === "details" && editingStep ? (
              <StepEditForm
                step={step}
                busy={busy}
                onCancel={() => setEditingStep(false)}
                onSave={(form) => {
                  setEditingStep(false);
                  onSaveStep(step, form);
                }}
              />
            ) : null}

            {view === "details" && !editingStep ? (
              <div className="details-stack">
                <Card>
                  <CardHeader>
                    <div className="card-heading-row">
                      <CardTitle>{clean(step.label)}</CardTitle>
                      <span className="row-actions">
                        <Button variant="outline" type="button" disabled={busy} onClick={() => onSetProgress(step)}>
                          <CheckCircle2 size={16} />
                          Current
                        </Button>
                        <Button variant="outline" type="button" disabled={busy} onClick={() => setEditingStep(true)}>
                          <Pencil size={16} />
                          Edit
                        </Button>
                        <Button variant="outline" type="button" disabled={busy} onClick={() => onDeleteStep(step)}>
                          <Trash2 size={16} />
                          Delete
                        </Button>
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <StepStats path={path} step={step} />
                  </CardContent>
                </Card>

                <div className="details-grid">
                  <Card>
                    <CardHeader>
                      <CardTitle className="detail-card-title">Meaning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{clean(step.meaning)}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="detail-card-title">How to build it</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="action-list">
                        {step.build.map((item) => (
                          <li key={item}>{clean(item)}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : null}

            {view === "business" && selectedMetricMatchesView ? (
              <MetricDetail
                title="Business Matrix"
                icon={<BriefcaseBusiness size={17} />}
                selectedMetric={selectedMetric}
                editing={editingMetric}
                busy={busy}
                onBack={() => {
                  setSelectedMetric(null);
                  setEditingMetric(false);
                }}
                onEdit={() => setEditingMetric(true)}
                onCancelEdit={() => setEditingMetric(false)}
                onSave={(attr, kind, form) => {
                  setEditingMetric(false);
                  onSaveMetric(attr, kind, form);
                }}
                onDelete={onDeleteMetric}
              />
            ) : null}

            {view === "business" && !selectedMetricMatchesView ? (
              <MetricCard
                title="Business Matrix"
                icon={<BriefcaseBusiness size={17} />}
                attrs={path.vehicleAttrs}
                kind="vehicle"
                onOpen={(metric) => {
                  setSelectedMetric(metric);
                  setEditingMetric(false);
                }}
              />
            ) : null}

            {view === "person" && selectedMetricMatchesView ? (
              <MetricDetail
                title="Person Matrix"
                icon={<UserRound size={17} />}
                selectedMetric={selectedMetric}
                editing={editingMetric}
                busy={busy}
                onBack={() => {
                  setSelectedMetric(null);
                  setEditingMetric(false);
                }}
                onEdit={() => setEditingMetric(true)}
                onCancelEdit={() => setEditingMetric(false)}
                onSave={(attr, kind, form) => {
                  setEditingMetric(false);
                  onSaveMetric(attr, kind, form);
                }}
                onDelete={onDeleteMetric}
              />
            ) : null}

            {view === "person" && !selectedMetricMatchesView ? (
              <MetricCard
                title="Person Matrix"
                icon={<UserRound size={17} />}
                attrs={path.driverAttrs}
                kind="driver"
                onOpen={(metric) => {
                  setSelectedMetric(metric);
                  setEditingMetric(false);
                }}
              />
            ) : null}
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

function MetricCard({
  title,
  icon,
  attrs,
  kind,
  onOpen,
}: {
  title: string;
  icon: ReactNode;
  attrs: Attribute[];
  kind: AttrKind;
  onOpen: (selectedMetric: Exclude<SelectedMetric, null>) => void;
}) {
  return (
    <Card className="attribute-card">
      <CardHeader>
        <div className="card-heading-row">
          <CardTitle className="attribute-title">
            {icon}
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="attribute-list">
        {attrs.length ? (
          attrs.map((attr) => (
            <div
              className="attribute-row editable-attribute-row"
              key={attr.id || attr.name}
              role="button"
              tabIndex={0}
              onClick={(event) => {
                const target = event.target as HTMLElement;
                if (target.closest("button,input")) return;
                onOpen({ attr, kind });
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpen({ attr, kind });
                }
              }}
            >
              <span>
                <strong>{clean(attr.name)}</strong>
              </span>
              <span className="metric-rating-pair">
                <small>Current</small>
                <strong className="rating-value">{ratingPercent(currentValue(attr))}</strong>
              </span>
              <span className="metric-rating-pair">
                <small>Target</small>
                <strong className="rating-value">{ratingPercent(attr.final)}</strong>
              </span>
              <span className="metric-slider-row">
                <small>Current</small>
                <Slider
                  min="0"
                  max="10"
                  step="1"
                  value={[currentValue(attr)]}
                  disabled
                  aria-label={`Current rating preview for ${clean(attr.name)}`}
                />
              </span>
              <span className="metric-slider-row">
                <small>Target</small>
                <Slider
                  min="0"
                  max="10"
                  step="1"
                  value={[clamp(attr.final, 0, 10)]}
                  disabled
                  aria-label={`Target rating preview for ${clean(attr.name)}`}
                />
              </span>
            </div>
          ))
        ) : (
          <p className="muted-text">No metrics yet.</p>
        )}
      </CardContent>
    </Card>
  );
}

function MetricDetail({
  title,
  icon,
  selectedMetric,
  editing,
  busy,
  onBack,
  onEdit,
  onCancelEdit,
  onSave,
  onDelete,
}: {
  title: string;
  icon: ReactNode;
  selectedMetric: Exclude<SelectedMetric, null>;
  editing: boolean;
  busy: boolean;
  onBack: () => void;
  onEdit: () => void;
  onCancelEdit: () => void;
  onSave: (attr: Attribute, kind: AttrKind, form: FormData) => void;
  onDelete: (attr: Attribute) => void;
}) {
  const { attr, kind } = selectedMetric;

  if (editing) {
    return <MetricEditForm title={title} icon={icon} attr={attr} kind={kind} busy={busy} onCancel={onCancelEdit} onSave={onSave} />;
  }

  return (
    <div className="details-stack">
      <Button className="back-button" variant="outline" type="button" onClick={onBack}>
        <ArrowLeft size={16} />
        Back
      </Button>
      <Card className="attribute-card">
        <CardHeader>
          <div className="card-heading-row">
            <div>
              <CardTitle className="attribute-title">
                {icon}
                {clean(attr.name)}
              </CardTitle>
              <CardDescription>
                {title} current {ratingPercent(currentValue(attr))} / target {ratingPercent(attr.final)}
              </CardDescription>
            </div>
            <span className="row-actions">
              <ActionButton title="Edit metric" disabled={busy} onClick={onEdit}>
                <Pencil size={16} />
              </ActionButton>
              <ActionButton title="Delete metric" disabled={busy} onClick={() => onDelete(attr)}>
                <Trash2 size={16} />
              </ActionButton>
            </span>
          </div>
        </CardHeader>
        <CardContent className="details-stack">
          <div className="readonly-slider-panel">
            <span className="metric-slider-row">
              <small>Current</small>
              <Slider
                min="0"
                max="10"
                step="1"
                value={[currentValue(attr)]}
                disabled
                aria-label={`Current rating preview for ${clean(attr.name)}`}
              />
            </span>
            <span className="metric-slider-row">
              <small>Target</small>
              <Slider
                min="0"
                max="10"
                step="1"
                value={[clamp(attr.final, 0, 10)]}
                disabled
                aria-label={`Target rating preview for ${clean(attr.name)}`}
              />
            </span>
          </div>
          <div className="details-grid">
          <Card>
            <CardHeader>
              <CardTitle className="detail-card-title">Meaning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{clean(attr.meaning) || "No meaning added yet."}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="detail-card-title">How to build it</CardTitle>
            </CardHeader>
            <CardContent>
              {attr.build.length ? (
                <ul className="action-list">
                  {attr.build.map((item) => (
                    <li key={item}>{clean(item)}</li>
                  ))}
                </ul>
              ) : (
                <p>No build actions added yet.</p>
              )}
            </CardContent>
          </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StepEditForm({
  step,
  busy,
  onCancel,
  onSave,
}: {
  step: Step;
  busy: boolean;
  onCancel: () => void;
  onSave: (form: FormData) => void;
}) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(new FormData(event.currentTarget));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit step</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="editor-form sheet-editor-form" onSubmit={submit}>
          <label>
            Step name
            <input name="title" defaultValue={step.title} />
          </label>
          <label>
            Short label
            <input name="label" defaultValue={step.label} />
          </label>
          <label>
            Meaning / explanation
            <textarea name="meaning" rows={5} defaultValue={step.meaning} />
          </label>
          <label>
            How to build or achieve it
            <textarea name="build" rows={6} defaultValue={buildText(step.build)} />
          </label>
          <label>
            Rating factors JSON
            <textarea name="factors" rows={5} defaultValue={JSON.stringify(step.factors, null, 2)} />
          </label>
          <div className="editor-actions">
            <Button type="submit" disabled={busy}>
              <Save size={16} />
              Save
            </Button>
            <Button variant="outline" type="button" disabled={busy} onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function MetricEditForm({
  title,
  icon,
  attr,
  kind,
  busy,
  onCancel,
  onSave,
}: {
  title: string;
  icon: ReactNode;
  attr: Attribute;
  kind: AttrKind;
  busy: boolean;
  onCancel: () => void;
  onSave: (attr: Attribute, kind: AttrKind, form: FormData) => void;
}) {
  const [currentRating, setCurrentRating] = useState(currentValue(attr));
  const [targetRating, setTargetRating] = useState(clamp(attr.final, 0, 10));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    form.set("current", String(currentRating));
    form.set("final", String(targetRating));
    onSave(attr, kind, form);
  }

  return (
    <Card className="attribute-card">
      <CardHeader>
        <CardTitle className="attribute-title">
          {icon}
          Edit {title}
        </CardTitle>
        <CardDescription>{clean(attr.name)}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="editor-form sheet-editor-form" onSubmit={submit}>
          <label>
            Metric name
            <input name="name" defaultValue={attr.name} />
          </label>
          <label>
            Current rating
            <span className="slider-field">
              <Slider
                min="0"
                max="10"
                step="1"
                value={[currentRating]}
                aria-label={`Current rating slider for ${clean(attr.name)}`}
                onValueChange={([nextValue]) => setCurrentRating(clamp(nextValue || 0, 0, 10))}
              />
              <strong className="rating-value">{ratingPercent(currentRating)}</strong>
            </span>
          </label>
          <label>
            Target rating
            <span className="slider-field">
              <Slider
                min="0"
                max="10"
                step="1"
                value={[targetRating]}
                aria-label={`Target rating slider for ${clean(attr.name)}`}
                onValueChange={([nextValue]) => setTargetRating(clamp(nextValue || 0, 0, 10))}
              />
              <strong className="rating-value">{ratingPercent(targetRating)}</strong>
            </span>
          </label>
          <label>
            Meaning / explanation
            <textarea name="meaning" rows={5} defaultValue={attr.meaning} />
          </label>
          <label>
            How to build or achieve it
            <textarea name="build" rows={6} defaultValue={buildText(attr.build)} />
          </label>
          <div className="editor-actions">
            <Button type="submit" disabled={busy}>
              <Save size={16} />
              Save
            </Button>
            <Button variant="outline" type="button" disabled={busy} onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function EditorPanel({
  target,
  goal,
  path,
  onClose,
  onSubmit,
}: {
  target: EditTarget;
  goal: Goal;
  path: Path;
  onClose: () => void;
  onSubmit: (form: FormData, target: EditTarget) => void;
}) {
  if (!target) return null;

  const isNew = target.type === "step" && !target.item.id;
  const title =
    target.type === "goal"
      ? "Edit goal"
      : target.type === "path"
        ? "Edit roadmap"
        : target.type === "step"
          ? isNew
            ? "Add step"
            : "Edit step"
          : target.item.id
            ? `Edit ${target.kind === "vehicle" ? "business" : "person"} metric`
            : `Add ${target.kind === "vehicle" ? "business" : "person"} metric`;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(new FormData(event.currentTarget), target);
  }

  return (
    <section className="editor-panel" aria-label={title}>
      <form className="editor-form" onSubmit={submit}>
        <div className="editor-header">
          <div>
            <strong>{title}</strong>
            <span>{clean(goal.title)} / {clean(path.name)}</span>
          </div>
          <button className="icon-action" type="button" onClick={onClose} aria-label="Close editor">
            <X size={16} />
          </button>
        </div>

        {target.type === "goal" ? (
          <label>
            Goal name
            <input name="title" defaultValue={target.item.title} />
          </label>
        ) : null}

        {target.type === "path" ? (
          <label>
            Roadmap name
            <input name="name" defaultValue={target.item.name} />
          </label>
        ) : null}

        {target.type === "step" ? (
          <>
            <label>
              Step name
              <input name="title" defaultValue={target.item.title} />
            </label>
            <label>
              Short label
              <input name="label" defaultValue={target.item.label} />
            </label>
            <label>
              Meaning / explanation
              <textarea name="meaning" rows={4} defaultValue={target.item.meaning} />
            </label>
            <label>
              How to build or achieve it
              <textarea name="build" rows={5} defaultValue={buildText(target.item.build)} />
            </label>
            <label>
              Rating factors JSON
              <textarea name="factors" rows={4} defaultValue={JSON.stringify(target.item.factors, null, 2)} />
            </label>
          </>
        ) : null}

        {target.type === "metric" ? (
          <>
            <label>
              Metric name
              <input name="name" defaultValue={target.item.name} />
            </label>
            <label>
              Target rating
              <input name="final" type="number" min="0" max="10" defaultValue={target.item.final} />
            </label>
            <label>
              Meaning / explanation
              <textarea name="meaning" rows={4} defaultValue={target.item.meaning} />
            </label>
            <label>
              How to build or achieve it
              <textarea name="build" rows={5} defaultValue={buildText(target.item.build)} />
            </label>
          </>
        ) : null}

        <div className="editor-actions">
          <Button type="submit">
            <Save size={16} />
            Save
          </Button>
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </section>
  );
}

export default function ReverseGoalMap() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goalId, setGoalId] = useState("");
  const [pathId, setPathId] = useState("");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [editTarget, setEditTarget] = useState<EditTarget>(null);
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);

  const goal = useMemo(() => goals.find((item) => item.id === goalId) || goals[0], [goalId, goals]);
  const path = useMemo(() => goal?.paths.find((item) => item.id === pathId) || goal?.paths[0], [goal, pathId]);
  const currentStep = useMemo(() => goal?.steps.find((step) => step.id === path?.currentStepId) || null, [goal, path]);
  const selectedStep = useMemo(() => goal?.steps.find((step) => step.id === selectedStepId) || null, [goal, selectedStepId]);
  const GoalIcon = goal ? goalIcons[goal.id as keyof typeof goalIcons] || Target : Target;

  const load = useCallback(async () => {
    const response = await fetch("/api/dashboard", { cache: "no-store" });
    const data = (await response.json()) as { goals: Goal[] };
    setGoals(data.goals);
    setGoalId((previous) => (data.goals.some((item) => item.id === previous) ? previous : data.goals[0]?.id || ""));
    setPathId((previous) => {
      const selectedGoal = data.goals.find((item) => item.id === goalId) || data.goals[0];
      return selectedGoal?.paths.some((item) => item.id === previous) ? previous : selectedGoal?.paths[0]?.id || "";
    });
    setLoading(false);
  }, [goalId]);

  useEffect(() => {
    load();
  }, [load]);

  async function mutate(body: Record<string, unknown>) {
    setBusy(true);
    const response = await fetch("/api/dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await response.json()) as { goals?: Goal[]; error?: string };
    if (!response.ok) throw new Error(data.error || "Database update failed");
    setGoals(data.goals || []);
    setEditTarget(null);
    setBusy(false);
  }

  async function safeMutate(body: Record<string, unknown>) {
    try {
      await mutate(body);
    } catch (error) {
      setBusy(false);
      alert(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  function submitEditor(form: FormData, target: EditTarget) {
    if (!target || !goal || !path) return;

    if (target.type === "goal") {
      safeMutate({ action: "updateGoal", id: target.item.id, title: form.get("title") });
    } else if (target.type === "path") {
      safeMutate({ action: "updatePath", id: target.item.id, name: form.get("name") });
    } else if (target.type === "step") {
      safeMutate({
        action: target.item.id ? "updateStep" : "createStep",
        id: target.item.id,
        goalId: goal.id,
        label: form.get("label"),
        title: form.get("title"),
        meaning: form.get("meaning"),
        build: linesFromForm(form, "build"),
        factors: parseFactors(form.get("factors")),
      });
    } else {
      safeMutate({
        action: target.item.id ? "updateMetric" : "createMetric",
        id: target.item.id,
        pathId: path.id,
        kind: target.kind,
        name: form.get("name"),
        final: form.get("final"),
        group: target.item.group || "default",
        meaning: form.get("meaning"),
        build: linesFromForm(form, "build"),
      });
    }
  }

  if (loading) {
    return (
      <main className="app-shell loading-state">
        <Loader2 className="spin" size={24} />
        Loading database...
      </main>
    );
  }

  if (!goal) {
    return (
      <main className="app-shell">
        <EmptyState title="No database content yet" description="Create a goal to start building your editable dashboard." />
        <Button type="button" onClick={() => safeMutate({ action: "createGoal", title: "New Goal" })}>
          <Plus size={16} />
          Add goal
        </Button>
      </main>
    );
  }

  if (!path) {
    return (
      <main className="app-shell">
        <EmptyState title={clean(goal.title)} description="This goal has no roadmap yet. Add one to manage steps and matrices." />
        <Button type="button" onClick={() => safeMutate({ action: "createPath", goalId: goal.id, name: "Default Roadmap" })}>
          <Plus size={16} />
          Add roadmap
        </Button>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <section className="control-bar dynamic-control-bar" aria-label="Map filters">
        <label>
          <Target size={16} />
          <Select
            aria-label="Select goal"
            value={goal.id}
            onChange={(event) => {
              const nextGoal = goals.find((item) => item.id === event.target.value);
              setGoalId(event.target.value);
              setPathId(nextGoal?.paths[0]?.id || "");
              setSelectedStepId(null);
              setEditTarget(null);
            }}
          >
            {goals.map((item) => (
              <option value={item.id} key={item.id}>
                {clean(item.title)}
              </option>
            ))}
          </Select>
        </label>
        <label>
          <GoalIcon size={16} />
          <Select
            aria-label="Select roadmap"
            value={path.id}
            onChange={(event) => {
              setPathId(event.target.value);
              setSelectedStepId(null);
            }}
          >
            {goal.paths.map((item) => (
              <option value={item.id} key={item.id}>
                {clean(item.name)}
              </option>
            ))}
          </Select>
        </label>
        <div className="control-actions">
          <Button variant="outline" type="button" disabled={busy} onClick={() => safeMutate({ action: "createGoal", title: "New Goal" })}>
            <Plus size={16} />
            Goal
          </Button>
          <Button variant="outline" type="button" disabled={busy} onClick={() => safeMutate({ action: "createPath", goalId: goal.id, name: "New Roadmap" })}>
            <Plus size={16} />
            Roadmap
          </Button>
        </div>
      </section>

      <section className="dashboard-summary">
        <Card>
          <CardHeader>
            <div className="card-heading-row">
              <div>
                <CardTitle className="detail-card-title">
                  <Database size={17} />
                  {clean(goal.title)}
                </CardTitle>
                <CardDescription>{clean(path.name)}</CardDescription>
              </div>
              <span className="row-actions">
                <ActionButton title="Edit goal" disabled={busy} onClick={() => setEditTarget({ type: "goal", item: goal })}>
                  <Pencil size={16} />
                </ActionButton>
                <ActionButton title="Edit roadmap" disabled={busy} onClick={() => setEditTarget({ type: "path", item: path })}>
                  <Pencil size={16} />
                </ActionButton>
                <ActionButton title="Delete roadmap" disabled={busy} onClick={() => safeMutate({ action: "deletePath", id: path.id })}>
                  <Trash2 size={16} />
                </ActionButton>
                <Button
                  variant="outline"
                  type="button"
                  disabled={busy}
                  onClick={() =>
                    setEditTarget({
                      type: "metric",
                      kind: "vehicle",
                      item: { name: "New business matrix", final: 10, group: "default", meaning: "", build: [] },
                    })
                  }
                >
                  <Plus size={16} />
                  Business matrix
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  disabled={busy}
                  onClick={() =>
                    setEditTarget({
                      type: "metric",
                      kind: "driver",
                      item: { name: "New person matrix", final: 10, group: "default", meaning: "", build: [] },
                    })
                  }
                >
                  <Plus size={16} />
                  Person matrix
                </Button>
              </span>
            </div>
          </CardHeader>
          <CardContent className="summary-grid">
            <div className="score-tile">
              <span>Current step</span>
              <strong>{currentStep ? clean(currentStep.label) : "Not set"}</strong>
            </div>
            <div className="score-tile">
              <span>Roadmap progress</span>
              <strong>
                {currentStep ? `${goal.steps.findIndex((step) => step.id === currentStep.id) + 1}/${goal.steps.length}` : `0/${goal.steps.length}`}
              </strong>
            </div>
            <div className="score-tile">
              <span>Business avg</span>
              <strong>{ratingPercent(averageCurrent(path.vehicleAttrs))}</strong>
            </div>
            <div className="score-tile">
              <span>Person avg</span>
              <strong>{ratingPercent(averageCurrent(path.driverAttrs))}</strong>
            </div>
          </CardContent>
        </Card>
      </section>

      <EditorPanel target={editTarget} goal={goal} path={path} onClose={() => setEditTarget(null)} onSubmit={submitEditor} />

      <section className="workspace-grid workspace-grid-single">
        <section className="timeline-panel">
          <div className="section-heading">
            <div>
              <h2>Roadmap steps</h2>
              <p>Add, edit, delete, and mark your current position.</p>
            </div>
            <Button
              type="button"
              disabled={busy}
              onClick={() =>
                setEditTarget({
                  type: "step",
                  item: {
                    label: "New Step",
                    title: "New roadmap step",
                    meaning: "",
                    build: [],
                    factors: { default: 0.5 },
                  },
                })
              }
            >
              <Plus size={16} />
              Add step
            </Button>
          </div>
          <div className="timeline-list">
            {goal.steps.length ? (
              goal.steps.map((step, index) => (
                <StepCard
                  key={step.id || step.title}
                  step={step}
                  path={path}
                  number={index + 1}
                  current={path.currentStepId === step.id}
                  onOpen={() => setSelectedStepId(step.id || null)}
                />
              ))
            ) : (
              <EmptyState title="No steps yet" description="Add your first roadmap step." />
            )}
          </div>
        </section>
      </section>

      <StepSheet
        open={selectedStep !== null}
        step={selectedStep}
        goal={goal}
        path={path}
        busy={busy}
        onClose={() => setSelectedStepId(null)}
        onSetProgress={(step) => safeMutate({ action: "setProgress", pathId: path.id, stepId: step.id })}
        onDeleteStep={(step) => safeMutate({ action: "deleteStep", id: step.id })}
        onSaveStep={(step, form) =>
          safeMutate({
            action: "updateStep",
            id: step.id,
            goalId: goal.id,
            label: form.get("label"),
            title: form.get("title"),
            meaning: form.get("meaning"),
            build: linesFromForm(form, "build"),
            factors: parseFactors(form.get("factors")),
          })
        }
        onSaveMetric={(attr, kind, form) =>
          void (async () => {
            await safeMutate({
              action: "updateMetric",
              id: attr.id,
              pathId: path.id,
              kind,
              name: form.get("name"),
              final: form.get("final"),
              group: "default",
              meaning: form.get("meaning"),
              build: linesFromForm(form, "build"),
            });
            await safeMutate({ action: "updateMetricRating", id: attr.id, current: form.get("current") });
          })()
        }
        onDeleteMetric={(attr) => safeMutate({ action: "deleteMetric", id: attr.id })}
      />
    </main>
  );
}
