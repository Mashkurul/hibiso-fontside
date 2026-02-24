import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <aside className="auth-promo">
          <p className="auth-kicker">Welcome Back</p>
          <h1>Login to Hibis&apos;o</h1>
          <p>
            Access your campaigns, creator pipeline, and content delivery dashboard in one place.
          </p>
          <ul className="auth-benefits">
            <li>Track campaign status in real time</li>
            <li>Review creators and approvals faster</li>
            <li>Manage invoices and deliverables securely</li>
          </ul>
        </aside>

        <div className="auth-card">
          <h2>Sign in</h2>
          <p className="auth-subtitle">Use your email and password to continue.</p>

          <form className="auth-form">
            <label className="auth-field" htmlFor="login-email">
              <span>Email</span>
              <input id="login-email" type="email" placeholder="you@company.com" />
            </label>

            <label className="auth-field" htmlFor="login-password">
              <span>Password</span>
              <input id="login-password" type="password" placeholder="Enter your password" />
            </label>

            <div className="auth-row">
              <label className="auth-check" htmlFor="remember">
                <input id="remember" type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link href="/auth/forgot-password">Forgot password?</Link>
            </div>

            <button className="auth-submit" type="submit">
              Login
            </button>
          </form>

          <p className="auth-meta">
            Don&apos;t have an account? <Link href="/auth/register">Create one</Link>
          </p>
          <Link className="auth-home-link" href="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
