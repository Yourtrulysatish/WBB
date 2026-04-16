export function LogoBar() {
  const brands = [
    "Brand One",
    "Growth Co",
    "StartupX",
    "FounderLab",
    "ScaleUp",
    "Momentum",
    "BuildCo",
    "LaunchPad",
  ];

  return (
    <section className="py-14 border-y border-brand-border overflow-hidden">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-brand-muted mb-8">
        Trusted by ambitious brands
      </p>
      <div className="relative flex overflow-x-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="text-sm font-semibold text-white/20 tracking-wider uppercase"
            >
              {b}
            </span>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-black to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
