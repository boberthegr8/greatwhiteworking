import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Customer Setup — GWS TV & Waveo",
  description:
    "Step-by-step setup for Great White Streams customers moving from Hush to GWS TV and Waveo.",
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
        <div
          style={{
            color: "var(--muted)",
            fontSize: "14.5px",
            lineHeight: 1.65,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function CodeBox({ label, value }) {
  return (
    <div
      style={{
        marginTop: 14,
        padding: "16px 20px",
        borderRadius: 12,
        border: "1px solid var(--line-strong)",
        background: "rgba(4, 11, 24, 0.6)",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 27,
          fontWeight: 800,
          color: "var(--cyan)",
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
          <span className="eyebrow">Customer setup</span>
          <h1
            style={{
              fontSize: "clamp(34px,5vw,56px)",
              margin: "18px 0 14px",
            }}
          >
            Moving from Hush to GWS TV &amp; Waveo
          </h1>
          <p className="hero-sub" style={{ maxWidth: 720 }}>
            Before installing anything, save your Hush account information.
            You will use the same username and password in the new apps.
          </p>
          <div className="hero-cta">
            <a href="#save-login" className="btn btn-primary">
              Start here — save your login
            </a>
            <a href="#waveo" className="btn btn-ghost">
              Jump to Waveo
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
              borderColor: "rgba(255, 206, 90, 0.45)",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              Important — do this first
            </span>
            <h2>Do not remove Hush yet</h2>
            <p>
              Keep Hush installed until you have copied your username,
              password and expiration date and confirmed the new apps are
              working.
            </p>
          </div>

          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">Step 1</span>
            <h2>Get your login information from Hush</h2>
            <p>
              Follow these steps exactly. Take a photo of the information or
              write it down somewhere safe.
            </p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Hush">
              Open the <strong>Hush</strong> app on your current device.
            </Step>
            <Step n="2" title="Open Settings">
              From the Hush menu, open <strong>Settings</strong>.
            </Step>
            <Step n="3" title="Open Playlists">
              Select <strong>Playlists</strong>, then open your playlist named
              <strong> Hush</strong>.
            </Step>
            <Step n="4" title="Find Xtream Codes Parameters">
              Scroll down until you see <strong>Xtream Codes Parameters</strong>.
            </Step>
            <Step n="5" title="Save these three items">
              Write down or photograph your <strong>Username</strong>,
              <strong> Password</strong>, and <strong>Expiration Date</strong>.
              You will need the username and password when setting up the new
              apps. The expiration date is useful for confirming you are on the
              correct account.
            </Step>
          </div>

          <div
            className="card"
            style={{ marginTop: 18, borderColor: "rgba(56, 214, 255, 0.32)" }}
          >
            <h3 style={{ marginBottom: 10 }}>What you should have before continuing</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              ✓ Username &nbsp;&nbsp; ✓ Password &nbsp;&nbsp; ✓ Expiration Date
            </p>
            <p style={{ marginBottom: 0, color: "var(--muted)" }}>
              For your security, do not enter those credentials on this
              website. Only enter them directly into the GWS TV or Waveo app.
            </p>
          </div>
        </div>
      </section>

      <section id="gws-tv" className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">App 1</span>
            <h2>Great White Streams TV</h2>
            <p>
              Install the GWS TV app using the current GWS Downloader code
              supplied by Great White Streams. Keep the Hush login information
              you saved above handy.
            </p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Downloader">
              Open the <strong>Downloader</strong> app on your Fire TV, Android
              TV or Google TV device.
            </Step>
            <Step n="2" title="Install Great White Streams TV">
              Enter the current <strong>GWS TV Downloader code</strong> supplied
              by Great White Streams, download the app, then choose
              <strong> Install</strong>.
            </Step>
            <Step n="3" title="Add your TV service">
              Open GWS TV and choose an <strong>Xtream</strong> source when you
              are asked to add your service. Use the GWS server address supplied
              with your setup, then enter the same <strong>username</strong> and
              <strong> password</strong> you saved from Hush.
            </Step>
            <Step n="4" title="Let the app finish loading">
              Allow the first channel, movie, series and guide sync to finish
              before judging the app. The first load can take longer than a
              normal startup.
            </Step>
          </div>
        </div>
      </section>

      <section id="waveo" className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">App 2</span>
            <h2>Install &amp; log into Waveo</h2>
            <p>
              The important part here is choosing <strong>Custom</strong> at
              login. Do not select Hush.
            </p>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Open Downloader">
              Launch the <strong>Downloader</strong> app.
            </Step>
            <Step n="2" title="Download Waveo">
              Enter this Downloader code exactly, choose <strong>Go</strong>,
              then install Waveo.
              <CodeBox label="Waveo Downloader code" value="9378234" />
            </Step>
            <Step n="3" title="Choose Custom — not Hush">
              When the Waveo login screen opens, select
              <strong> CUSTOM</strong>. Do <strong>not</strong> choose Hush.
            </Step>
            <Step n="4" title="Enter the GWS server / DNS">
              Enter this address exactly:
              <CodeBox label="DNS / Server" value="https://ottidns.com" />
            </Step>
            <Step n="5" title="Enter your saved Hush login">
              Enter the exact <strong>username</strong> and
              <strong> password</strong> you copied from Hush. Watch for extra
              spaces and remember that passwords are case-sensitive.
            </Step>
            <Step n="6" title="Log in and verify">
              Select <strong>Login</strong> and let Waveo finish loading. Once
              inside, confirm your service works normally. Keep your saved
              expiration date for reference.
            </Step>
          </div>

          <div className="band" style={{ marginTop: 40 }}>
            <h2>Waveo login not working?</h2>
            <p>
              Check the three most common problems first: Waveo is set to
              <strong> Custom</strong>, the server is exactly
              <strong> https://ottidns.com</strong>, and your username/password
              match Hush with no extra spaces.
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
