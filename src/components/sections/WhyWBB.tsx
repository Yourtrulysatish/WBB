"use client";

import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Globe, Users, Rocket, Shield } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const reasons = [
  {
    icon: Rocket,
    title: "Speed without chaos",
    description:
      "We move fast because we have the systems and people to do it right. Most agencies are slow. We're not.",
  },
  {
    icon: Users,
    title: "Global team, founder mindset",
    description:
      "Based in Ayodhya, working globally. We think like founders, not vendors, because we have built brands of our own.",
  },
  {
    icon: Globe,
    title: "360° execution",
    description:
      "Brand, digital, content, and growth all under one roof. No briefing five different agencies. One team, one vision.",
  },
  {
    icon: Shield,
    title: "Accountability at every step",
    description:
      "We tie our work to real outcomes. If it doesn't move the needle, we find out why and we fix it.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Brands Built" },
  { value: 3, suffix: "+", label: "Years of Growth" },
  { value: 12, suffix: "+", label: "Team Members" },
  { value: 5, suffix: "", label: "Countries Served" },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const steps = duration / step;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-brand-card card-border rounded-2xl hover:border-white/10 transition-colors group"
    >
      <div className="font-display text-display-md font-bold text-white mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs text-brand-muted uppercase tracking-wide">{label}</div>
    </div>
  );
}

export function WhyWBB() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Badge variant="muted" className="mb-4">
            Why WBB
          </Badge>
          <h2 className="font-display text-display-md font-bold text-white">
            We&apos;re not another agency.
            <br />
            <span className="gradient-text">We&apos;re your growth team.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={100} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-brand-card card-border rounded-2xl p-6 hover:border-white/10 transition-colors group relative overflow-hidden"
              >
                {/* Hover top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                  <Icon size={18} className="text-brand-blue" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </FadeIn>

        {/* Animated stats */}
        <FadeIn delay={200} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
