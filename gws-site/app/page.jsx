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
              Moving from the old Hush TiviMate app? Hush-XC is now our recommended
              replacement. It may not look quite as polished, but it works and it is stable.
            </p>
            <div className="hero-cta">
              <Link href="/hush-update" className="btn btn-primary">
                Move to Hush-XC →
              </Link>
              <Link href="/gws-online" className="btn btn-ghost">
                GWS Online
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>HUSH-XC</strong>
                <span>Recommended replacement</span>
              </div>
              <div className="stat">
                <strong>1124386</strong>
                <span>Downloader code</span>
              </div>
              <div className="stat">
                <strong>STABLE</strong>
                <span>Reliability first</span>
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
            <h2>Hush-XC for stability. GWS Online as an option.</h2>
            <p>
              Existing Hush customers should move to Hush-XC. GWS Online remains
              available for anyone who wants to try our newer interface.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="ico">📺</div>
              <h3>Hush-XC</h3>
              <p>
                The recommended replacement for the old Hush TiviMate app. It is not
                as pretty, but it is dependable and stable.
              </p>
            </div>
            <div className="card">
              <div className="ico">🦈</div>
              <h3>GWS Online</h3>
              <p>
                Our newer Great White Streams app. It remains available, but Hush-XC
                is the preferred migration path for existing Hush customers.
              </p>
            </div>
            <div className="card">
              <div className="ico">🔑</div>
              <h3>Keep your Hush login</h3>
              <p>
                Before changing apps, copy your username, password and expiration date
                from Hush TiviMate. The migration guide shows exactly where to find them.
              </p>
            </div>
            <div className="card">
              <div className="ico">⚠️</div>
              <h3>Allow photos & media</h3>
              <p>
                Hush-XC asks for access to photos and media the first time it opens.
                Choose Allow / Yes. This step is important for the app to work properly.
              </p>
            </div>
            <div className="card">
              <div className="ico">⚡</div>
              <h3>Simple installation</h3>
              <p>
                Hush-XC Downloader code <strong>1124386</strong>. The migration guide
                walks through the rest step by step.
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
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="action-tiles">
            <div className="tile">
              <span className="tag">RECOMMENDED</span>
              <h3>Move from Hush TiviMate to Hush-XC</h3>
              <p>
                Save your existing Hush username, password and expiration date first,
                then install Hush-XC with Downloader code 1124386.
              </p>
              <Link href="/hush-update" className="btn btn-primary">
                Hush-XC migration guide →
              </Link>
            </div>
            <div className="tile">
              <span className="tag">ALTERNATE APP</span>
              <h3>GWS Online</h3>
              <p>
                GWS Online is still available if you want to try it, but Hush-XC is
                the stable replacement we recommend for current Hush customers.
              </p>
              <Link href="/gws-online" className="btn btn-ghost">
                GWS Online install guide →
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
                Send your details and we&apos;ll get you set up with the login and app
                instructions you need.
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
            <h2>Still using Hush TiviMate?</h2>
            <p>Start with the Hush-XC migration guide and keep the old Hush app installed until the new one is working.</p>
            <Link href="/hush-update" className="btn btn-primary">
              Move to Hush-XC →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
