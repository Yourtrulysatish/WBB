import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Layers, BarChart2, Zap } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Layers,
    label: "Brand",
    title: "Build a brand people remember",
    description:
      "From positioning to visual identity, we craft brands that stand out, command premium prices, and build loyalty.",
    services: ["Brand Strategy", "Brand Identity", "Visual Design", "Brand Guidelines"],
    href: "/services#brand",
  },
  {
    icon: BarChart2,
    label: "Digital",
    title: "Grow with precision and velocity",
    description:
      "Data-driven digital marketing, SEO, and paid strategies that compound over time and drive measurable pipeline.",
    services: ["SEO & Content", "Paid Ads", "Social Media", "Email Marketing"],
    href: "/services#digital",
  },
  {
    icon: Zap,
    label: "Content & Growth",
    title: "Create content that converts",
    description:
      "High-impact content, production, and AI-powered growth systems that keep your brand top-of-mind and top-of-funnel.",
    services: ["Content Strategy", "Video Production", "Copywriting", "AI Growth Systems"],
    href: "/services#content",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Badge variant="muted" className="mb-4">
            What We Do
          </Badge>
          <h2 className="font-display text-display-md font-bold text-white mb-4">
            Three pillars.
            <br />
            <span className="gradient-text">One compounding engine.</span>
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Brand, Digital, and Content work independently. With WBB, they work together as one system that compounds.
          </p>
        </FadeIn>

        <FadeIn delay={100} className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.label}
                href={pillar.href}
                className="group bg-brand-card card-border rounded-2xl p-8 hover:border-brand-blue/30 hover:bg-brand-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                  <Icon size={20} className="text-brand-blue" />
                </div>
                <Badge variant="blue" className="mb-4 text-[10px]">
                  {pillar.label}
                </Badge>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-muted mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-brand-muted">
                      <span className="w-1 h-1 rounded-full bg-brand-blue/60 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-1 text-xs text-brand-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </FadeIn>

        <div className="text-center">
          <Button href="/services" variant="outline">
            View All Services
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}
