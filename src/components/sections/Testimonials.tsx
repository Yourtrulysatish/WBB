import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Quote, MessageSquare, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The WBB team rebuilt our positioning from scratch. Within two months we were attracting the exact type of clients we wanted. Sharp thinking, fast execution.",
    name: "Client — D2C Brand, India",
    verified: true,
  },
  {
    quote:
      "Most agencies talk strategy and deliver templates. WBB actually built the system. Our content now runs itself and our organic leads have tripled.",
    name: "Client — SaaS Founder, India",
    verified: true,
  },
  {
    quote:
      "What impressed me most was how fast they moved. Brief to brand identity in under three weeks. No back-and-forth, no hand-holding. They just got it.",
    name: "Client — Startup Founder, UAE",
    verified: true,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <Badge variant="muted" className="mb-4">
              What Clients Say
            </Badge>
            <h2 className="font-display text-display-md font-bold text-white">
              Heard directly
              <br />
              <span className="gradient-text">from the room.</span>
            </h2>
          </div>
        </FadeIn>

        <p className="text-brand-muted text-sm mb-12 max-w-xl">
          We keep client names private unless they give explicit permission to publish. Full attributions and LinkedIn profiles are available on request.
        </p>

        <FadeIn delay={100} className="grid md:grid-cols-3 gap-6 mb-12">
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
                <div className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-xs text-brand-muted">{t.name}</p>
                  {t.verified && (
                    <p className="text-[10px] text-brand-blue/60 mt-0.5">Verified client · Full attribution on request</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* CTA to get in touch to verify */}
        <div className="bg-brand-card card-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
              <MessageSquare size={18} className="text-brand-blue" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Want to speak with a past client?</p>
              <p className="text-xs text-brand-muted mt-0.5">We can connect you directly. Book a call and ask us.</p>
            </div>
          </div>
          <Button href="/contact" variant="outline" size="sm">
            Book a Call <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}
