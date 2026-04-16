import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { Problem } from "@/components/sections/Problem";
import { ServicesOverview } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { AILayer } from "@/components/sections/AILayer";
import { WhyWBB } from "@/components/sections/WhyWBB";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Problem />
      <ServicesOverview />
      <CaseStudies />
      <Testimonials />
      <Process />
      <AILayer />
      <WhyWBB />
      <CTA />
    </>
  );
}
