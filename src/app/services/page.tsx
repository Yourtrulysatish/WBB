import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers, BarChart2, Zap, Search, Palette, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand strategy, digital marketing, SEO, content production, and AI-powered growth systems built to compound.",
};

const pillars = [
  {
    id: "brand",
    icon: Layers,
    label: "Pillar 01",
    title: "Brand",
    headline: "Build a brand people trust and remember.",
    description:
      "Your brand is your most valuable asset. We build it from the ground up, from positioning strategy to visual identity, so it commands attention, builds trust, and justifies premium pricing.",
    services: [
      {
        name: "Brand Strategy",
        desc: "Positioning, messaging framework, brand voice, and competitive differentiation.",
      },
      {
        name: "Visual Identity",
        desc: "Logo, color system, typography, and brand guidelines that scale.",
      },
      {
        name: "Brand Guidelines",
        desc: "A complete brand bible your entire team and future partners can execute from.",
      },
      {
        name: "Brand Refresh",
        desc: "Modernize an existing brand without losing what made it work.",
      },
    ],
  },
  {
    id: "digital",
    icon: BarChart2,
    label: "Pillar 02",
    title: "Digital",
    headline: "Grow with precision, not guesswork.",
    description:
      "We run data-driven digital marketing strategies that compound over time, turning your digital presence into your most reliable lead generation engine.",
    services: [
      {
        name: "SEO",
        desc: "Technical SEO, content strategy, and authority building that drives organic pipeline.",
      },
      {
        name: "Paid Advertising",
        desc: "Meta, Google, and LinkedIn ads managed for conversions, not vanity metrics.",
      },
      {
        name: "Social Media Management",
        desc: "Strategy, content, scheduling, and community management across platforms.",
      },
      {
        name: "Email Marketing",
        desc: "List building, sequences, and campaigns that nurture and convert.",
      },
    ],
  },
  {
    id: "content",
    icon: Zap,
    label: "Pillar 03",
    title: "Content & Growth",
    headline: "Create content that builds authority and drives pipeline.",
    description:
      "Content is the fuel of compounding growth. We build content systems, not one-off pieces, powered by strategy, production, and AI to keep you top of mind and top of funnel.",
    services: [
      {
        name: "Content Strategy",
        desc: "A full-funnel content roadmap aligned to your growth goals and audience.",
      },
      {
        name: "Video & Photo Production",
        desc: "High-quality content that tells your brand story across channels.",
      },
      {
        name: "Copywriting",
        desc: "Website copy, ads, emails, and sales materials written to convert.",
      },
      {
        name: "AI Growth Systems",
        desc: "Automated workflows, content pipelines, and data systems built with AI.",
      },
    ],
  },
];

const addons = [
  { icon: Search, name: "SEO Audit", desc: "Full technical and content audit with a 90-day action plan." },
  { icon: Palette, name: "UI/UX Design", desc: "Product and website design that converts visitors to customers." },
  { icon: Smartphone, name: "Web Development", desc: "Fast, modern websites and landing pages built to perform." },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-8 border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="muted" className="mb-6">
            Services
          </Badge>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Everything you need to
            <br />
            <span className="gradient-text-blue">build and scale.</span>
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-10">
            Three core pillars: Brand, Digital, and Content & Growth, engineered to work together as one compounding system.
          </p>
          <Button href="/contact" size="lg">
            Book a Strategy Call
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, idx) => {
        const Icon = pillar.icon;
        const isEven = idx % 2 === 0;
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`py-24 px-6 lg:px-8 ${isEven ? "" : "bg-[#080808]"}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-16 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
                {/* Left: Info */}
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                      <Icon size={20} className="text-brand-blue" />
                    </div>
                    <Badge variant="blue" className="text-[10px]">
                      {pillar.label}
                    </Badge>
                  </div>
                  <h2 className="text-display-md font-bold text-white mb-4">
                    {pillar.title}
                  </h2>
                  <p className="text-lg font-medium text-white/80 mb-4">
                    {pillar.headline}
                  </p>
                  <p className="text-brand-muted leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                  <Button href="/contact" variant="outline">
                    Get started <ArrowRight size={14} />
                  </Button>
                </div>

                {/* Right: Service cards */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isEven ? "" : "lg:order-1"}`}>
                  {pillar.services.map((s) => (
                    <div
                      key={s.name}
                      className="bg-brand-card card-border rounded-xl p-6 hover:border-brand-blue/20 transition-colors"
                    >
                      <h3 className="text-sm font-semibold text-white mb-2">
                        {s.name}
                      </h3>
                      <p className="text-xs text-brand-muted leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Add-ons */}
      <section className="py-24 px-6 lg:px-8 border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="muted" className="mb-4">
              Add-ons
            </Badge>
            <h2 className="text-display-md font-bold text-white">
              On-demand services
            </h2>
            <p className="text-brand-muted mt-3 max-w-xl mx-auto">
              Need something specific? Add these to any retainer or book them standalone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {addons.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.name}
                  className="bg-brand-card card-border rounded-2xl p-8 text-center hover:border-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={18} className="text-brand-blue" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{a.name}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-display-md font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-brand-muted mb-8">
            Book a free 30-minute strategy call. We&apos;ll map out exactly which services will move the needle for your brand.
          </p>
          <Button href="/contact" size="lg">
            Book a Strategy Call <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}
