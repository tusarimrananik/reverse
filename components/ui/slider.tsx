import * as React from "react";
import { cn } from "@/lib/utils";

export type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> & {
  value: number[];
  onValueChange?: (value: number[]) => void;
};

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, min = 0, max = 100, step = 1, onValueChange, ...props }, ref) => (
    <input
      ref={ref}
      className={cn("ui-slider", className)}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0] ?? 0}
      onChange={(event) => onValueChange?.([Number(event.target.value)])}
      {...props}
    />
  ),
);

Slider.displayName = "Slider";
