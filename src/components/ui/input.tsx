import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-text-3)]",
        className,
      )}
      {...props}
    />
  );
}
