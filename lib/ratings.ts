import type { Attribute, Path, Step } from "@/lib/types";

export function clean(str: string) {
  return String(str)
    .replace(/\u00c2\u00b7/g, "\u00b7")
    .replace(/\u00e2\u20ac\u201d/g, "\u2014")
    .replace(/\u00e2\u20ac\u201c/g, "\u2013")
    .replace(/\u00e2\u2020\u2019/g, "\u2192");
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function stepRating(attr: Attribute, step: Step) {
  const factors = step.factors || { default: 0 };
  const factor = factors[attr.group] ?? factors.default ?? 0;
  return clamp(Math.round(attr.final * factor), 0, attr.final);
}

export function avgRating(attrs: Attribute[], step: Step) {
  if (!attrs.length) return 0;
  const total = attrs.reduce((sum, attr) => sum + stepRating(attr, step), 0);
  return Math.round(total / attrs.length);
}

export function currentAttrKey(path: Path, kind: "vehicle" | "driver", attr: Attribute) {
  return `reverseGoalMap.current.${path.name}.${kind}.${attr.name}`;
}

export function currentGapClass(gap: number) {
  if (gap <= 0) return "complete";
  if (gap <= 2) return "building";
  return "early";
}
