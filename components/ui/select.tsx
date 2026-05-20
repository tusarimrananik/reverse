import * as React from "react";
import { cn } from "@/lib/utils";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => <select className={cn("ui-select", className)} ref={ref} {...props} />,
);

Select.displayName = "Select";
