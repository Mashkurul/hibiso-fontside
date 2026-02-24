import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell auth-shell-single">
        <div className="auth-card auth-card-centered">
          <p className="auth-kicker">Account Recovery</p>
          <h1>Forgot Password?</h1>
          <p className="auth-subtitle">
            Enter your email and we&apos;ll send a secure reset link.
          </p>

          <form className="auth-form">
            <label className="auth-field" htmlFor="forgot-email">
              <span>Email</span>
              <input id="forgot-email" type="email" placeholder="you@company.com" />
            </label>

            <button className="auth-submit" type="submit">
              Send Reset Link
            </button>
          </form>

          <p className="auth-meta">
            Remember your password? <Link href="/auth/login">Back to login</Link>
          </p>
          <Link className="auth-home-link" href="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
