import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How to Fix Hush (TiviMate) — GWS",
  description:
    "Step-by-step guide to reinstall and fix Hush TV / TiviMate playback for Great White Streams.",
};

function Step({ n, title, children }) {
  return (
    <div className="card" style={{ display: "flex", gap: 18 }}>
      <div
        className="ico"
        style={{ flex: "0 0 46px", fontWeight: 800, fontSize: 18 }}
      >
        {n}
      </div>
      <div>
        <h3>{title}</h3>
        <div style={{ color: "var(--muted)", fontSize: "14.5px", lineHeight: 1.65 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function InstallPage() {
  return (
    <>
      <Nav />

      <header className="hero" style={{ padding: "70px 0 30px" }}>
        <div className="container">
          <span className="eyebrow">Setup &amp; troubleshooting</span>
          <h1 style={{ fontSize: "clamp(34px,5vw,56px)", margin: "18px 0 14px" }}>
            How to Fix Hush (TiviMate)
          </h1>
          <p className="hero-sub" style={{ maxWidth: 640 }}>
            Streams stopped, guide frozen, or buffering? A clean reinstall of
            Hush TV clears it up — and it&apos;s the same five steps as a fresh
            setup. Takes about five minutes.
          </p>
          <div className="hero-cta">
            <a href="#guide" className="btn btn-primary">
              Start the guide
            </a>
            <Link href="/#contact" className="btn btn-ghost">
              Contact support
            </Link>
          </div>
        </div>
      </header>

      {/* HOW TO FIX HUSH (TIVIMATE) */}
      <section id="guide" className="section-pad">
        {/* anchors so homepage Install / Fix links both land here */}
        <span id="install-hush" />
        <span id="tivimate" />
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">🛠️ Hush TV</span>
            <h2>How to Fix Hush (TiviMate)</h2>
            <p>
              Follow these in order — it&apos;s a clean reinstall of the latest
              Hush TV. The whole thing takes about five minutes.
            </p>
          </div>
          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Uninstall the old app">
              If you&apos;ve got an older Hush build on your device, remove it
              first for a clean install. Go to{" "}
              <strong>Settings → Apps</strong>, select <strong>Hush</strong>,
              and tap <strong>Uninstall</strong>.
            </Step>
            <Step n="2" title="Open Downloader">
              Launch the <strong>Downloader</strong> app (the orange icon).
              Don&apos;t have it? Grab it from your device&apos;s app store
              first, then come back here.
            </Step>
            <Step n="3" title="Download new Hush TV">
              Tap the white search bar in Downloader, type this code exactly,
              tap <strong>Go</strong>, then <strong>Install</strong> when it
              finishes.
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginTop: 14,
                  padding: "16px 20px",
                  borderRadius: 12,
                  border: "1px solid var(--line-strong)",
                  background: "rgba(4, 11, 24, 0.6)",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  Enter code
                </span>
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    color: "var(--cyan)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  8129997
                </span>
              </span>
            </Step>
            <Step n="4" title="Configure playlist">
              Open the new app, tap <strong>Add Playlist</strong>, then select{" "}
              <strong>Hush</strong> to reach the login screen.
            </Step>
            <Step n="5" title="Log in">
              Enter your <strong>Great White Streams</strong> username and
              password, then tap <strong>Log In</strong> to connect. That&apos;s
              it — sit back, relax, and enjoy your streams. 🦈
            </Step>
          </div>

          <div className="band" style={{ marginTop: 40 }}>
            <h2>Still stuck?</h2>
            <p>
              If a reinstall didn&apos;t do it, send us a message or jump into
              the Telegram chat — we&apos;ll walk you through it.
            </p>
            <Link href="/#contact" className="btn btn-primary">
              Contact support →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
