"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowLeft,
  BriefcaseBusiness,
  ChevronRight,
  CircleDollarSign,
  Gauge,
  HeartHandshake,
  ListChecks,
  Sparkles,
  Target,
  TriangleAlert,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select } from "@/components/ui/select";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { DATA, attributeDetailContent, stepDetailContent } from "@/data/goals";
import { avgRating, clamp, clean, currentAttrKey, currentGapClass, stepRating } from "@/lib/ratings";
import type { Attribute, Goal, Path, Step } from "@/lib/types";

type AttrKind = "vehicle" | "driver";
type CurrentRatings = Record<string, number>;
type StepDetailView = "details" | "driver" | "vehicle" | "attribute";
type SelectedAttribute = { attr: Attribute; kind: AttrKind } | null;

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

function ScoreTile({
  label,
  value,
  icon,
  tone = "default",
}: {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  tone?: "default" | "dark";
}) {
  return (
    <div className={tone === "dark" ? "score-tile score-tile-dark" : "score-tile"}>
      <span>
        {icon}
        {label}
      </span>
      <strong>{value}</strong>
    </div>
  );
}

function AttributeEditor({
  title,
  icon,
  attrs,
  kind,
  path,
  current,
  onChange,
  onSelectAttribute,
}: {
  title: string;
  icon: React.ReactNode;
  attrs: Attribute[];
  kind: AttrKind;
  path: Path;
  current: CurrentRatings;
  onChange: (key: string, value: number) => void;
  onSelectAttribute: (selection: { attr: Attribute; kind: AttrKind }) => void;
}) {
  return (
    <Card className="attribute-card">
      <CardHeader>
        <CardTitle className="attribute-title">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="attribute-list">
        {attrs.map((attr) => {
          const key = currentAttrKey(path, kind, attr);
          const value = current[key] ?? 0;

          return (
            <div className="attribute-row" key={key}>
              <span>
                <strong>{clean(attr.name)}</strong>
                <small>{attr.group}</small>
              </span>
              <button className="attribute-info-button" type="button" aria-label={`Open details for ${clean(attr.name)}`} onClick={() => onSelectAttribute({ attr, kind })}>
                <ChevronRight size={15} />
              </button>
              <strong className="rating-value">{ratingPercent(value)}</strong>
              <Slider
                min="0"
                max="10"
                step="1"
                value={[value]}
                aria-label={`Current rating slider for ${clean(attr.name)}`}
                onValueChange={([nextValue]) => onChange(key, clamp(nextValue || 0, 0, 10))}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

function readinessPercent(currentValue: number, requiredValue: number) {
  if (requiredValue <= 0) return 100;
  return clamp(Math.round((currentValue / requiredValue) * 100), 0, 100);
}

function ratingPercent(value: number) {
  return `${clamp(value, 0, 10) * 10}%`;
}

function gapPercent(value: number) {
  return `${clamp(Math.ceil(value), 0, 10) * 10}%`;
}

function matrixLabel(kind: AttrKind) {
  return kind === "vehicle" ? "Business" : "Person";
}

function StepStats({
  path,
  step,
  current,
}: {
  path: Path;
  step: Step;
  current: CurrentRatings;
}) {
  const vehicleRequired = avgRating(path.vehicleAttrs, step);
  const driverRequired = avgRating(path.driverAttrs, step);
  const vehicleCurrent = averageCurrent(current, path, path.vehicleAttrs, "vehicle");
  const driverCurrent = averageCurrent(current, path, path.driverAttrs, "driver");
  const businessPercent = readinessPercent(vehicleCurrent, vehicleRequired);
  const personPercent = readinessPercent(driverCurrent, driverRequired);
  const readinessGapPercent = clamp(100 - Math.round((businessPercent + personPercent) / 2), 0, 100);

  return (
    <div className="step-stats">
      <ScoreTile
        label="Business"
        value={`${businessPercent}%`}
        icon={<BriefcaseBusiness size={13} />}
      />
      <ScoreTile
        label="Person"
        value={`${personPercent}%`}
        icon={<UserRound size={13} />}
      />
      <ScoreTile
        label="Gap"
        value={`${readinessGapPercent}%`}
        icon={<TriangleAlert size={13} />}
        tone="dark"
      />
    </div>
  );
}

function StepButton({
  path,
  step,
  number,
  current,
  active,
  onClick,
}: {
  path: Path;
  step: Step;
  number: number;
  current: CurrentRatings;
  active: boolean;
  onClick: () => void;
}) {
  const vehicleGap = avgRating(path.vehicleAttrs, step) - averageCurrent(current, path, path.vehicleAttrs, "vehicle");
  const driverGap = avgRating(path.driverAttrs, step) - averageCurrent(current, path, path.driverAttrs, "driver");
  const status = gapLabel(Math.max(vehicleGap, driverGap));

  return (
    <button className={active ? "timeline-item is-active" : "timeline-item"} type="button" onClick={onClick}>
      <span className="timeline-index">{number}</span>
      <span className="timeline-main">
        <span className="timeline-meta">
          <span className={`gap-pill ${currentGapClass(Math.max(vehicleGap, driverGap))}`}>{status}</span>
          {step.label === "Final" ? <span className="final-badge">Final</span> : null}
        </span>
        <strong>{clean(step.title)}</strong>
      </span>
      <StepStats path={path} step={step} current={current} />
      <ChevronRight className="timeline-arrow" size={18} />
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
  onSelectAttribute,
}: {
  title: string;
  attrs: Attribute[];
  kind: AttrKind;
  path: Path;
  step: Step;
  current: CurrentRatings;
  onSelectAttribute: (selection: { attr: Attribute; kind: AttrKind }) => void;
}) {
  const sortedAttrs = useMemo(
    () =>
      [...attrs].sort((a, b) => {
        const gapA = stepRating(a, step) - currentValue(current, path, kind, a);
        const gapB = stepRating(b, step) - currentValue(current, path, kind, b);
        return gapB - gapA;
      }),
    [attrs, current, kind, path, step],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="comparison-list">
        {sortedAttrs.map((attr) => {
          const required = stepRating(attr, step);
          const now = currentValue(current, path, kind, attr);
          const gap = required - now;

          return (
            <button className="comparison-row" type="button" key={`${kind}-${attr.name}`} onClick={() => onSelectAttribute({ attr, kind })}>
              <div>
                <strong>{clean(attr.name)}</strong>
                <small>{attr.group}</small>
              </div>
              <div className="comparison-bars">
                <span>Current {ratingPercent(now)}</span>
                <Progress value={now} indicatorClassName="progress-current" />
                <span>Target {ratingPercent(required)}</span>
                <Progress value={required} />
              </div>
              <span className={`gap-pill ${currentGapClass(gap)}`}>{gapPercent(gap)}</span>
              <ChevronRight className="comparison-arrow" size={16} />
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}

function AttributeOverview({
  selection,
  path,
  step,
  current,
  onBack,
}: {
  selection: { attr: Attribute; kind: AttrKind };
  path: Path;
  step: Step;
  current: CurrentRatings;
  onBack: () => void;
}) {
  const { attr, kind } = selection;
  const required = stepRating(attr, step);
  const now = currentValue(current, path, kind, attr);
  const gap = required - now;
  const label = matrixLabel(kind);
  const details = attributeDetailContent(attr, kind, path, step);

  return (
    <div className="attribute-overview">
      <Button className="back-button" variant="outline" type="button" onClick={onBack}>
        <ArrowLeft size={16} />
        Back to {label} matrix
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="detail-card-title">
            {kind === "vehicle" ? <BriefcaseBusiness size={16} /> : <UserRound size={16} />}
            {clean(attr.name)}
          </CardTitle>
          <CardDescription>
            {label} attribute / {attr.group}
          </CardDescription>
        </CardHeader>
        <CardContent className="attribute-overview-content">
          <div className="attribute-meter-grid">
            <ScoreTile label="Current" value={ratingPercent(now)} />
            <ScoreTile label="Target" value={ratingPercent(required)} />
            <ScoreTile label="Gap" value={gapPercent(gap)} tone="dark" />
          </div>
        </CardContent>
      </Card>

      <div className="details-grid">
        <Card>
          <CardHeader>
            <CardTitle className="detail-card-title">
              <ListChecks size={16} />
              Meaning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{details.meaning}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="detail-card-title">
              <Sparkles size={16} />
              How to build it
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="action-list">
              {details.build.map((item) => (
                <li key={item}>{clean(item)}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

function CurrentAttributeOverview({
  selection,
  path,
  current,
  onBack,
}: {
  selection: { attr: Attribute; kind: AttrKind };
  path: Path;
  current: CurrentRatings;
  onBack: () => void;
}) {
  const { attr, kind } = selection;
  const now = currentValue(current, path, kind, attr);
  const target = attr.final;
  const gap = target - now;
  const label = matrixLabel(kind);
  const details = attributeDetailContent(attr, kind, path);

  return (
    <div className="attribute-overview">
      <Button className="back-button" variant="outline" type="button" onClick={onBack}>
        <ArrowLeft size={16} />
        Back to ratings
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="detail-card-title">
            {kind === "vehicle" ? <BriefcaseBusiness size={16} /> : <UserRound size={16} />}
            {clean(attr.name)}
          </CardTitle>
          <CardDescription>
            {label} rating / {attr.group}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="attribute-meter-grid">
            <ScoreTile label="Current" value={ratingPercent(now)} />
            <ScoreTile label="Target" value={ratingPercent(target)} />
            <ScoreTile label="Gap" value={gapPercent(gap)} tone="dark" />
          </div>
        </CardContent>
      </Card>

      <div className="details-grid">
        <Card>
          <CardHeader>
            <CardTitle className="detail-card-title">
              <ListChecks size={16} />
              Meaning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{details.meaning}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="detail-card-title">
              <Sparkles size={16} />
              How to build it
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="action-list">
              {details.build.map((item) => (
                <li key={item}>{clean(item)}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

function StepMeaningDetails({ goal, path, step, current }: { goal: Goal; path: Path; step: Step; current: CurrentRatings }) {
  const businessRequired = avgRating(path.vehicleAttrs, step);
  const personRequired = avgRating(path.driverAttrs, step);
  const businessCurrent = averageCurrent(current, path, path.vehicleAttrs, "vehicle");
  const personCurrent = averageCurrent(current, path, path.driverAttrs, "driver");
  const businessGap = Math.max(0, Math.ceil(businessRequired - businessCurrent));
  const personGap = Math.max(0, Math.ceil(personRequired - personCurrent));
  const details = stepDetailContent(goal, path, step);

  return (
    <div className="details-stack">
      <Card className="step-meaning-card">
        <CardHeader>
          <CardTitle>{clean(step.title)}</CardTitle>
          <CardDescription>{clean(step.note)}</CardDescription>
        </CardHeader>
        <CardContent>
          <StepStats path={path} step={step} current={current} />
        </CardContent>
      </Card>

      <div className="details-grid">
        <Card>
          <CardHeader>
            <CardTitle className="detail-card-title">
              <ListChecks size={16} />
              Meaning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{details.meaning}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="detail-card-title">
              <Sparkles size={16} />
              How to build it
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="action-list">
              {details.build.map((item) => (
                <li key={item}>{clean(item)}</li>
              ))}
              <li>
                Current gap: Business <strong>{gapPercent(businessGap)}</strong>, Person{" "}
                <strong>{gapPercent(personGap)}</strong>. Start with the larger gap.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StepDetails({
  open,
  goal,
  path,
  step,
  current,
  onClose,
}: {
  open: boolean;
  goal: Goal;
  path: Path;
  step: Step | null;
  current: CurrentRatings;
  onClose: () => void;
}) {
  const [view, setView] = useState<StepDetailView>("details");
  const [selectedAttribute, setSelectedAttribute] = useState<SelectedAttribute>(null);

  useEffect(() => {
    setView("details");
    setSelectedAttribute(null);
  }, [step]);

  return (
    <Sheet open={open} onOpenChange={(nextOpen) => (!nextOpen ? onClose() : undefined)}>
      <SheetContent className="step-detail-sheet" onClose={onClose}>
        {step ? (
          <div className="sheet-scroll">
            <div className="detail-heading">
              <div className="sheet-view-switcher" aria-label="Step detail view">
                <Button
                  variant={view === "details" ? "default" : "outline"}
                  type="button"
                  onClick={() => {
                    setSelectedAttribute(null);
                    setView("details");
                  }}
                >
                  <ListChecks size={16} />
                  Details
                </Button>
                <Button
                  variant={view === "driver" || (view === "attribute" && selectedAttribute?.kind === "driver") ? "default" : "outline"}
                  type="button"
                  onClick={() => {
                    setSelectedAttribute(null);
                    setView("driver");
                  }}
                >
                  <UserRound size={16} />
                  Person
                </Button>
                <Button
                  variant={view === "vehicle" || (view === "attribute" && selectedAttribute?.kind === "vehicle") ? "default" : "outline"}
                  type="button"
                  onClick={() => {
                    setSelectedAttribute(null);
                    setView("vehicle");
                  }}
                >
                  <BriefcaseBusiness size={16} />
                  Business
                </Button>
              </div>
            </div>
            {view === "details" ? (
              <StepMeaningDetails goal={goal} path={path} step={step} current={current} />
            ) : null}
            {view === "driver" ? (
              <AttributeComparison
                title="Person matrix"
                attrs={path.driverAttrs}
                kind="driver"
                path={path}
                step={step}
                current={current}
                onSelectAttribute={(selection) => {
                  setSelectedAttribute(selection);
                  setView("attribute");
                }}
              />
            ) : null}
            {view === "vehicle" ? (
              <AttributeComparison
                title="Business matrix"
                attrs={path.vehicleAttrs}
                kind="vehicle"
                path={path}
                step={step}
                current={current}
                onSelectAttribute={(selection) => {
                  setSelectedAttribute(selection);
                  setView("attribute");
                }}
              />
            ) : null}
            {view === "attribute" && selectedAttribute ? (
              <AttributeOverview
                selection={selectedAttribute}
                path={path}
                step={step}
                current={current}
                onBack={() => setView(selectedAttribute.kind)}
              />
            ) : null}
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

function CurrentRatingSheet({
  open,
  path,
  current,
  onChange,
  onClose,
}: {
  open: boolean;
  path: Path;
  current: CurrentRatings;
  onChange: (key: string, value: number) => void;
  onClose: () => void;
}) {
  const [selectedAttribute, setSelectedAttribute] = useState<SelectedAttribute>(null);

  useEffect(() => {
    if (!open) setSelectedAttribute(null);
  }, [open, path]);

  return (
    <Sheet open={open} onOpenChange={(nextOpen) => (!nextOpen ? onClose() : undefined)}>
      <SheetContent className="current-rating-sheet" onClose={onClose}>
        <div className="sheet-scroll">
          {selectedAttribute ? (
            <CurrentAttributeOverview selection={selectedAttribute} path={path} current={current} onBack={() => setSelectedAttribute(null)} />
          ) : (
            <div className="rating-grid">
              <AttributeEditor
                title="Business rating"
                icon={<BriefcaseBusiness size={17} />}
                attrs={path.vehicleAttrs}
                kind="vehicle"
                path={path}
                current={current}
                onChange={onChange}
                onSelectAttribute={setSelectedAttribute}
              />
              <AttributeEditor
                title="Person rating"
                icon={<UserRound size={17} />}
                attrs={path.driverAttrs}
                kind="driver"
                path={path}
                current={current}
                onChange={onChange}
                onSelectAttribute={setSelectedAttribute}
              />
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function ReverseGoalMap() {
  const [goalId, setGoalId] = useState(DATA[0].id);
  const goal = useMemo(() => DATA.find((item) => item.id === goalId) || DATA[0], [goalId]);
  const [pathIndex, setPathIndex] = useState(0);
  const path = goal.paths[pathIndex] || goal.paths[0];
  const [current, setCurrent] = useState<CurrentRatings>({});
  const [currentRatingOpen, setCurrentRatingOpen] = useState(false);
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

  const selectedStep = selectedStepIndex === null ? null : goal.steps[selectedStepIndex] || null;

  function updateCurrent(key: string, value: number) {
    localStorage.setItem(key, String(value));
    setCurrent((previous) => ({ ...previous, [key]: value }));
  }

  function changeGoal(nextGoalId: string) {
    setGoalId(nextGoalId);
    setPathIndex(0);
    setSelectedStepIndex(null);
  }

  return (
    <main className="app-shell">
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
        <Button className="current-rating-trigger" type="button" onClick={() => setCurrentRatingOpen(true)}>
          <Gauge size={16} />
          Current rating
        </Button>
      </section>

      <section className="workspace-grid workspace-grid-single">
        <section className="timeline-panel">
          <div className="timeline-list">
            {goal.steps.map((step, originalIndex) => (
              <StepButton
                key={`${step.label}-${step.title}`}
                path={path}
                step={step}
                number={goal.steps.length - originalIndex - 1}
                current={current}
                active={selectedStepIndex === originalIndex}
                onClick={() => {
                  setSelectedStepIndex(originalIndex);
                  updateUrl(originalIndex);
                }}
              />
            ))}
          </div>
        </section>
      </section>

      <StepDetails
        open={selectedStepIndex !== null}
        goal={goal}
        path={path}
        step={selectedStep}
        current={current}
        onClose={() => {
          setSelectedStepIndex(null);
          updateUrl(null);
        }}
      />
      <CurrentRatingSheet
        open={currentRatingOpen}
        path={path}
        current={current}
        onChange={updateCurrent}
        onClose={() => setCurrentRatingOpen(false)}
      />
    </main>
  );
}
