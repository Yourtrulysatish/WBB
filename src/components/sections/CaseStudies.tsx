import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Lock } from "lucide-react";

const previews = [
  {
    tag: "Brand + Digital",
    title: "D2C brand launch from zero to first ₹1Cr in revenue",
    teaser:
      "Full brand identity, go-to-market strategy, and digital presence built from scratch. Launched within 90 days.",
    status: "Case study in review",
  },
  {
    tag: "SEO + Content",
    title: "SaaS company — 3x organic growth in under 6 months",
    teaser:
      "Rebuilt content strategy and technical SEO from the ground up. Organic became their #1 acquisition channel.",
    status: "Publishing Q3 2025",
  },
  {
    tag: "Content Production",
    title: "Founder content engine — 2M+ impressions in 90 days",
    teaser:
      "Built a high-volume short-form content system for a founder building in public. Zero paid spend.",
    status: "Case study in review",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <Badge variant="muted" className="mb-4">
              Our Work
            </Badge>
            <h2 className="font-display text-display-md font-bold text-white">
              Real work.
              <br />
              <span className="gradient-text">Real results.</span>
            </h2>
          </div>
          <Button href="/contact" variant="outline" size="sm">
            Work with us <ArrowRight size={14} />
          </Button>
        </FadeIn>

        <p className="text-brand-muted text-sm mb-12 max-w-xl">
          Detailed case studies are being prepared with client permission. Here is a preview of recent engagements.
        </p>

        <FadeIn delay={100} className="grid md:grid-cols-3 gap-6">
          {previews.map((c, i) => (
            <div
              key={i}
              className="bg-brand-card card-border rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col justify-between"
            >
              <div>
                <Badge variant="blue" className="mb-6 text-[10px]">
                  {c.tag}
                </Badge>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {c.teaser}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-border flex items-center gap-2 text-xs text-brand-muted">
                <Lock size={11} className="text-brand-blue/60" />
                {c.status}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
