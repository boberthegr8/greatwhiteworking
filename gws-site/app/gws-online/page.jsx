import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How to Install GWS Online — Great White Streams",
  description: "Step-by-step Great White Streams GWS Online installation guide.",
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
            How to install GWS Online
          </h1>
          <p className="hero-sub" style={{ maxWidth: 760 }}>
            This is the main Great White Streams app. Have your Great White username and password ready before you begin.
          </p>
          <div className="hero-cta">
            <a href="#install" className="btn btn-primary">Start installation →</a>
            <Link href="/hush-update" className="btn btn-ghost">Coming from Hush TiviMate?</Link>
          </div>
        </div>
      </header>

      <section id="install" className="section-pad">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">INSTALLATION</span>
            <h2>Install GWS Online with Downloader</h2>
            <p>Follow these steps in order on your Fire TV, Android TV or Google TV device.</p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Downloader">
              Open the <strong>Downloader</strong> app on your TV device.
            </Step>

            <Step n="2" title="Enter the GWS Online Downloader code">
              Enter the code below exactly and choose <strong>Go</strong>.
              <CodeBox label="GWS Online Downloader Code" value="6818487" />
            </Step>

            <Step n="3" title="Install GWS Online">
              When the download finishes, choose <strong>Install</strong>. After installation, open <strong>GWS Online</strong>.
            </Step>

            <Step n="4" title="Choose Xtream">
              When GWS Online asks you to add your TV service, choose <strong>Xtream</strong>.
            </Step>

            <Step n="5" title="Enter the Great White server">
              Enter the server address exactly as shown below.
              <CodeBox label="Server / DNS" value="https://ottidns.com" />
            </Step>

            <Step n="6" title="Enter your Great White login">
              Enter your <strong>username</strong> and <strong>password</strong>. Check for accidental spaces before or after either one.
            </Step>

            <Step n="7" title="Start the import">
              Continue with the Xtream setup and start the import. Let GWS Online finish loading your channels, movies, series and guide data.
            </Step>

            <Step n="8" title="You are ready">
              Once the first sync finishes, open Live TV, Movies or Series and confirm everything is working normally.
            </Step>
          </div>

          <div className="band" style={{ marginTop: 40, textAlign: "left" }}>
            <h2>Already using Hush TiviMate?</h2>
            <p>Do not uninstall Hush yet. First copy your username, password and expiration date, then follow the migration guide.</p>
            <Link href="/hush-update" className="btn btn-primary">How to update from Hush TiviMate →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
