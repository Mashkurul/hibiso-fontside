import { FinalCtaSection, TestimonialsSection } from "@/app/component/sections";
import { SiteHeader } from "@/app/component/site-header";

export default function TestimonialsPage() {
  return (
    <div className="home-shell">
      <SiteHeader />
      <main className="section-page-main">
        <div className="page-intro">
          <p className="eyebrow">Stories</p>
          <h1>Testimonials from our collaborators</h1>
        </div>
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}
