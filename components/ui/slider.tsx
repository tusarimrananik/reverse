import * as React from "react";
import { cn } from "@/lib/utils";

export type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> & {
  value: number[];
  onValueChange?: (value: number[]) => void;
};

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, min = 0, max = 100, step = 1, onValueChange, style, ...props }, ref) => {
    const current = value[0] ?? 0;
    const minValue = Number(min);
    const maxValue = Number(max);
    const percent = maxValue === minValue ? 0 : ((current - minValue) / (maxValue - minValue)) * 100;

    return (
      <input
        ref={ref}
        className={cn("ui-slider", className)}
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        style={{ "--slider-percent": `${percent}%`, ...style } as React.CSSProperties}
        onChange={(event) => onValueChange?.([Number(event.target.value)])}
        {...props}
      />
    );
  },
);

Slider.displayName = "Slider";
