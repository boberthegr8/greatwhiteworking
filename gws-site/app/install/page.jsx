import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Customer Setup — Great White Streams",
  description:
    "Great White Streams customer migration guide for Waveo and GWS TV.",
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
        <div style={{ color: "var(--muted)", fontSize: "14.5px", lineHeight: 1.7 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function CodeBox({ label, value, warning }) {
  return (
    <div
      style={{
        marginTop: 14,
        padding: "16px 20px",
        borderRadius: 12,
        border: warning
          ? "1px solid rgba(255,206,90,.55)"
          : "1px solid var(--line-strong)",
        background: "rgba(4, 11, 24, 0.72)",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.16em",
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

export default function InstallPage() {
  return (
    <>
      <Nav />

      <header className="hero" style={{ padding: "70px 0 34px" }}>
        <div className="container">
          <span className="eyebrow">GREAT WHITE STREAMS · CUSTOMER SETUP</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", margin: "18px 0 14px" }}>
            Moving off Hush
          </h1>
          <p className="hero-sub" style={{ maxWidth: 760 }}>
            Do not uninstall Hush yet. First copy your current username, password and
            expiration date. Then use those same credentials in Waveo or GWS TV.
          </p>
          <div className="hero-cta">
            <a href="#save-login" className="btn btn-primary">
              1. Save your Hush login
            </a>
            <a href="#waveo" className="btn btn-ghost">
              2. Set up Waveo
            </a>
            <a href="#gws-tv" className="btn btn-ghost">
              3. Set up GWS TV
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
              borderColor: "rgba(255, 206, 90, 0.55)",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              DO THIS BEFORE ANYTHING ELSE
            </span>
            <h2>Keep Hush installed for now</h2>
            <p>
              You need three pieces of information from Hush before moving to the new
              apps: your username, password and expiration date.
            </p>
          </div>

          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">STEP 1</span>
            <h2>Get your account information from Hush</h2>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Hush">
              Open the <strong>Hush</strong> app on the device that is currently working.
            </Step>
            <Step n="2" title="Open Settings">
              From the Hush menu, choose <strong>Settings</strong>.
            </Step>
            <Step n="3" title="Open Playlists">
              Choose <strong>Playlists</strong>, then open the playlist named
              <strong> Hush</strong>.
            </Step>
            <Step n="4" title="Scroll to Xtream Codes Parameters">
              Scroll down until you see <strong>Xtream Codes Parameters</strong>.
            </Step>
            <Step n="5" title="Take a picture of these three items">
              Save your <strong>Username</strong>, <strong>Password</strong> and
              <strong> Expiration Date</strong>. A phone picture is the easiest way to
              avoid typing anything down incorrectly.
            </Step>
          </div>

          <div className="card" style={{ marginTop: 18, borderColor: "rgba(56,214,255,.35)" }}>
            <h3 style={{ marginBottom: 10 }}>Before you continue, make sure you have:</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              ✓ Username &nbsp;&nbsp; ✓ Password &nbsp;&nbsp; ✓ Expiration Date
            </p>
          </div>
        </div>
      </section>

      <section id="waveo" className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">STEP 2 · WAVEO</span>
            <h2>Install and log into Waveo</h2>
            <p>
              This part is important: on the Waveo login screen choose
              <strong> Custom</strong>. Do not choose Hush.
            </p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Downloader">
              Open the <strong>Downloader</strong> app on your Fire TV, Android TV or
              Google TV device.
            </Step>
            <Step n="2" title="Enter the Waveo Downloader code">
              Enter the code below exactly and select <strong>Go</strong>.
              <CodeBox label="Waveo Downloader Code" value="9378234" />
            </Step>
            <Step n="3" title="Install and open Waveo">
              Download Waveo, choose <strong>Install</strong>, then open the app.
            </Step>
            <Step n="4" title="Choose CUSTOM">
              When Waveo asks how you want to log in, select
              <strong> CUSTOM</strong>.
              <CodeBox label="Important" value="CUSTOM — NOT HUSH" warning />
            </Step>
            <Step n="5" title="Enter the GWS DNS / server">
              Enter this address exactly, including <strong>https://</strong>:
              <CodeBox label="DNS / Server" value="https://ottidns.com" />
            </Step>
            <Step n="6" title="Enter your username and password">
              Use the exact <strong>username</strong> and <strong>password</strong> you
              just copied from Hush. Do not add spaces before or after either one.
            </Step>
            <Step n="7" title="Log in">
              Select <strong>Login</strong> and let Waveo finish loading your channels,
              movies and series.
            </Step>
            <Step n="8" title="Confirm your account">
              Once Waveo opens, confirm that your service is working. Keep the
              expiration date you copied from Hush for reference.
            </Step>
          </div>

          <div className="band" style={{ marginTop: 40, textAlign: "left" }}>
            <h2>Waveo will not log in?</h2>
            <p>
              Check these three things first: <strong>Custom</strong> is selected,
              the DNS is exactly <strong>https://ottidns.com</strong>, and the username
              and password match Hush exactly.
            </p>
          </div>
        </div>
      </section>

      <section id="gws-tv" className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">STEP 3 · GWS TV</span>
            <h2>Great White Streams TV</h2>
            <p>
              GWS TV uses the same account credentials you saved from Hush. The final
              Downloader code will be placed here as soon as it is confirmed so we do
              not send customers an incorrect code.
            </p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Downloader">
              Open the <strong>Downloader</strong> app on your TV device.
            </Step>
            <Step n="2" title="Install Great White Streams TV">
              Enter the GWS TV Downloader code provided by Great White Streams, then
              download and install the app.
            </Step>
            <Step n="3" title="Choose Xtream">
              Open GWS TV and choose an <strong>Xtream</strong> source when adding your
              TV service.
            </Step>
            <Step n="4" title="Use your saved account information">
              Enter the server information provided for GWS TV, then enter the same
              <strong> username</strong> and <strong> password</strong> you copied from Hush.
            </Step>
            <Step n="5" title="Let the first sync finish">
              Allow channels, movies, series and guide data to load before you start
              changing settings.
            </Step>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band">
            <h2>Need help?</h2>
            <p>Contact Great White Streams and we&apos;ll walk you through the setup.</p>
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
