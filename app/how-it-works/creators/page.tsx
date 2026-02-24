import { FinalCtaSection, HowCreatorsSection } from "@/app/component/sections";
import { ScrollReveal } from "@/app/component/scroll-reveal";
import { SiteHeader } from "@/app/component/site-header";

export default function HowItWorksCreatorsPage() {
  return (
    <div className="home-shell">
      <ScrollReveal />
      <SiteHeader />
      <main className="section-page-main">
        <div className="page-intro">
          <p className="eyebrow">Creator flow</p>
          <h1>How it works for creators</h1>
        </div>
        <HowCreatorsSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}
