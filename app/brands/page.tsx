import { BrandsSection, FinalCtaSection } from "@/app/component/sections";
import { SiteHeader } from "@/app/component/site-header";

export default function BrandsPage() {
  return (
    <div className="home-shell">
      <SiteHeader />
      <main className="section-page-main">
        <div className="page-intro">
          <p className="eyebrow">Partners</p>
          <h1>Brands that trust Hibis&apos;o</h1>
        </div>
        <BrandsSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}
