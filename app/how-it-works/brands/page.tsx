import { FinalCtaSection, HowBrandsSection } from "@/app/component/sections";
import { ScrollReveal } from "@/app/component/scroll-reveal";
import { SiteHeader } from "@/app/component/site-header";

export default function HowItWorksBrandsPage() {
  return (
    <div className="home-shell">
      <ScrollReveal />
      <SiteHeader />
      <main className="section-page-main">
        <div className="page-intro">
          <p className="eyebrow">Process</p>
          <h1>How it works for brands</h1>
        </div>
        <HowBrandsSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}
