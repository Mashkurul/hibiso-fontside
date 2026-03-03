import Link from "next/link";
import { SiteHeader } from "@/app/component/site-header";

export default function OffersPage() {
  return (
    <div className="home-shell">
      <SiteHeader />
      <main className="offers-main">
        <section className="offers-hero">
          <h1>Choose Your Adventure</h1>
          <p>
            Flexible packages designed for brands of all sizes. From single
            campaigns to full creative takeovers.
          </p>
        </section>

        <section className="pricing-shell">
          <article className="pricing-card">
            <div className="pricing-head">
              <span className="tier-pill mint">Aloha</span>
              <div className="plan-icon camera" aria-hidden="true" />
            </div>
            <h2>Essential</h2>
            <p className="plan-copy">
              Perfect for testing new markets with authentic content.
            </p>
            <p className="price-line">
              <strong>€990</strong>
              <span>/mo</span>
            </p>
            <ul className="feature-list">
              <li>
                <i />5 UGC Videos
              </li>
              <li>
                <i />10 High-res Photos
              </li>
              <li>
                <i />1 Location
              </li>
              <li>
                <i />Basic Licensing
              </li>
            </ul>
            <button className="pricing-btn ghost" type="button">
              Select Package
            </button>
          </article>

          <article className="pricing-card featured">
            <div className="pricing-head">
              <span className="tier-pill sun">Moana</span>
              <span className="popular-tag">Popular</span>
            </div>
            <h2>Growth</h2>
            <p className="plan-copy">
              Scale your presence with diverse creators and locations.
            </p>
            <p className="price-line">
              <strong>€2,490</strong>
              <span>/mo</span>
            </p>
            <ul className="feature-list warm-list">
              <li>
                <i />15 UGC Videos
              </li>
              <li>
                <i />30 High-res Photos
              </li>
              <li>
                <i />3 Locations
              </li>
              <li>
                <i />Full Licensing
              </li>
              <li>
                <i />Contest Access
              </li>
            </ul>
            <button className="pricing-btn solid" type="button">
              Select Package
            </button>
          </article>

          <article className="pricing-card">
            <div className="pricing-head">
              <span className="tier-pill rose">Hibis&apos;un</span>
              <div className="plan-icon globe" aria-hidden="true" />
            </div>
            <h2>Enterprise</h2>
            <p className="plan-copy">
              Exclusive creative days and full-service production.
            </p>
            <p className="price-line">
              <strong>Custom</strong>
            </p>
            <ul className="feature-list rose-list">
              <li>
                <i />Unlimited Content
              </li>
              <li>
                <i />Global Locations
              </li>
              <li>
                <i />Dedicated Producer
              </li>
              <li>
                <i />Creative Strategy
              </li>
              <li>
                <i />Premium Creative Day
              </li>
            </ul>
            <Link className="pricing-btn ghost" href="/brands">
              Contact Sales
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
}
