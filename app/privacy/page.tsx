import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Enchanted Style',
  description: 'How Enchanted Style collects and uses your information.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="text-muted hover:text-gold text-sm transition-colors mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="font-display text-3xl text-foreground mb-2">Privacy Policy</h1>
      <p className="text-muted text-sm mb-10">Last updated: March 2026</p>

      <div className="space-y-8 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-foreground font-semibold text-base mb-3">1. Who We Are</h2>
          <p>
            Enchanted Style is a Lebanese women&apos;s fashion brand operating at enchanted.style.
            We sell clothing, shoes, and accessories and process orders via WhatsApp.
            Contact us at{' '}
            <a href="https://wa.me/96181351084" className="text-gold hover:underline">
              +961 81 351 084
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-base mb-3">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1.5">
            <li>
              <strong className="text-foreground">Account info:</strong> When you sign in with
              Google, we receive your name, email address, and profile picture from Google.
            </li>
            <li>
              <strong className="text-foreground">Order info:</strong> Full name, phone number,
              delivery address, and order details you provide at checkout.
            </li>
            <li>
              <strong className="text-foreground">Usage data:</strong> Standard server logs
              (IP address, browser type, pages visited) collected automatically.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-base mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1.5">
            <li>To process and fulfill your orders</li>
            <li>To contact you via WhatsApp about your delivery</li>
            <li>To show you your order history on the website</li>
            <li>To improve our website and service</li>
          </ul>
          <p className="mt-3">
            We do <strong className="text-foreground">not</strong> sell your data to third
            parties. We do not use your data for advertising.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-base mb-3">4. Google Sign-In</h2>
          <p>
            We use Google OAuth solely to authenticate your identity. We request only your
            basic profile information (name, email, profile photo). We do not access your
            Google Drive, Gmail, contacts, or any other Google services.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-base mb-3">5. Data Storage</h2>
          <p>
            Your account and order data is stored securely on{' '}
            <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              Supabase
            </a>{' '}
            (EU region). We retain order data for up to 3 years for business records.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-base mb-3">6. Your Rights</h2>
          <p>
            You may request deletion of your account and associated data at any time by
            messaging us on WhatsApp. We will process your request within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-base mb-3">7. Cookies</h2>
          <p>
            We use only essential cookies for authentication (session token). We do not use
            tracking or advertising cookies.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-base mb-3">8. Contact</h2>
          <p>
            Questions about this policy? Message us on WhatsApp:{' '}
            <a href="https://wa.me/96181351084" className="text-gold hover:underline">
              +961 81 351 084
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
