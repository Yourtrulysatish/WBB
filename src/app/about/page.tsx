import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MapPin, Users, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "We Build Brands is a creative growth and digital agency based in Ayodhya, India with a global team. Learn our story, mission, and values.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    desc: "We measure success by what actually moves your business forward, not by deliverables checked off a list.",
  },
  {
    icon: Users,
    title: "Partnership, not vendor",
    desc: "We work as an extension of your team. Your wins are our wins. We're invested in your long-term growth.",
  },
  {
    icon: Heart,
    title: "Craft in everything",
    desc: "We take pride in doing excellent work. In every strategy doc, every design, every word we write.",
  },
  {
    icon: ArrowRight,
    title: "Move with urgency",
    desc: "We know that time is capital. We move fast, communicate clearly, and don't keep you waiting.",
  },
];

const team = [
  { name: "Satish Chand", role: "Founder & Creative Director", initials: "SC" },
  { name: "Brand & Strategy", role: "Positioning & Growth Strategy", initials: "BS" },
  { name: "Visual Design", role: "Identity & UI/UX", initials: "VD" },
  { name: "Content & Copy", role: "Content Strategy & Writing", initials: "CC" },
  { name: "Performance", role: "SEO & Paid Marketing", initials: "PM" },
  { name: "Tech & Systems", role: "Web & AI Development", initials: "TS" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-8 border-b border-brand-border">
        <div className="max-w-4xl mx-auto">
          <Badge variant="muted" className="mb-6">
            About Us
          </Badge>
          <h1 className="font-display text-display-lg font-bold text-white mb-6">
            We Build Brands that
            <br />
            <span className="gradient-text-blue">compound over time.</span>
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl leading-relaxed">
            WBB is a creative growth and digital agency founded in Ayodhya, India. We partner with ambitious founders and companies to build brands that grow, convert, and compound. Month after month.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="muted" className="mb-6">
              Our Story
            </Badge>
            <h2 className="font-display text-display-md font-bold text-white mb-6">
              Built from a simple
              <br />
              <span className="gradient-text">belief.</span>
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                WBB started from a simple observation: most brands don&apos;t fail because of bad products. They fail because of bad positioning, inconsistent presence, and siloed teams that never create a compounding growth engine.
              </p>
              <p>
                We built WBB to fix that. By combining brand strategy, digital marketing, and content under one roof, with AI systems woven through everything, we help brands build momentum that accelerates instead of stalling.
              </p>
              <p>
                Today we work with startups, founders, and growth-stage companies across India and globally. Every client gets a team that thinks like a co-founder, executes like an agency, and cares like a partner.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "Brands Built" },
              { value: "3+", label: "Years Operating" },
              { value: "12+", label: "Team Members" },
              { value: "5", label: "Countries Served" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-brand-card card-border rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
                <div className="text-xs text-brand-muted uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 lg:px-8 bg-[#080808] border-y border-brand-border">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="blue" className="mb-6">
            Our Mission
          </Badge>
          <blockquote className="font-display text-display-md font-bold text-white">
            &ldquo;To help ambitious brands build{" "}
            <span className="gradient-text-blue">impactful and scalable compounding growth</span>
            {" "}through strategy, creativity, and technology.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-brand-muted">
            <MapPin size={14} />
            Ayodhya, India · Global Team
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="muted" className="mb-4">
              Our Values
            </Badge>
            <h2 className="font-display text-display-md font-bold text-white">
              How we show up
              <br />
              <span className="gradient-text">every single day.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-brand-card card-border rounded-2xl p-8 hover:border-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-brand-blue" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-8 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="muted" className="mb-4">
              The Team
            </Badge>
            <h2 className="font-display text-display-md font-bold text-white">
              The team behind
              <br />
              <span className="gradient-text">your growth.</span>
            </h2>
            <p className="text-brand-muted mt-4 max-w-md mx-auto text-sm">
              Full team profiles coming soon. We keep client work first.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-brand-card card-border rounded-2xl p-8 text-center hover:border-white/10 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-lg font-bold text-white mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-xs text-brand-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold text-white mb-4">
            Ready to build something great?
          </h2>
          <p className="text-brand-muted mb-8">
            Book a free strategy call and let&apos;s talk about your brand&apos;s next chapter.
          </p>
          <Button href="/contact" size="lg">
            Book a Strategy Call <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}
