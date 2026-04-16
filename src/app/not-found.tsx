import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-8xl font-bold text-brand-blue/20 mb-4">404</p>
        <h1 className="text-display-md font-bold text-white mb-4">Page not found</h1>
        <p className="text-brand-muted mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Button href="/" size="lg">
          Back to Home <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}
