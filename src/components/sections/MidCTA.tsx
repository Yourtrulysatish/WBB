import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, FileText } from "lucide-react";

export function MidCTA() {
  return (
    <section className="py-16 px-6 lg:px-8 border-y border-brand-border">
      <div className="max-w-5xl mx-auto">
        <FadeIn direction="none" className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <FileText size={20} className="text-brand-blue" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-1">
                Free for founders
              </p>
              <h3 className="text-lg font-semibold text-white mb-1">
                Get a free brand and growth audit
              </h3>
              <p className="text-sm text-brand-muted max-w-md">
                30 minutes. We review your brand, digital presence, and content. You walk away with a clear picture of where you are and where the biggest opportunities are. No pitch, no strings.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button href="/contact" size="sm">
              Claim Your Free Audit
              <ArrowRight size={14} />
            </Button>
            <Button href="/services" variant="outline" size="sm">
              See What We Audit
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
