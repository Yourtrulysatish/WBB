import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { X, Check } from "lucide-react";

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
  "Razor-sharp positioning that wins in the market",
  "An agency that operates as your growth team",
];

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
          <div className="bg-brand-card card-border rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-6">
              Without WBB
            </p>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X size={11} className="text-red-400" />
                  </span>
                  <span className="text-sm text-brand-muted">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-brand-card card-border rounded-2xl p-8 border-brand-blue/20 glow-blue">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
              With WBB
            </p>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Check size={11} className="text-blue-400" />
                  </span>
                  <span className="text-sm text-white">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
