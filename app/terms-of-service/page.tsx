import { SiteFooter } from "@/app/component/sections";
import { SiteHeader } from "@/app/component/site-header";

export default function TermsOfServicePage() {
  return (
    <div className="home-shell">
      <SiteHeader />
      <main className="section-page-main">
        <div className="page-intro">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
        </div>
        <section className="section">
          <p>
            By using Hibis&apos;o, you agree to use the platform lawfully and in
            line with campaign, payment, and content guidelines.
          </p>
          <br />
          <p>
            Brands and creators are responsible for the accuracy of campaign
            requirements, deliverables, and submitted content.
          </p>
          <br />
          <p>
            We may suspend or restrict access for misuse, fraud, abuse, or
            repeated violations of platform policies.
          </p>
          <br />
          <p>
            Terms may be updated over time. Continued use of the platform means
            acceptance of the latest published terms.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

