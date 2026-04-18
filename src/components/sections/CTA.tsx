"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn direction="none" className="relative rounded-3xl p-[1px] overflow-hidden">
          {/* Animated shimmer border */}
          <div
            className="absolute inset-0 rounded-3xl animate-shimmer"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.4) 25%, rgba(99,102,241,0.5) 50%, rgba(37,99,235,0.4) 75%, transparent 100%)",
              backgroundSize: "200% auto",
            }}
          />

          {/* Inner card */}
          <div className="relative bg-brand-card rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Background glow layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/5 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-600/10 blur-[80px] pointer-events-none animate-breathe" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-indigo-600/8 blur-[60px] pointer-events-none animate-float-slow" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                <Calendar size={12} />
                Free 30-minute strategy call
              </div>

              <h2 className="font-display text-display-md font-bold text-white mb-4">
                Ready to build a brand
                <br />
                that compounds?
              </h2>

              <p className="text-brand-muted mb-10 max-w-lg mx-auto">
                Book a free strategy call. We will audit your brand and growth, show you exactly where the biggest opportunities are, and you walk away with a clear picture. No strings attached.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" size="lg">
                  Book a Strategy Call
                  <ArrowRight size={16} />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
