import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Sheet({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    document.body.classList.toggle("sheet-open", open);
    return () => document.body.classList.remove("sheet-open");
  }, [open]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) onOpenChange(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  return (
    <div className={cn("ui-sheet", open && "is-open")} aria-hidden={!open}>
      <button className="ui-sheet-backdrop" type="button" aria-label="Close details" onClick={() => onOpenChange(false)} />
      {children}
    </div>
  );
}

export function SheetContent({
  className,
  children,
  onClose,
}: React.HTMLAttributes<HTMLElement> & { onClose: () => void }) {
  return (
    <aside className={cn("ui-sheet-content", className)} role="dialog" aria-modal="true">
      <div className="ui-sheet-close-row">
        <Button variant="ghost" size="icon" type="button" aria-label="Close details" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>
      {children}
    </aside>
  );
}
