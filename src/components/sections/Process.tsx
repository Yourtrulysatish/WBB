import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

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
      "We audit your brand, digital presence, and content. Every gap and opportunity gets mapped into a clear growth brief.",
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
      "Our team executes fast on brand, content, campaigns, and systems, operating as your embedded growth team.",
  },
  {
    num: "05",
    title: "Measure & Compound",
    description:
      "We track what moves the needle, double down on what works, and iterate every month to build compounding momentum.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Badge variant="muted" className="mb-4">
            How We Work
          </Badge>
          <h2 className="font-display text-display-md font-bold text-white">
            From zero to growth
            <br />
            <span className="gradient-text">in 5 steps.</span>
          </h2>
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-border to-transparent hidden md:block" />

          <div className="space-y-2">
            {steps.map((step, i) => (
              <FadeIn
                key={i}
                delay={i * 100}
                direction="left"
                className="relative flex gap-8 group py-4"
              >
                {/* Active connector dot on the vertical line */}
                <div className="absolute left-[18px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-blue/0 group-hover:bg-brand-blue/60 transition-colors duration-300 hidden md:block z-20" />

                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-card card-border flex items-center justify-center text-xs font-bold text-brand-blue z-10 group-hover:border-brand-blue/40 group-hover:bg-brand-blue/5 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300">
                  {step.num}
                </div>

                {/* Content */}
                <div className="pt-2.5 pb-4 flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-100 transition-colors duration-200">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
