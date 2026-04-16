import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, TrendingUp } from "lucide-react";

const cases = [
  {
    tag: "Brand + Digital",
    title: "From zero to market leader in 8 months",
    description:
      "Built full brand identity, launch strategy, and digital presence for a D2C startup. Grew from 0 to 50K monthly visitors and ₹40L in revenue.",
    metrics: [
      { label: "Monthly Visitors", value: "50K+" },
      { label: "Revenue Growth", value: "₹40L" },
      { label: "Timeline", value: "8 months" },
    ],
  },
  {
    tag: "SEO + Content",
    title: "3x organic traffic in 6 months",
    description:
      "Rebuilt content strategy, technical SEO, and authority content for a SaaS company. Tripled organic traffic and cut CAC by 40%.",
    metrics: [
      { label: "Organic Growth", value: "3x" },
      { label: "CAC Reduction", value: "40%" },
      { label: "New Keywords", value: "280+" },
    ],
  },
  {
    tag: "Content Production",
    title: "Viral content engine for a founder brand",
    description:
      "Built a content system that generated 2M+ impressions and 10K+ followers in 90 days for a founder building in public.",
    metrics: [
      { label: "Total Impressions", value: "2M+" },
      { label: "New Followers", value: "10K+" },
      { label: "Timeline", value: "90 days" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Badge variant="muted" className="mb-4">
              Our Work
            </Badge>
            <h2 className="text-display-md font-bold text-white">
              Results that speak
              <br />
              <span className="gradient-text">for themselves.</span>
            </h2>
          </div>
          <Button href="/contact" variant="outline" size="sm">
            Work with us <ArrowRight size={14} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-brand-card card-border rounded-2xl p-8 hover:border-white/10 transition-colors"
            >
              <Badge variant="blue" className="mb-6 text-[10px]">
                {c.tag}
              </Badge>
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                {c.title}
              </h3>
              <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                {c.description}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center gap-1 text-lg font-bold text-white mb-1">
                      <TrendingUp size={14} className="text-brand-blue flex-shrink-0" />
                      {m.value}
                    </div>
                    <p className="text-[10px] text-brand-muted leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
