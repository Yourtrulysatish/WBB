import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for We Build Brands (webuildbrands.in).",
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Badge variant="muted" className="mb-6">Legal</Badge>
          <h1 className="font-display text-display-md font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-brand-muted mb-12">Last updated: April 2025</p>

          <div className="prose prose-invert max-w-none space-y-10 text-sm text-brand-muted leading-relaxed">

            <div>
              <h2 className="text-base font-semibold text-white mb-3">1. Who We Are</h2>
              <p>
                We Build Brands (&quot;WBB&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website webuildbrands.in. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-white/80">Contact information</strong>: your name, email address, company name, and any message you submit through our contact form.</li>
                <li><strong className="text-white/80">Usage data</strong>: pages visited, time on site, browser type, and device info via Google Analytics (anonymized).</li>
                <li><strong className="text-white/80">Cookies</strong>: we use essential cookies for site functionality and analytics cookies (with your consent) via Google Analytics.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your enquiries and schedule strategy calls</li>
                <li>To improve our website and understand how visitors use it</li>
                <li>To send relevant updates or proposals (only if you&apos;ve opted in)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">4. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information. We may share data with trusted third-party service providers (e.g. Formspree for form processing, Google Analytics for analytics) who operate under strict data protection agreements.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">5. Data Retention</h2>
              <p>
                We retain contact form submissions for up to 2 years for business purposes. Analytics data is retained per Google Analytics&apos; default retention settings (26 months). You may request deletion at any time.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">6. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for marketing communications at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">7. Cookies</h2>
              <p>
                Our site uses cookies to improve your experience. Analytics cookies are only activated with your consent. You can disable cookies at any time through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">8. Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect your information. All data is transmitted over HTTPS. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">9. Contact Us</h2>
              <p>
                For any privacy-related questions or requests, contact us at:{" "}
                <a href="mailto:hello@webuildbrands.in" className="text-brand-blue hover:underline">
                  hello@webuildbrands.in
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
