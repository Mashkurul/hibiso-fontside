import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" href="/">
          <Image
            src="/hibisofinal.svg"
            alt="Hibiso logo"
            width={40}
            height={40}
            className="brand-logo"
            priority
          />
        </Link>
        <nav className="menu menu-desktop">
          <Link href="/#how-it-works-brands">How it Works</Link>
          <Link href="/#how-it-works-creators">Creators</Link>
          <Link href="/#offers">Packages</Link>
          <Link href="/#testimonials">Testimonials</Link>
        </nav>
        <div className="topbar-actions topbar-actions-desktop">
          <Link className="login-btn" href="/auth/login">
            Log in
          </Link>
        </div>
        <details className="mobile-nav">
          <summary className="mobile-nav-toggle" aria-label="Open menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-nav-panel">
            <nav className="mobile-menu">
              <Link href="/#how-it-works-brands">How it Works</Link>
              <Link href="/#how-it-works-creators">Creators</Link>
              <Link href="/#offers">Packages</Link>
              <Link href="/#testimonials">Testimonials</Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
