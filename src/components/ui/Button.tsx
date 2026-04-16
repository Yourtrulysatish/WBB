"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-brand-blue text-white hover:bg-blue-700 active:scale-[0.98]",
    outline:
      "border border-brand-border text-white hover:border-white/30 hover:bg-white/5 active:scale-[0.98]",
    ghost:
      "text-brand-muted hover:text-white active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
