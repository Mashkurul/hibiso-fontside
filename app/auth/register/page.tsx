import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <aside className="auth-promo">
          <p className="auth-kicker">Start Growing</p>
          <h1>Create Your Account</h1>
          <p>
            Join Hibis&apos;o to launch premium creator campaigns with faster approvals and
            measurable ROI.
          </p>
          <ul className="auth-benefits">
            <li>Brand and creator onboarding in minutes</li>
            <li>Centralized communication and revisions</li>
            <li>Secure payment and delivery workflow</li>
          </ul>
        </aside>

        <div className="auth-card">
          <h2>Register</h2>
          <p className="auth-subtitle">Set up your account to begin.</p>

          <form className="auth-form">
            <label className="auth-field" htmlFor="register-name">
              <span>Full Name</span>
              <input id="register-name" type="text" placeholder="Your full name" />
            </label>

            <label className="auth-field" htmlFor="register-email">
              <span>Email</span>
              <input id="register-email" type="email" placeholder="you@company.com" />
            </label>

            <label className="auth-field" htmlFor="register-role">
              <span>Account Type</span>
              <select id="register-role" defaultValue="brand">
                <option value="brand">Brand</option>
                <option value="creator">Creator</option>
              </select>
            </label>

            <label className="auth-field" htmlFor="register-password">
              <span>Password</span>
              <input id="register-password" type="password" placeholder="Create a password" />
            </label>

            <label className="auth-field" htmlFor="register-confirm-password">
              <span>Confirm Password</span>
              <input
                id="register-confirm-password"
                type="password"
                placeholder="Re-enter your password"
              />
            </label>

            <label className="auth-check" htmlFor="terms">
              <input id="terms" type="checkbox" />
              <span>I agree to the Terms and Privacy Policy</span>
            </label>

            <button className="auth-submit" type="submit">
              Create Account
            </button>
          </form>

          <p className="auth-meta">
            Already have an account? <Link href="/auth/login">Login</Link>
          </p>
          <Link className="auth-home-link" href="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
