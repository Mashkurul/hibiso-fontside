import Image from "next/image";
import Link from "next/link";
import { FooterCompanyLinks } from "@/app/component/footer-company-links";

const brandLogos = [
  {
    name: "L'Oreal",
    src: "/brands/loreal.svg",
    width: 190,
    height: 56,
  },
  {
    name: "L'Occitane",
    src: "/brands/loccitane.svg",
    width: 210,
    height: 56,
  },
  {
    name: "Carhartt",
    src: "/brands/carhartt.svg",
    width: 200,
    height: 56,
  },
];

export function BrandsSection() {
  return (
    <section className="section section-brands">
      <div className="section-head brands-head">
        <h2> They trust us</h2>
      </div>
      <div className="brands-marquee" aria-label="Trusted brands">
        <div className="brands-motion">
          <div className="brands-track">
            {brandLogos.map((brand, index) => (
              <div className="brands-logo" key={`brand-a-${brand.name}-${index}`}>
                <Image
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="brands-logo-img"
                />
              </div>
            ))}
          </div>
          <div className="brands-track" aria-hidden="true">
            {brandLogos.map((brand, index) => (
              <div className="brands-logo" key={`brand-b-${brand.name}-${index}`}>
                <Image
                  src={brand.src}
                  alt=""
                  width={brand.width}
                  height={brand.height}
                  className="brands-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function HowBrandsSection() {
  return (
    <section className="section how-showcase brands-showcase scroll-animate">
      <div className="how-copy">
        <div className="section-head">
          <p className="eyebrow">How it works for brands</p>
          <h2>From brief to beach in 3 steps</h2>
        </div>
        <p className="how-lead">
          We have streamlined the process so you can focus on strategy while we
          handle logistics, travel, and production.
        </p>
        <div className="how-steps">
          <article className="how-step">
            <span>01</span>
            <div>
              <h3>Create Campaign</h3>
              <p>Define your goals, products, and preferred vibe.</p>
            </div>
          </article>
          <article className="how-step">
            <span>02</span>
            <div>
              <h3>Match and Ship</h3>
              <p>
                We match you with travelers heading to paradise. Ship your
                product.
              </p>
            </div>
          </article>
          <article className="how-step">
            <span>03</span>
            <div>
              <h3>Receive Content</h3>
              <p>Get high-quality, sun-drenched assets ready for ads.</p>
            </div>
          </article>
        </div>
      </div>
      <div className="how-visual">
        <div className="how-photo brands-photo">
          <Image
            src="/image/brand-section.jpg"
            alt="Brand campaign shoot in a travel destination"
            fill
            className="how-photo-image"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <article className="how-float-card">
          <p>Content Delivered</p>
          <small>Just now - Amalfi Coast</small>
          <div className="how-mini-grid">
            <div className="how-mini-cell">
              <Image
                src="/image/brand-section.jpg"
                alt="Delivered content preview 1"
                fill
                className="how-mini-image"
                sizes="110px"
              />
            </div>
            <div className="how-mini-cell">
              <Image
                src="/image/hero-section.jpg"
                alt="Delivered content preview 2"
                fill
                className="how-mini-image"
                sizes="110px"
              />
            </div>
            <div className="how-mini-cell">
              <Image
                src="/image/cassie-gallegos-Lqno1bhxoiE-unsplash.jpg"
                alt="Delivered content preview 3"
                fill
                className="how-mini-image"
                sizes="110px"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function HowCreatorsSection() {
  return (
    <section className="section how-showcase creator-showcase scroll-animate">
      <div className="how-copy">
        <div className="section-head">
          <p className="eyebrow">How it works for creators</p>
          <h2>From passport to paid campaign</h2>
        </div>
        <p className="how-lead">
          Join destination-ready campaigns, create authentic travel stories, and
          get paid with a clear creative workflow.
        </p>
        <div className="how-steps">
          <article className="how-step">
            <span>01</span>
            <div>
              <h3>Create your profile</h3>
              <p>Show portfolio, locations, and your storytelling style.</p>
            </div>
          </article>
          <article className="how-step">
            <span>02</span>
            <div>
              <h3>Accept missions</h3>
              <p>Receive campaign invites aligned with your niche and travel.</p>
            </div>
          </article>
          <article className="how-step">
            <span>03</span>
            <div>
              <h3>Deliver and get paid</h3>
              <p>Submit approved content and receive secure payouts quickly.</p>
            </div>
          </article>
        </div>
      </div>
      <div className="how-visual">
        <div className="how-photo creator-photo">
          <Image
            src="/image/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
            alt="Creator filming product content while traveling"
            fill
            className="how-photo-image"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <article className="how-float-card">
          <p>Campaign Matched</p>
          <small>Bali - 3 deliverables - €450</small>
          <div className="how-mini-grid">
            <div className="how-mini-cell">
              <Image
                src="/image/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
                alt="Creator deliverable preview 1"
                fill
                className="how-mini-image"
                sizes="110px"
              />
            </div>
            <div className="how-mini-cell">
              <Image
                src="/image/cassie-gallegos-Lqno1bhxoiE-unsplash.jpg"
                alt="Creator deliverable preview 2"
                fill
                className="how-mini-image"
                sizes="110px"
              />
            </div>
            <div className="how-mini-cell">
              <Image
                src="/image/hero-section.jpg"
                alt="Creator deliverable preview 3"
                fill
                className="how-mini-image"
                sizes="110px"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function OffersSection() {
  return (
    <section className="section offers-section">
      <div className="section-head">
        <p className="eyebrow">Offers</p>
        <h2>Choose your creative formula</h2>
      </div>
      <div className="offer-grid">
        <article className="offer-card">
          <p className="offer-plan-head">
            FORMULA ALOAH{" "}
            <Image
              src="/hibiscus.svg"
              alt=""
              width={34}
              height={34}
              className="offer-hibiscus offer-hibiscus--aloah"
              aria-hidden="true"
            />
          </p>
          <h3 className="offer-price">2500 EUR / YEAR</h3>
          <ul className="offer-list">
            <li>Request up to 50 UGC video projects per year</li>
            <li>Creators are paid separately based on each project</li>
            <li>Simplified campaign management through Hibis&apos;o platform</li>
            <li>Creator selection handled by Hibis&apos;o team</li>
            <li>Real-time project tracking from your dashboard</li>
          </ul>
          <p className="offer-note">
            Ideal offer to discover Hibis&apos;o workflow without heavy long-term
            creative commitment.
          </p>
          <button className="offer-select-btn" type="button">
            Select Option
          </button>
        </article>

        <article className="offer-card featured">
          <p className="offer-plan-head">
            FORMULA MOANA{" "}
            <Image
              src="/hibiscus2.svg"
              alt=""
              width={34}
              height={34}
              className="offer-hibiscus offer-hibiscus--moana"
              aria-hidden="true"
            />
          </p>
          <h3 className="offer-price">3500 EUR / YEAR</h3>
          <ul className="offer-list">
            <li>Up to 150 UGC videos per year with paid creators</li>
            <li>Choose specific destinations to showcase your products</li>
            <li>Personalized support and strategy from our agency</li>
            <li>Option to run an annual creator contest</li>
            <li>Content review and approval managed by Hibis&apos;o</li>
          </ul>
          <p className="offer-note">
            Designed for brands that want to structure their UGC strategy and
            build stronger audience engagement.
          </p>
          <button className="offer-select-btn" type="button">
            Select Option
          </button>
        </article>

        <article className="offer-card">
          <p className="offer-plan-head">
            FORMULA HIBIS&apos;UN{" "}
            <Image
              src="/hibiscus3.svg"
              alt=""
              width={34}
              height={34}
              className="offer-hibiscus offer-hibiscus--hibisun"
              aria-hidden="true"
            />
          </p>
          <h3 className="offer-price">8000 EUR / YEAR</h3>
          <ul className="offer-list">
            <li>One full annual production day included with 10 creators</li>
            <li>UGC videos captured in one aligned premium location</li>
            <li>Hibis&apos;o manages briefs, contracts, payments, and delivery</li>
            <li>Custom travel destinations can be integrated</li>
            <li>Year-round editorial calendar and marketing strategy</li>
          </ul>
          <p className="offer-note">
            Premium formula for high-value campaigns with strong creative impact.
          </p>
          <button className="offer-select-btn" type="button">
            Select Option
          </button>
        </article>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      role: "Brand Manager",
      company: "L'Occitane",
      quote:
        "We launched a summer collection campaign across three countries in two weeks. The content quality was exceptional and the creator direction was flawless from brief to delivery.",
    },
    {
      role: "Digital Lead",
      company: "Carhartt",
      quote:
        "Their creator network gave us authentic travel stories that converted better than studio-produced ads. We finally found a workflow that is both fast and high-end.",
    },
    {
      role: "Marketing Team",
      company: "L'Oreal",
      quote:
        "Smooth workflow, reliable creators, and premium visuals. This is now a core part of our global social strategy and paid content pipeline.",
    },
    {
      role: "Growth Director",
      company: "Sephora",
      quote:
        "We reduced campaign turnaround time by half while keeping premium visual quality. The process was structured, fast, and easy to scale across markets.",
    },
    {
      role: "Head of Social",
      company: "Adidas",
      quote:
        "From creator matching to final delivery, everything felt premium and dependable. The content has become a key asset for both paid and organic campaigns.",
    },
  ];
  return (
    <section className="section testimonial-wrap">
      <div className="section-head testimonial-head">
        <p className="eyebrow">Testimonials</p>
        <h2>What partners say about working with Hibis&apos;o</h2>
        <p className="testimonial-subtitle">
          Real feedback from teams who trusted our creators to deliver premium
          travel-led content at speed.
        </p>
      </div>
      <div className="testimonial-carousel">
        <div className="testimonial-grid">
          <div className="testimonial-track">
            {testimonials.map((item, index) => (
              <article
                className="testimonial-card"
                key={`testimonial-a-${item.role}-${item.company}-${index}`}
              >
                <span className="quote-mark" aria-hidden="true">
                  &quot;
                </span>
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-meta">
                  <span className="testimonial-avatar" aria-hidden="true" />
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span className="testimonial-rating">5/5</span>
                </div>
              </article>
            ))}
          </div>
          <div className="testimonial-track" aria-hidden="true">
            {testimonials.map((item, index) => (
              <article
                className="testimonial-card"
                key={`testimonial-b-${item.role}-${item.company}-${index}`}
              >
                <span className="quote-mark" aria-hidden="true">
                  &quot;
                </span>
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-meta">
                  <span className="testimonial-avatar" aria-hidden="true" />
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span className="testimonial-rating">5/5</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="section final-cta">
      <div className="final-cta-shell">
        <h2>Turn your product into destination-first content that converts.</h2>
        <p className="final-cta-copy">
          Partner with top creators, ship faster campaigns, and scale premium
          visuals across your paid and organic channels.
        </p>
        <div className="cta-row">
          <Link className="pill-button final-cta-primary" href="/#offers">
            Explore Offers
          </Link>
          <Link
            className="pill-outline final-cta-secondary"
            href="/auth/login"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-grid">
          <section>
            <Link className="footer-brand" href="/">
              <Image
                src="/hibiso_logo.svg"
                alt="Hibiso logo"
                width={40}
                height={40}
                className="footer-logo"
              />
            </Link>
            <p className="footer-about">
              Empowering brands to travel the world through creators and immersive
              UGC experiences.
            </p>
            
          </section>

          <section>
            <h3>Platform</h3>
            <Link href="/#how-it-works-brands">For Brands</Link>
            <Link href="/#how-it-works-creators">For Creators</Link>
            <Link href="/#offers">Pricing</Link>
            <Link href="/#testimonials">Case Studies</Link>
          </section>

          <section>
            <h3>Company</h3>
            <FooterCompanyLinks />
          </section>


        </div>

        <div className="footer-bottom">
          <p>(c) 2026 Hibis&apos;o Inc. All rights reserved.</p>
          <div className="footer-links">
            <a className="footer-legal-link" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="footer-legal-link" href="/terms-of-service">
              Terms of Service
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
