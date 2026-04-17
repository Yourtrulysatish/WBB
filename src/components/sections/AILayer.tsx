import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Brain, Cpu, LineChart, Repeat2 } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI-Assisted Content",
    description:
      "We use AI to research, outline, and accelerate content at 5x speed. Then our team makes it world-class.",
  },
  {
    icon: Cpu,
    title: "Automated Growth Systems",
    description:
      "From lead nurturing to social scheduling, we build AI workflows that keep working while you sleep.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "AI-powered reporting that tells you what worked, why it worked, and what to do next.",
  },
  {
    icon: Repeat2,
    title: "Compounding Feedback Loops",
    description:
      "Systems that learn and improve every month, so your growth gets faster over time, not slower.",
  },
];

export function AILayer() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeIn direction="left">
            <Badge variant="blue" className="mb-6">
              AI-Enhanced
            </Badge>
            <h2 className="font-display text-display-md font-bold text-white mb-6">
              We use AI as a
              <br />
              <span className="gradient-text-blue">force multiplier.</span>
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              We don&apos;t replace human creativity with AI. We use it to move faster, go deeper, and compound results. Every service we deliver is enhanced by AI systems built specifically for your brand.
            </p>
            <div className="flex items-center gap-3 px-4 py-3 bg-blue-500/5 border border-blue-500/15 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <p className="text-sm text-white/70">
                AI augments. Humans lead. Results compound.
              </p>
            </div>
          </FadeIn>

          {/* Right: grid */}
          <FadeIn delay={150} className="grid grid-cols-2 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-brand-card card-border rounded-xl p-6 hover:border-brand-blue/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                    <Icon size={16} className="text-brand-blue" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
