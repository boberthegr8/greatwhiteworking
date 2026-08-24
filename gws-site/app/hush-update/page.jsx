import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Move from Hush TiviMate to Hush-XC — Great White Streams",
  description:
    "Step-by-step guide for moving from Hush TiviMate to the stable Hush-XC app without losing your Great White login information.",
};

function Step({ n, title, children, important = false }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        gap: 18,
        borderColor: important ? "rgba(255,206,90,.65)" : undefined,
      }}
    >
      <div
        className="ico"
        style={{
          flex: "0 0 46px",
          fontWeight: 800,
          fontSize: 18,
          color: important ? "#ffd76a" : undefined,
        }}
      >
        {n}
      </div>
      <div>
        <h3>{title}</h3>
        <div style={{ color: "var(--muted)", fontSize: "14.5px", lineHeight: 1.7 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function CodeBox({ label, value, warning = false }) {
  return (
    <div
      style={{
        marginTop: 14,
        padding: "16px 20px",
        borderRadius: 12,
        border: warning
          ? "1px solid rgba(255,206,90,.65)"
          : "1px solid var(--line-strong)",
        background: "rgba(4,11,24,.72)",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: warning ? "#ffd76a" : "var(--muted)",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 900,
          color: warning ? "#fff" : "var(--cyan)",
          overflowWrap: "anywhere",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default function HushUpdatePage() {
  return (
    <>
      <Nav />

      <header className="hero" style={{ padding: "72px 0 38px" }}>
        <div className="container">
          <span className="eyebrow">GREAT WHITE STREAMS · EXISTING HUSH CUSTOMERS</span>
          <h1 style={{ fontSize: "clamp(38px,5vw,62px)", margin: "18px 0 14px" }}>
            Move from Hush TiviMate to Hush-XC
          </h1>
          <p className="hero-sub" style={{ maxWidth: 820 }}>
            Hush-XC is not quite as polished or as pretty as the old TiviMate-style
            Hush app, but it works, it is stable, and it is the replacement we
            recommend for existing Hush customers.
          </p>
          <div className="hero-cta">
            <a href="#save-login" className="btn btn-primary">
              1. Save your Hush login
            </a>
            <a href="#hush-xc" className="btn btn-ghost">
              2. Install Hush-XC
            </a>
          </div>
        </div>
      </header>

      <section id="save-login" className="section-pad">
        <div className="container">
          <div
            className="band"
            style={{
              marginBottom: 34,
              textAlign: "left",
              borderColor: "rgba(255,206,90,.55)",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              DO THIS FIRST
            </span>
            <h2>Do not uninstall your old Hush app yet</h2>
            <p>
              First save your username, password and expiration date. Keep the old
              Hush app until Hush-XC is installed, logged in and playing properly.
            </p>
          </div>

          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">STEP 1</span>
            <h2>Get your account information from Hush</h2>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Hush">
              Open the <strong>Hush</strong> app that is currently working.
            </Step>
            <Step n="2" title="Open Settings → Playlists">
              From the left menu choose <strong>Settings</strong>, then select
              <strong> Playlists</strong>.
            </Step>
            <Step n="3" title="Open the Hush playlist">
              Select the playlist named <strong>Hush</strong>.
            </Step>
            <Step n="4" title="Open Xtream Codes parameters">
              Scroll down and select <strong>Xtream Codes parameters</strong>.
            </Step>
            <Step n="5" title="Save these three items">
              Take a picture or write down your <strong>Username</strong>,
              <strong> Password</strong> and <strong>Expiration date</strong>.
            </Step>
          </div>

          <div className="card" style={{ marginTop: 18, borderColor: "rgba(56,214,255,.35)" }}>
            <h3 style={{ marginBottom: 10 }}>Before continuing, make sure you have:</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              ✓ Username &nbsp;&nbsp; ✓ Password &nbsp;&nbsp; ✓ Expiration date
            </p>
          </div>
        </div>
      </section>

      <section id="hush-xc" className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">STEP 2 · RECOMMENDED REPLACEMENT</span>
            <h2>Install Hush-XC</h2>
            <p>
              Hush-XC may look simpler than TiviMate, but it has been the more stable
              option. For customers moving off the old Hush app, this is the app we
              recommend using.
            </p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Downloader">
              Open the <strong>Downloader</strong> app on your Fire TV, Android TV or
              Google TV device.
            </Step>

            <Step n="2" title="Enter the Hush-XC Downloader code">
              Enter the code below exactly and choose <strong>Go</strong>.
              <CodeBox label="Hush-XC Downloader Code" value="1124386" />
            </Step>

            <Step n="3" title="Install and open Hush-XC">
              When the download finishes, choose <strong>Install</strong>, then open
              <strong> Hush-XC</strong>.
            </Step>

            <Step n="4" title="ALLOW access to photos and media" important>
              When Hush-XC asks for permission to access <strong>photos and media</strong>
              (the wording may vary slightly by device), choose <strong>ALLOW / YES</strong>.
              <CodeBox label="Important — do not skip this" value="ALLOW PHOTOS & MEDIA" warning />
              <p style={{ marginTop: 12 }}>
                This permission is required for Hush-XC to work properly. If you deny it,
                the app may not load or save what it needs. If you accidentally choose
                Deny, open your device&apos;s App Settings for Hush-XC and enable the media/files
                permission before continuing.
              </p>
            </Step>

            <Step n="5" title="Enter the Great White server / DNS">
              Enter the address below exactly, including <strong>https://</strong>.
              <CodeBox label="Server / DNS" value="https://ottipdns.com" />
            </Step>

            <Step n="6" title="Enter your saved Hush login">
              Enter the exact <strong>username</strong> and <strong>password</strong>
              you copied from the old Hush app. Watch for accidental spaces.
            </Step>

            <Step n="7" title="Log in and let Hush-XC load">
              Continue through login and give the app time to load your channels,
              movies and series.
            </Step>

            <Step n="8" title="Test it before removing old Hush">
              Open Live TV and play a channel. Once Hush-XC is working properly, you
              can remove the old Hush TiviMate app if you want.
            </Step>
          </div>

          <div className="band" style={{ marginTop: 40, textAlign: "left" }}>
            <h2>Hush-XC not working?</h2>
            <p>
              Check the three common problems first: media access was allowed, the DNS
              is exactly <strong>https://ottipdns.com</strong>, and your username and
              password match the old Hush app exactly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band">
            <h2>Want to try GWS Online too?</h2>
            <p>
              GWS Online is still available, but Hush-XC is the recommended replacement
              for customers coming from Hush TiviMate because stability comes first.
            </p>
            <Link href="/gws-online" className="btn btn-ghost">
              GWS Online install guide →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
