import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Shark from "@/components/Shark";
import TrialForm from "@/components/TrialForm";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const tg = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_URL || "#";

  return (
    <>
      <Nav />

      <header className="hero">
        <div className="caustics" />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">● GREAT WHITE STREAMS</span>
            <h1>
              Your TV. <span className="accent">Great White</span> simple.
            </h1>
            <p className="hero-sub">
              Great White Streams gives members a cleaner way to watch on Fire TV,
              Android TV and Google TV. Use our GWS TV app or Waveo with the same
              account you already have.
            </p>
            <div className="hero-cta">
              <Link href="/install" className="btn btn-primary">
                Customer setup →
              </Link>
              <Link href="#trial" className="btn btn-ghost">
                Start a free trial
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>GWS TV</strong>
                <span>Our own TV app</span>
              </div>
              <div className="stat">
                <strong>WAVEO</strong>
                <span>Alternate player</span>
              </div>
              <div className="stat">
                <strong>1 LOGIN</strong>
                <span>Same account credentials</span>
              </div>
            </div>
          </div>
          <div className="shark-stage">
            <Shark />
          </div>
        </div>
      </header>

      <section id="features" className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The GWS setup</span>
            <h2>Two apps. One Great White account.</h2>
            <p>
              We are moving customers away from the old Hush app and into a simpler
              Great White Streams setup.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="ico">🦈</div>
              <h3>Great White Streams TV</h3>
              <p>
                Our own TV app, built specifically for Great White Streams customers
                with a clean remote-friendly interface.
              </p>
            </div>
            <div className="card">
              <div className="ico">📺</div>
              <h3>Waveo</h3>
              <p>
                A second supported player. Use Custom login with the GWS DNS and your
                existing username and password.
              </p>
            </div>
            <div className="card">
              <div className="ico">🔑</div>
              <h3>Keep your current login</h3>
              <p>
                Before changing apps, copy your username, password and expiration
                date from Hush. The setup guide shows exactly where to find them.
              </p>
            </div>
            <div className="card">
              <div className="ico">⚡</div>
              <h3>Fast setup</h3>
              <p>
                Downloader codes, login settings and the correct DNS are laid out in
                one customer guide with no guesswork.
              </p>
            </div>
            <div className="card">
              <div className="ico">💬</div>
              <h3>Real support</h3>
              <p>
                If something does not work, contact Great White Streams instead of
                digging through player settings on your own.
              </p>
            </div>
            <div className="card">
              <div className="ico">✅</div>
              <h3>Built for TV devices</h3>
              <p>
                Designed around Fire TV, Android TV and Google TV devices with simple
                remote-control navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="action-tiles">
            <div className="tile">
              <span className="tag">APP 1</span>
              <h3>Set up Great White Streams TV</h3>
              <p>
                Save your existing account details first, then install and sign into
                the GWS TV app.
              </p>
              <Link href="/install#gws-tv" className="btn btn-primary">
                GWS TV setup →
              </Link>
            </div>
            <div className="tile">
              <span className="tag">APP 2</span>
              <h3>Set up Waveo</h3>
              <p>
                Use Downloader code 9378234, choose Custom at login, and use the GWS
                DNS with your existing username and password.
              </p>
              <Link href="/install#waveo" className="btn btn-ghost">
                Waveo setup →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="trial" className="section-pad">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <span className="eyebrow">Free trial</span>
              <h2
                style={{
                  fontSize: "clamp(28px,4vw,42px)",
                  color: "var(--foam)",
                  margin: "14px 0 14px",
                }}
              >
                Try Great White Streams
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>
                Send your details and we&apos;ll get you set up with the login and
                app instructions you need.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Already a member and need help? <Link href="#contact">Contact us →</Link>
              </p>
            </div>
            <TrialForm />
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <ContactForm />
            <div>
              <span className="eyebrow">Support</span>
              <h2
                style={{
                  fontSize: "clamp(28px,4vw,42px)",
                  color: "var(--foam)",
                  margin: "14px 0 14px",
                }}
              >
                Need a hand?
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>
                Questions about your login, device or app setup? Send a message and
                we&apos;ll help you get it sorted.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Prefer chat?{" "}
                <a href={tg} target="_blank" rel="noreferrer">
                  Join us on Telegram →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band">
            <h2>Already a customer?</h2>
            <p>Start with the customer setup guide before removing Hush.</p>
            <Link href="/install" className="btn btn-primary">
              Open customer setup →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
