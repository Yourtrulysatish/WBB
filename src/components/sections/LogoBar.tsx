import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function LogoBar() {
  return (
    <section className="py-14 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Badge variant="blue" className="mb-3">Currently building</Badge>
          <p className="text-white font-semibold text-lg">
            Our full portfolio is being assembled.
          </p>
          <p className="text-brand-muted text-sm mt-1 max-w-md">
            We are working with real brands right now. Case studies and client work will be published here soon, with permission.
          </p>
        </div>
        <Button href="/contact" variant="outline" size="sm">
          See what we can do for you <ArrowRight size={14} />
        </Button>
      </div>
    </section>
  );
}
