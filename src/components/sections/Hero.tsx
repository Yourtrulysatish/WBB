"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={
        {
          background:
            "radial-gradient(ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(37,99,235,0.08) 0%, transparent 70%), #0A0A0A",
        } as React.CSSProperties
      }
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <Badge variant="blue" className="mb-8">
            <Sparkles size={10} />
            Creative Growth Agency · Ayodhya, India
          </Badge>
        </div>

        <h1
          className="text-display-xl font-bold text-white mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          We Help Brands Build
          <br />
          <span className="gradient-text-blue">Compounding Growth</span>
        </h1>

        <p
          className="text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Strategy. Design. Content. AI-powered systems. We partner with
          startups and founders to build brands that keep growing. Month over month,
          year over year.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <Button href="/contact" size="lg">
            Book a Strategy Call
            <ArrowRight size={16} />
          </Button>
          <Button href="/#work" variant="outline" size="lg">
            See Our Work
          </Button>
        </div>

        {/* Social proof strip */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-muted animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-brand-black"
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
            <span>50+ brands built</span>
          </div>
          <span className="text-brand-border">·</span>
          <span>3+ years of growth</span>
          <span className="text-brand-border">·</span>
          <span>Global clients</span>
        </div>
      </div>
    </section>
  );
}
