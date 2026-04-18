"use client";

import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { X, Check } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const problems = [
  "Spending on ads with no compounding return",
  "Brand that looks amateur compared to competitors",
  "Content that disappears without driving leads",
  "No clear positioning or messaging strategy",
  "Teams that don't move fast enough to grow",
];

const solutions = [
  "Systems that generate leads while you sleep",
  "A premium brand that commands higher prices",
  "Content that builds authority and drives pipeline",
  "Sharp positioning that wins in the market",
  "An agency that operates as your growth team",
];

function StrikeItem({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={ref} className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
        <X size={11} className="text-red-400" />
      </span>
      <span
        className="text-sm text-brand-muted relative"
        style={{
          transition: `opacity 0.4s ease ${delay}ms`,
          opacity: visible ? 1 : 0,
        }}
      >
        {text}
        {/* animated strikethrough line */}
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-red-400/40"
          style={{
            width: visible ? "100%" : "0%",
            transition: `width 0.6s ease ${delay + 200}ms`,
          }}
        />
      </span>
    </li>
  );
}

export function Problem() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Badge variant="muted" className="mb-4">
            The Problem
          </Badge>
          <h2 className="font-display text-display-md font-bold text-white">
            Most brands plateau.
            <br />
            <span className="gradient-text">Yours doesn&apos;t have to.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Problems */}
          <div className="bg-brand-card card-border rounded-2xl p-8 relative overflow-hidden glow-red">
            {/* Subtle red top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-6">
              Without WBB
            </p>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <StrikeItem key={i} text={p} delay={i * 80} />
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-brand-card card-border rounded-2xl p-8 border-brand-blue/20 glow-blue relative overflow-hidden">
            {/* Blue top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
              With WBB
            </p>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <FadeIn key={i} delay={i * 80} direction="none" className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Check size={11} className="text-blue-400" />
                  </span>
                  <span className="text-sm text-white">{s}</span>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
