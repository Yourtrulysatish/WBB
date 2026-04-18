"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

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
            "radial-gradient(ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(37,99,235,0.07) 0%, transparent 70%), #0A0A0A",
        } as React.CSSProperties
      }
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/[0.04] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <Badge variant="blue" className="mb-10">
            Brand · Digital · Growth
          </Badge>
        </div>

        <h1
          className="font-display text-display-xl font-bold text-white mb-6 animate-fade-up tracking-tight"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          We build brands.
          <br />
          <span className="gradient-text-blue">We run the growth.</span>
          <br />
          <span className="text-white/40">You focus on the vision.</span>
        </h1>

        <p
          className="text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          WBB is a creative and growth agency. We handle brand strategy, digital marketing, and content as one system. Your brand keeps growing without you managing five different vendors.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <Button href="/contact" size="lg">
            Book a free strategy call
            <ArrowRight size={16} />
          </Button>
          <Button href="/services" variant="outline" size="lg">
            See what we do
          </Button>
        </div>

        {/* Honest social proof strip */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-muted animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <span>50+ brand projects</span>
          <span className="text-brand-border">·</span>
          <span>Clients across India, UAE, and beyond</span>
          <span className="text-brand-border">·</span>
          <span>3+ years operating</span>
        </div>
      </div>
    </section>
  );
}
