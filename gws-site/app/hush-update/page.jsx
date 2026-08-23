import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How to Update from Hush TiviMate — Great White Streams",
  description: "Move from Hush TiviMate to GWS Online or Waveo without losing your login information.",
};

function Step({ n, title, children }) {
  return (
    <div className="card" style={{ display: "flex", gap: 18 }}>
      <div className="ico" style={{ flex: "0 0 46px", fontWeight: 800, fontSize: 18 }}>
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
    <div style={{ marginTop: 14, padding: "16px 20px", borderRadius: 12, border: warning ? "1px solid rgba(255,206,90,.55)" : "1px solid var(--line-strong)", background: "rgba(4,11,24,.72)" }}>
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", color: warning ? "#ffd76a" : "var(--muted)", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 900, color: warning ? "#fff" : "var(--cyan)", overflowWrap: "anywhere", fontVariantNumeric: "tabular-nums" }}>
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
          <span className="eyebrow">GREAT WHITE STREAMS · EXISTING CUSTOMERS</span>
          <h1 style={{ fontSize: "clamp(38px,5vw,62px)", margin: "18px 0 14px" }}>
            How to update from Hush TiviMate
          </h1>
          <p className="hero-sub" style={{ maxWidth: 800 }}>
            Do not uninstall Hush yet. First save your current account information. Then install either GWS Online or Waveo using the same Great White account.
          </p>
          <div className="hero-cta">
            <a href="#save-login" className="btn btn-primary">1. Save your Hush login</a>
            <a href="#gws-online" className="btn btn-ghost">2. Move to GWS Online</a>
            <a href="#waveo" className="btn btn-ghost">3. Move to Waveo</a>
          </div>
        </div>
      </header>

      <section id="save-login" className="section-pad">
        <div className="container">
          <div className="band" style={{ marginBottom: 34, textAlign: "left", borderColor: "rgba(255,206,90,.55)" }}>
            <span className="eyebrow" style={{ marginBottom: 14 }}>DO THIS FIRST</span>
            <h2>Keep Hush installed until the new app works</h2>
            <p>You need your username, password and expiration date from Hush before you move to GWS Online or Waveo.</p>
          </div>

          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">STEP 1</span>
            <h2>Get your account information from Hush</h2>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Hush">Open the <strong>Hush</strong> app on the device that is currently working.</Step>
            <Step n="2" title="Open Settings">From the Hush menu, open <strong>Settings</strong>.</Step>
            <Step n="3" title="Open Playlists">Open <strong>Playlists</strong>, then select the playlist named <strong>Hush</strong>.</Step>
            <Step n="4" title="Find Xtream Codes Parameters">Scroll down until you see <strong>Xtream Codes Parameters</strong>.</Step>
            <Step n="5" title="Save these three items">Take a picture of your <strong>Username</strong>, <strong>Password</strong> and <strong>Expiration Date</strong>. Keep that picture until the new app is working.</Step>
          </div>

          <div className="card" style={{ marginTop: 18, borderColor: "rgba(56,214,255,.35)" }}>
            <h3 style={{ marginBottom: 10 }}>Before continuing, make sure you have:</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>✓ Username &nbsp;&nbsp; ✓ Password &nbsp;&nbsp; ✓ Expiration Date</p>
          </div>
        </div>
      </section>

      <section id="gws-online" className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">OPTION 1 · GWS ONLINE</span>
            <h2>Move from Hush to GWS Online</h2>
            <p>GWS Online is the main Great White Streams app.</p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Downloader">Open the <strong>Downloader</strong> app on your Fire TV, Android TV or Google TV device.</Step>
            <Step n="2" title="Enter the GWS Online code">Enter the code below exactly and choose <strong>Go</strong>.<CodeBox label="GWS Online Downloader Code" value="9627454" /></Step>
            <Step n="3" title="Install and open GWS Online">Download the app, choose <strong>Install</strong>, then open <strong>GWS Online</strong>.</Step>
            <Step n="4" title="Choose Xtream">When GWS Online asks you to add your TV service, choose <strong>Xtream</strong>.</Step>
            <Step n="5" title="Enter the Great White server">Enter this address exactly:<CodeBox label="Server / DNS" value="https://ottidns.com" /></Step>
            <Step n="6" title="Enter the Hush username and password">Use the exact <strong>username</strong> and <strong>password</strong> you copied from Hush.</Step>
            <Step n="7" title="Start the import">Continue through setup and let GWS Online finish loading channels, movies, series and guide data.</Step>
            <Step n="8" title="Confirm it works">Open a channel and confirm your service works normally before removing Hush.</Step>
          </div>
        </div>
      </section>

      <section id="waveo" className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">OPTION 2 · WAVEO</span>
            <h2>Move from Hush to Waveo</h2>
            <p>The important part is selecting <strong>Custom</strong> at the Waveo login screen. Do not select Hush.</p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Downloader">Open the <strong>Downloader</strong> app.</Step>
            <Step n="2" title="Enter the Waveo code">Enter this Downloader code and choose <strong>Go</strong>.<CodeBox label="Waveo Downloader Code" value="9378234" /></Step>
            <Step n="3" title="Install and open Waveo">Download Waveo, choose <strong>Install</strong>, then open the app.</Step>
            <Step n="4" title="Choose CUSTOM">When the Waveo login screen opens, choose <strong>CUSTOM</strong>.<CodeBox label="Important" value="CUSTOM — NOT HUSH" warning /></Step>
            <Step n="5" title="Enter the Great White DNS">Enter this address exactly, including https://<CodeBox label="DNS / Server" value="https://ottidns.com" /></Step>
            <Step n="6" title="Enter the Hush username and password">Use the exact <strong>username</strong> and <strong>password</strong> you copied from Hush. Watch for extra spaces.</Step>
            <Step n="7" title="Log in">Select <strong>Login</strong> and let Waveo finish loading.</Step>
            <Step n="8" title="Confirm it works">Once Waveo opens, confirm your channels work before removing Hush.</Step>
          </div>

          <div className="band" style={{ marginTop: 40, textAlign: "left" }}>
            <h2>Waveo not logging in?</h2>
            <p>Check these three things first: <strong>Custom</strong> is selected, the DNS is exactly <strong>https://ottidns.com</strong>, and the username/password match Hush exactly.</p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band">
            <h2>New install instead?</h2>
            <p>Go straight to the GWS Online installation guide.</p>
            <Link href="/gws-online" className="btn btn-primary">How to install GWS Online →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
