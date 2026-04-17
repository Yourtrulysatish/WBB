import { Badge } from "@/components/ui/Badge";
import { Globe, Users, Rocket, Shield } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Speed without chaos",
    description:
      "We move fast because we have the systems and people to do it right. Most agencies are slow. We're not.",
  },
  {
    icon: Users,
    title: "Global team, founder mindset",
    description:
      "Based in Ayodhya, working globally. We think like founders, not vendors, because we have built brands of our own.",
  },
  {
    icon: Globe,
    title: "360° execution",
    description:
      "Brand, digital, content, and growth all under one roof. No briefing five different agencies. One team, one vision.",
  },
  {
    icon: Shield,
    title: "Accountability at every step",
    description:
      "We tie our work to real outcomes. If it doesn't move the needle, we find out why and we fix it.",
  },
];

export function WhyWBB() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="muted" className="mb-4">
            Why WBB
          </Badge>
          <h2 className="text-display-md font-bold text-white">
            We&apos;re not another agency.
            <br />
            <span className="gradient-text">We&apos;re your growth team.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-brand-card card-border rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand-blue" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Brands Built" },
            { value: "3+", label: "Years of Growth" },
            { value: "12+", label: "Team Members" },
            { value: "5", label: "Countries Served" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-brand-card card-border rounded-2xl"
            >
              <div className="text-display-md font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-brand-muted uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
