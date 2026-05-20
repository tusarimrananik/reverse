"use client";

import { useEffect, useMemo, useState } from "react";
import { DATA } from "@/data/goals";
import type { Attribute, Goal, Path, Step } from "@/lib/types";
import { avgRating, clamp, clean, currentAttrKey, currentGapClass, stepRating } from "@/lib/ratings";

type AttrKind = "vehicle" | "driver";
type CurrentRatings = Record<string, number>;

function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    route: (
      <>
        <path d="M3 17 9 7l4 6 3-4 5 8z" />
        <path d="M3 17h18" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M8 19v-4" />
        <path d="M12 19V9" />
        <path d="M16 19v-7" />
        <path d="M20 19V7" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name] || icons.target}
    </svg>
  );
}

function goalIcon(goalId: string) {
  if (goalId === "physicalHealth") return "chart";
  if (goalId === "relationship") return "user";
  return "target";
}

function currentValue(current: CurrentRatings, path: Path, kind: AttrKind, attr: Attribute) {
  return current[currentAttrKey(path, kind, attr)] ?? 0;
}

function avgCurrent(current: CurrentRatings, path: Path, attrs: Attribute[], kind: AttrKind) {
  if (!attrs.length) return 0;
  const total = attrs.reduce((sum, attr) => sum + currentValue(current, path, kind, attr), 0);
  return Math.round(total / attrs.length);
}

function Bar({ value, current = false }: { value: number; current?: boolean }) {
  return (
    <div className="bar">
      <span className={current ? "current-bar" : undefined} style={{ width: `${clamp(value, 0, 10) * 10}%` }} />
    </div>
  );
}

function CurrentAttributeTable({
  title,
  hint,
  attrs,
  kind,
  path,
  current,
  onChange,
}: {
  title: string;
  hint: string;
  attrs: Attribute[];
  kind: AttrKind;
  path: Path;
  current: CurrentRatings;
  onChange: (key: string, value: number) => void;
}) {
  return (
    <div className="current-attrs">
      <h3>{title}</h3>
      <p className="hint">{hint}</p>
      <table className="current-table">
        <tbody>
          {attrs.map((attr) => {
            const key = currentAttrKey(path, kind, attr);
            const value = current[key] ?? 0;
            return (
              <tr key={key}>
                <td>
                  <strong>{clean(attr.name)}</strong>
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="1"
                    value={value}
                    aria-label={`Current level for ${clean(attr.name)}`}
                    onChange={(event) => onChange(key, clamp(Number(event.target.value) || 0, 0, 10))}
                  />
                </td>
                <td>
                  <Bar value={value} current />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function CurrentRatingPanel({
  path,
  current,
  onChange,
}: {
  path: Path;
  current: CurrentRatings;
  onChange: (key: string, value: number) => void;
}) {
  return (
    <section className="current-panel" aria-label="Your current levels">
      <CurrentAttributeTable
        title="Current Vehicle/System position"
        hint="Rate where each vehicle/system attribute is right now."
        attrs={path.vehicleAttrs}
        kind="vehicle"
        path={path}
        current={current}
        onChange={onChange}
      />
      <CurrentAttributeTable
        title="Current Driver/Skill level"
        hint="Rate where each skill or behavior attribute is right now."
        attrs={path.driverAttrs}
        kind="driver"
        path={path}
        current={current}
        onChange={onChange}
      />
    </section>
  );
}

function StepSummary({
  path,
  step,
  index,
  current,
}: {
  path: Path;
  step: Step;
  index: number;
  current: CurrentRatings;
}) {
  const vehicleRequired = avgRating(path.vehicleAttrs, step);
  const driverRequired = avgRating(path.driverAttrs, step);
  const vehicleCurrent = avgCurrent(current, path, path.vehicleAttrs, "vehicle");
  const driverCurrent = avgCurrent(current, path, path.driverAttrs, "driver");
  const vehicleGap = vehicleRequired - vehicleCurrent;
  const driverGap = driverRequired - driverCurrent;

  return (
    <>
      <div className="step-head">
        <span className="step-index">{index + 1}</span>
        <div>
          <span className="step-label">{clean(step.label)}</span>
          <h3>{clean(step.title)}</h3>
          <div className="note">{clean(step.note)}</div>
        </div>
      </div>
      <div className="step-score">
        <span>Vehicle req/current</span>
        <b>
          {vehicleRequired}/{vehicleCurrent}
        </b>
        <span>Driver req/current</span>
        <b>
          {driverRequired}/{driverCurrent}
        </b>
        <span>Vehicle gap</span>
        <b>{vehicleGap <= 0 ? 0 : Math.ceil(vehicleGap)}</b>
        <span>Driver gap</span>
        <b>{driverGap <= 0 ? 0 : Math.ceil(driverGap)}</b>
      </div>
    </>
  );
}

function RatingTable({
  title,
  hint,
  attrs,
  step,
  path,
  kind,
  current,
}: {
  title: string;
  hint: string;
  attrs: Attribute[];
  step: Step;
  path: Path;
  kind: AttrKind;
  current: CurrentRatings;
}) {
  return (
    <div className="rating-table-wrap">
      <h4>{title}</h4>
      <p className="hint">{hint}</p>
      <table className="rating-table">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Your current state</th>
            <th>Required for this step</th>
            <th>Gap</th>
          </tr>
        </thead>
        <tbody>
          {attrs.map((attr) => {
            const required = stepRating(attr, step);
            const currentScore = currentValue(current, path, kind, attr);
            const gap = required - currentScore;
            return (
              <tr key={`${kind}-${attr.name}`}>
                <td>
                  <strong>{clean(attr.name)}</strong>
                </td>
                <td>
                  <div className="compare-rating">
                    <Bar value={currentScore} />
                    <div className="nums">
                      <b>{currentScore}/10</b>
                      <small>Your current state</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="compare-rating">
                    <Bar value={required} />
                    <div className="nums">
                      <b>{required}/10</b>
                      <small>Required for this step</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`gap ${currentGapClass(gap)}`}>{gap <= 0 ? 0 : Math.ceil(gap)}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function StepSheet({
  open,
  path,
  step,
  stepIndex,
  current,
  onClose,
}: {
  open: boolean;
  path: Path | null;
  step: Step | null;
  stepIndex: number;
  current: CurrentRatings;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.classList.toggle("sheet-open", open);
    return () => document.body.classList.remove("sheet-open");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div id="stepSheet" className={`sheet ${open ? "open" : ""}`} aria-hidden={!open}>
      <button className="sheet-backdrop" type="button" aria-label="Close step details" onClick={onClose} />
      <aside className="sheet-panel" role="dialog" aria-modal="true" aria-label="Step details">
        <header className="sheet-header">
          <button className="sheet-close" type="button" aria-label="Close step details" onClick={onClose}>
            &times;
          </button>
        </header>
        <div id="stepDetail" className="sheet-body">
          {path && step ? (
            <article className="step-card">
              <div className="step-link">
                <StepSummary path={path} step={step} index={stepIndex} current={current} />
              </div>
              <div className="step-content">
                <RatingTable
                  title="Vehicle / System: current vs this step"
                  hint="Compares your current vehicle/system attributes with this step's required level."
                  attrs={path.vehicleAttrs}
                  step={step}
                  path={path}
                  kind="vehicle"
                  current={current}
                />
                <RatingTable
                  title="Driver / Person: current vs this step"
                  hint="Compares your current skill/behavior attributes with this step's required level."
                  attrs={path.driverAttrs}
                  step={step}
                  path={path}
                  kind="driver"
                  current={current}
                />
              </div>
            </article>
          ) : null}
        </div>
      </aside>
    </div>
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextGoal = params.get("goal");
    const goalExists = DATA.some((item) => item.id === nextGoal);
    if (nextGoal && goalExists) setGoalId(nextGoal);
    if (params.has("path")) setPathIndex(clamp(Number(params.get("path") || 0), 0, DATA[0].paths.length - 1));
    if (params.has("step")) setSelectedStepIndex(clamp(Number(params.get("step") || 0), 0, DATA[0].steps.length - 1));
  }, []);

  useEffect(() => {
    if (!path) return;
    const next: CurrentRatings = {};
    [...path.vehicleAttrs.map((attr) => currentAttrKey(path, "vehicle", attr)), ...path.driverAttrs.map((attr) => currentAttrKey(path, "driver", attr))].forEach((key) => {
      const saved = localStorage.getItem(key);
      if (saved !== null) next[key] = clamp(Number(saved), 0, 10);
    });
    setCurrent(next);
  }, [path]);

  const visibleSteps = goal.steps.filter((step) => {
    const haystack = `${step.label} ${step.title} ${step.note}`.toLowerCase();
    return !query.trim() || haystack.includes(query.trim().toLowerCase());
  });

  const selectedStep = selectedStepIndex === null ? null : goal.steps[selectedStepIndex] || null;

  function updateCurrent(key: string, value: number) {
    localStorage.setItem(key, String(value));
    setCurrent((previous) => ({ ...previous, [key]: value }));
  }

  function openStep(index: number) {
    setSelectedStepIndex(index);
    const url = new URL(window.location.href);
    url.searchParams.set("goal", goal.id);
    url.searchParams.set("path", String(pathIndex));
    url.searchParams.set("step", String(index));
    history.replaceState(null, "", url);
  }

  function closeStep() {
    setSelectedStepIndex(null);
    const url = new URL(window.location.href);
    url.searchParams.set("goal", goal.id);
    url.searchParams.set("path", String(pathIndex));
    url.searchParams.delete("step");
    history.replaceState(null, "", url);
  }

  function changeGoal(nextGoalId: string) {
    setGoalId(nextGoalId);
    setPathIndex(0);
    setSelectedStepIndex(null);
    setQuery("");
  }

  return (
    <>
      <div className="wrap">
        <div className="toolbar">
          <label className="control">
            <Icon name="target" />
            <select aria-label="Select goal" value={goal.id} onChange={(event) => changeGoal(event.target.value)}>
              {DATA.map((item) => (
                <option value={item.id} key={item.id}>
                  {clean(item.title)}
                </option>
              ))}
            </select>
          </label>
          <label className="control">
            <Icon name="route" />
            <select
              aria-label="Select vehicle or path"
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
            </select>
          </label>
          <label className="control">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input value={query} type="search" placeholder="Search step, skill, attribute..." onChange={(event) => setQuery(event.target.value)} />
          </label>
        </div>

        <main id="cards">
          <article className="path-card" data-name={path.name.toLowerCase()}>
            <header className="path-summary">
              <div className="path-title">
                <span className="num">
                  <Icon name={goalIcon(goal.id)} />
                </span>
                <div>
                  <h2>{clean(path.name)}</h2>
                  <p>{clean(path.description)}</p>
                </div>
              </div>
              <div className="goal-fit">
                <span>Goal fit</span>
                <b>{path.goalFit}/10</b>
              </div>
            </header>
            <div className="path-body">
              <CurrentRatingPanel path={path} current={current} onChange={updateCurrent} />
              <section className="panel active">
                {visibleSteps.length ? (
                  visibleSteps.map((step) => {
                    const originalIndex = goal.steps.indexOf(step);
                    return (
                      <button
                        className={`step-card step-link ${selectedStepIndex === originalIndex ? "active" : ""}`}
                        type="button"
                        key={`${step.label}-${step.title}`}
                        onClick={() => openStep(originalIndex)}
                      >
                        <StepSummary path={path} step={step} index={originalIndex} current={current} />
                      </button>
                    );
                  })
                ) : (
                  <div className="empty">No step found.</div>
                )}
              </section>
            </div>
          </article>
        </main>
      </div>
      <StepSheet open={selectedStepIndex !== null} path={path} step={selectedStep} stepIndex={selectedStepIndex ?? 0} current={current} onClose={closeStep} />
    </>
  );
}
