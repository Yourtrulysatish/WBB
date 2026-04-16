import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "blue" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default:
      "bg-white/5 border border-white/10 text-white/70",
    blue:
      "bg-blue-500/10 border border-blue-500/20 text-blue-400",
    muted:
      "bg-brand-card border border-brand-border text-brand-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
