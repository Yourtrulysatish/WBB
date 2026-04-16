import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for We Build Brands (webuildbrands.in).",
};

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Badge variant="muted" className="mb-6">Legal</Badge>
          <h1 className="text-display-md font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-sm text-brand-muted mb-12">Last updated: April 2025</p>

          <div className="prose prose-invert max-w-none space-y-10 text-sm text-brand-muted leading-relaxed">

            <div>
              <h2 className="text-base font-semibold text-white mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using webuildbrands.in (&quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site. These Terms apply to all visitors, clients, and users of our services.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">2. Services</h2>
              <p>
                We Build Brands provides branding, digital marketing, content, design, and growth services. The specific scope, deliverables, timelines, and fees for any engagement are defined in a separate Statement of Work or Service Agreement signed by both parties.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">3. Intellectual Property</h2>
              <p className="mb-3">
                All content on this Site — including text, design, graphics, and code — is the property of We Build Brands and protected by applicable intellectual property laws.
              </p>
              <p>
                Work created for clients becomes the client&apos;s property upon full payment, as outlined in individual service agreements. WBB retains the right to showcase completed work in its portfolio unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">4. Client Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and complete information required for service delivery</li>
                <li>Respond to requests for approvals or feedback within agreed timelines</li>
                <li>Make payments on the schedule defined in the service agreement</li>
                <li>Ensure any materials provided to WBB do not infringe third-party rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">5. Payment Terms</h2>
              <p>
                Payment terms are specified in individual service agreements. Late payments may incur a 2% monthly interest charge. WBB reserves the right to pause or suspend work on overdue accounts until payment is received.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, We Build Brands shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services or website. Our total liability in any matter is limited to the fees paid by the client in the 30 days preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">7. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives the termination of the working relationship.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">8. Termination</h2>
              <p>
                Either party may terminate a service engagement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed to date. WBB will deliver all completed assets upon receipt of final payment.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Uttar Pradesh, India.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our Site or services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white mb-3">11. Contact</h2>
              <p>
                Questions about these Terms? Email us at:{" "}
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
