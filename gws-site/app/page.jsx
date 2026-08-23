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
              Android TV and Google TV. Install GWS Online or use Waveo with the same
              Great White account.
            </p>
            <div className="hero-cta">
              <Link href="/gws-online" className="btn btn-primary">
                How to install GWS Online →
              </Link>
              <Link href="/hush-update" className="btn btn-ghost">
                Updating from Hush TiviMate?
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>GWS ONLINE</strong>
                <span>Main Great White app</span>
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
            <h2>GWS Online first. Waveo as an option.</h2>
            <p>
              New customers can install GWS Online directly. Existing Hush TiviMate
              customers can move over without losing their account information.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="ico">🦈</div>
              <h3>GWS Online</h3>
              <p>
                The main Great White Streams app, built for Fire TV, Android TV and
                Google TV devices.
              </p>
            </div>
            <div className="card">
              <div className="ico">📺</div>
              <h3>Waveo</h3>
              <p>
                A supported alternate player. Use Custom login with the Great White
                DNS and your existing username and password.
              </p>
            </div>
            <div className="card">
              <div className="ico">🔑</div>
              <h3>Keep your Hush login</h3>
              <p>
                Before changing apps, copy your username, password and expiration
                date from Hush TiviMate. The migration guide shows exactly where.
              </p>
            </div>
            <div className="card">
              <div className="ico">⚡</div>
              <h3>Simple installation</h3>
              <p>
                GWS Online Downloader code 9627454 and Waveo Downloader code 9378234
                are both included in the setup guides.
              </p>
            </div>
            <div className="card">
              <div className="ico">💬</div>
              <h3>Real support</h3>
              <p>
                If something does not work, contact Great White Streams and we will
                help you get it sorted.
              </p>
            </div>
            <div className="card">
              <div className="ico">✅</div>
              <h3>Built for TV devices</h3>
              <p>
                Designed around Fire TV, Android TV and Google TV with simple
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
              <span className="tag">START HERE</span>
              <h3>How to install GWS Online</h3>
              <p>
                Use Downloader code 9627454, choose Xtream, and sign in with your
                Great White account.
              </p>
              <Link href="/gws-online" className="btn btn-primary">
                GWS Online install guide →
              </Link>
            </div>
            <div className="tile">
              <span className="tag">EXISTING HUSH CUSTOMERS</span>
              <h3>How to update from Hush TiviMate</h3>
              <p>
                Save your Hush username, password and expiration date first, then move
                to GWS Online or Waveo.
              </p>
              <Link href="/hush-update" className="btn btn-ghost">
                Hush update guide →
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
            <h2>Ready to install?</h2>
            <p>Start with GWS Online. If you are still using Hush TiviMate, use the migration guide instead.</p>
            <Link href="/gws-online" className="btn btn-primary">
              Install GWS Online →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
