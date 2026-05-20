import * as React from "react";
import { cn } from "@/lib/utils";

export function Progress({
  value,
  className,
  indicatorClassName,
}: {
  value: number;
  className?: string;
  indicatorClassName?: string;
}) {
  return (
    <div className={cn("ui-progress", className)} role="progressbar" aria-valuemin={0} aria-valuemax={10} aria-valuenow={value}>
      <span className={cn("ui-progress-indicator", indicatorClassName)} style={{ width: `${Math.max(0, Math.min(10, value)) * 10}%` }} />
    </div>
  );
}
