import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border-strong)] px-2.5 py-1 text-[length:var(--size-eyebrow)] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]",
        className,
      )}
      {...props}
    />
  );
}
