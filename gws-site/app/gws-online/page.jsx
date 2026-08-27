import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GWS Online — Great White Streams",
  description: "Great White Streams GWS Online installation information.",
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

function CodeBox({ label, value }) {
  return (
    <div style={{ marginTop: 14, padding: "16px 20px", borderRadius: 12, border: "1px solid var(--line-strong)", background: "rgba(4,11,24,.72)" }}>
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: 30, fontWeight: 900, color: "var(--cyan)", overflowWrap: "anywhere", fontVariantNumeric: "tabular-nums" }}>
        {value}
      </div>
    </div>
  );
}

export default function GwsOnlineInstallPage() {
  return (
    <>
      <Nav />

      <header className="hero" style={{ padding: "72px 0 38px" }}>
        <div className="container">
          <span className="eyebrow">GREAT WHITE STREAMS · GWS ONLINE</span>
          <h1 style={{ fontSize: "clamp(38px,5vw,62px)", margin: "18px 0 14px" }}>
            GWS Online
          </h1>
          <p className="hero-sub" style={{ maxWidth: 760 }}>
            GWS Online is still under development for some Great White setups. If you are currently using Hush, do not install GWS Online right now.
          </p>
          <div className="hero-cta">
            <Link href="/hush-update" className="btn btn-primary">Hush customer? Use Hush-XC →</Link>
            <a href="#install" className="btn btn-ghost">Install only if directed</a>
          </div>
        </div>
      </header>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band" style={{ textAlign: "left" }}>
            <span className="eyebrow">IMPORTANT FOR HUSH CUSTOMERS</span>
            <h2>Do not install GWS Online if you currently use Hush.</h2>
            <p>
              VOD playback is not working correctly with the Hush setup yet. Use Hush-XC instead and keep your existing Hush app installed until the new setup is confirmed working.
            </p>
            <Link href="/hush-update" className="btn btn-primary">Go to Hush-XC setup →</Link>
          </div>
        </div>
      </section>

      <section id="install" className="section-pad">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">INSTALLATION</span>
            <h2>Only continue if you were directed to use GWS Online</h2>
            <p>If you are a current Hush customer, stop here and use the Hush-XC guide instead.</p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Confirm this is the correct app">
              Current Hush customers should <strong>not</strong> continue with this installation. Use <Link href="/hush-update">Hush-XC</Link> instead.
            </Step>

            <Step n="2" title="Open Downloader">
              Open the <strong>Downloader</strong> app on your TV device.
            </Step>

            <Step n="3" title="Enter the GWS Online Downloader code">
              Enter the code below exactly and choose <strong>Go</strong>.
              <CodeBox label="GWS Online Downloader Code" value="6818487" />
            </Step>

            <Step n="4" title="Install GWS Online">
              When the download finishes, choose <strong>Install</strong>. After installation, open <strong>GWS Online</strong>.
            </Step>

            <Step n="5" title="Choose Xtream">
              When GWS Online asks you to add your TV service, choose <strong>Xtream</strong>.
            </Step>

            <Step n="6" title="Enter the Great White server">
              Enter the server address exactly as shown below.
              <CodeBox label="Server / DNS" value="https://ottipdns.com" />
            </Step>

            <Step n="7" title="Enter your Great White login">
              Enter your <strong>username</strong> and <strong>password</strong>. Check for accidental spaces before or after either one.
            </Step>

            <Step n="8" title="Start the import">
              Continue with the Xtream setup and start the import. Let GWS Online finish loading your available data.
            </Step>
          </div>

          <div className="band" style={{ marginTop: 40, textAlign: "left" }}>
            <h2>Already using Hush TiviMate?</h2>
            <p>Do not install GWS Online right now. Move to Hush-XC instead.</p>
            <Link href="/hush-update" className="btn btn-primary">Move to Hush-XC →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
