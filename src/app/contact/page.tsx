"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";

const services = [
  "Brand Strategy",
  "Visual Identity",
  "SEO",
  "Paid Advertising",
  "Content Strategy",
  "Social Media",
  "Web Development",
  "AI Growth Systems",
  "Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mdaygygw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-8 border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="muted" className="mb-6">
            Let&apos;s Talk
          </Badge>
          <h1 className="font-display text-display-lg font-bold text-white mb-4">
            Book a Strategy Call
          </h1>
          <p className="text-lg text-brand-muted max-w-xl mx-auto">
            Free, 30 minutes. We&apos;ll audit your brand and growth, and show you exactly where the biggest opportunities are.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                What to expect
              </h2>
              <ul className="space-y-4">
                {[
                  "A 30-minute video or phone call",
                  "We audit your brand, digital, and content",
                  "You get a clear growth brief, completely free",
                  "No pressure, no commitment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-brand-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-brand-muted">
                <Mail size={15} className="text-brand-blue flex-shrink-0" />
                hello@webuildbrands.in
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-muted">
                <MapPin size={15} className="text-brand-blue flex-shrink-0" />
                Ayodhya, India · Remote-first
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-muted">
                <Clock size={15} className="text-brand-blue flex-shrink-0" />
                Response within 24 hours
              </div>
            </div>

            <div className="bg-brand-card card-border rounded-2xl p-6">
              <p className="text-sm text-brand-muted leading-relaxed">
                &ldquo;The WBB strategy call was the best 30 minutes I spent this year. They came prepared, asked sharp questions, and gave us a clear roadmap on the spot.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-xs text-brand-muted">Founder, D2C Brand, India</p>
                  <p className="text-[10px] text-brand-blue/60 mt-0.5">Verified client · Full attribution on request</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="bg-brand-card card-border rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  We&apos;ll be in touch!
                </h3>
                <p className="text-brand-muted text-sm">
                  Thanks for reaching out. We&apos;ll reply within 24 hours to schedule your strategy call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-card card-border rounded-2xl p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-brand-muted mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Arjun Mehta"
                      className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brand-muted mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="arjun@company.com"
                      className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="GreenDrop"
                    className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-2">
                    What are you looking for?
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-2">
                    Tell us about your brand
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What are you building, where are you now, and what's the goal?"
                    className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please email us at hello@webuildbrands.in
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                <p className="text-xs text-brand-muted text-center">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
