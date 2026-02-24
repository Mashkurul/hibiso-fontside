import { SiteFooter } from "@/app/component/sections";
import { SiteHeader } from "@/app/component/site-header";

export default function PrivacyPolicyPage() {
  return (
    <div className="home-shell">
      <SiteHeader />
      <main className="section-page-main">
        <div className="page-intro">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
        </div>
        <section className="section">
          <p>
            We collect basic account, contact, and campaign-related information
            to operate the Hibis&apos;o platform and deliver services.
          </p>
          <br />
          <p>
            Your data is used for campaign execution, communication, analytics,
            and service improvements. We do not sell personal data.
          </p>
          <br />
          <p>
            You can request access, correction, or deletion of your information
            by contacting our team through the platform contact channels.
          </p>
          <br />
          <p>
            We may update this policy periodically. The latest version on this
            page is the active version.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

