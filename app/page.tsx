import Image from "next/image";
import Link from "next/link";
import {
  BrandsSection,
  FinalCtaSection,
  HowBrandsSection,
  HowCreatorsSection,
  OffersSection,
  SiteFooter,
  TestimonialsSection,
} from "@/app/component/sections";
import { ScrollReveal } from "@/app/component/scroll-reveal";
import { SiteHeader } from "@/app/component/site-header";

export default function Home() {
  return (
    <div className="home-shell">
      <ScrollReveal />
      <SiteHeader />

      <main>
        <section className="hero-wrap">
          <div className="hero-copy">


            <h1>
              Take your
              <br />
              products to
              <br />
              where they <span className="warm">come</span>
              <br />
              <span className="hot">to life.</span>
            </h1>

            <p className="lead">
              Empowering brands to travel the world through creators and immersive
              UGC experiences. Connect with authentic storytellers in paradise.
            </p>

            <div className="cta-row">
              <Link className="pill-outline" href="/auth/login">
                Apply as Creator
              </Link>
            </div>

          </div>

          <div className="hero-art" aria-hidden="true">
            <article className="polaroid">
              <div className="photo">
                <Image
                  src="/image/hero-section.jpg"
                  alt="Creator recording product content at a beach destination"
                  fill
                  className="photo-image"
                  sizes="(max-width: 640px) 84vw, 400px"
                />
              </div>
              <div className="creator-card">
                <div className="avatar">
                  <Image
                    src="/image/creator-avatar.jpg"
                    alt="Creator avatar"
                    fill
                    className="avatar-image"
                    sizes="36px"
                  />
                </div>
                <div>
                  <h3>Sarah J.</h3>
                  <p>Bali, Indonesia</p>
                </div>
                <span>€450.00</span>
              </div>
            </article>
            <article className="campaign-card">
              <p>Covering Beach </p>
              <small>Tulum, Mexico</small>
              <div className="bar">
                <span />
              </div>
            </article>
          </div>
        </section>

        <div id="brands">
          <BrandsSection />
        </div>
        <div id="how-it-works-brands">
          <HowBrandsSection />
        </div>
        <div id="how-it-works-creators">
          <HowCreatorsSection />
        </div>
        <div id="offers">
          <OffersSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <FinalCtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
