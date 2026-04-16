import { Badge } from "@/components/ui/Badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "WBB didn't just redesign our brand — they rebuilt our entire growth engine. Within 6 months we had a waitlist of 2,000 people before we even launched.",
    name: "Arjun Mehta",
    title: "Founder, GreenDrop",
    avatar: "AM",
  },
  {
    quote:
      "Working with the WBB team felt like having a co-founder who understood brand and growth. They moved fast, communicated clearly, and delivered real results.",
    name: "Priya Sharma",
    title: "CEO, NovaSaaS",
    avatar: "PS",
  },
  {
    quote:
      "Our SEO went from non-existent to ranking #1 for 30+ competitive keywords in under 5 months. The content strategy they built now drives 60% of our leads.",
    name: "Rahul Verma",
    title: "Co-Founder, FinTrack",
    avatar: "RV",
  },
  {
    quote:
      "The team at WBB genuinely cares about outcomes. They challenged our thinking, pushed us to position better, and the market responded immediately.",
    name: "Sneha Kapoor",
    title: "Founder, EduFlo",
    avatar: "SK",
  },
  {
    quote:
      "We hired WBB to run our social content and it became our #1 customer acquisition channel in 90 days. Incredible ROI and incredible team.",
    name: "Vikram Singh",
    title: "MD, BuildRight",
    avatar: "VS",
  },
  {
    quote:
      "From brand identity to website to launch campaign — WBB handled everything flawlessly. We looked like a ₹10Cr company from day one.",
    name: "Ananya Joshi",
    title: "Founder, Woven",
    avatar: "AJ",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="muted" className="mb-4">
            What Clients Say
          </Badge>
          <h2 className="text-display-md font-bold text-white">
            Founders who scaled
            <br />
            <span className="gradient-text">with WBB.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-brand-card card-border rounded-2xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <div>
                <Quote size={24} className="text-brand-blue/40 mb-4" />
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
