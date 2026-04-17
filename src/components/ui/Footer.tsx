import Link from "next/link";

const services = [
  { label: "Brand Strategy", href: "/services#brand" },
  { label: "Digital Marketing", href: "/services#digital" },
  { label: "Content & Growth", href: "/services#content" },
  { label: "Design & Web", href: "/services#design" },
  { label: "SEO", href: "/services#seo" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/webuildbrands.in" },
  { label: "LinkedIn", href: "https://linkedin.com/company/webuildbrands" },
  { label: "Twitter / X", href: "https://twitter.com/webuildbrands" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <img
                src="/logos/wbb-logo-alt.svg"
                alt="We Build Brands"
                width={70}
                height={70}
                className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed max-w-[220px]">
              A creative growth & digital agency helping brands scale with strategy, design, and AI.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-muted hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-brand-muted hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-brand-muted hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-brand-muted hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} We Build Brands. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">
            Ayodhya, India · Global Team
          </p>
        </div>
      </div>
    </footer>
  );
}
