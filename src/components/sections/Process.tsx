import { Badge } from "@/components/ui/Badge";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We start with a 30-minute strategy call to understand your business, goals, current challenges, and where the biggest growth opportunities are.",
  },
  {
    num: "02",
    title: "Growth Audit",
    description:
      "We audit your brand, digital presence, and content — mapping gaps and opportunities into a clear growth brief.",
  },
  {
    num: "03",
    title: "Strategy & Roadmap",
    description:
      "We build a 90-day growth roadmap with clear deliverables, milestones, and KPIs tailored to your stage and goals.",
  },
  {
    num: "04",
    title: "Build & Execute",
    description:
      "Our team executes fast — brand, content, campaigns, and systems — operating as your embedded growth team.",
  },
  {
    num: "05",
    title: "Measure & Compound",
    description:
      "We track what moves the needle, double down on what works, and iterate monthly — building compounding momentum.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="muted" className="mb-4">
            How We Work
          </Badge>
          <h2 className="text-display-md font-bold text-white">
            From zero to growth
            <br />
            <span className="gradient-text">in 5 steps.</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-border to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex gap-8 group"
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-card card-border flex items-center justify-center text-xs font-bold text-brand-blue z-10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-colors">
                  {step.num}
                </div>

                {/* Content */}
                <div className="pt-2.5 pb-4">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
