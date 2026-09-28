"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const APPS = [
  {
    step: "1",
    name: "Waveo / Neighbourhood",
    code: "9378234",
    color: "var(--cyan)",
    label: "MAIN SERVICE — START HERE",
    description: "This is the paid Great White Streams service — the one you're paying for. Use it for Live TV, sports, pay-per-view, movies, TV series and video on demand.",
    best: "TV • SPORTS • PPV • MOVIES • SERIES",
  },
  {
    step: "2",
    name: "TizenTube",
    code: "6366500",
    color: "#b45be3",
    label: "YOUTUBE WITHOUT THE ADS",
    description: "TizenTube is the YouTube option included in this setup. Open it when you want to watch YouTube without the usual ad interruptions.",
    best: "YOUTUBE",
  },
  {
    step: "3",
    name: "Stremio",
    code: "8878594",
    color: "var(--ok)",
    label: "FREE BONUS — USE IT WHILE YOU CAN",
    description: "Stremio is installed FREE as a bonus. It is not part of what you are paying Great White Streams for. Treat it as temporary: GWS expects this setup to eventually stop working or change.",
    best: "FREE BONUS • USE IT WHILE YOU CAN",
  },
];

const installSteps = [
  ["Open Downloader", "From the Fire TV home screen, open the Downloader app. If Downloader is not installed, search for Downloader in the Amazon Appstore and install it first."],
  ["Enter the Downloader code", "Select the URL/code box in Downloader, type the code shown for the app, then select Go. Wait for the download page or APK download to begin."],
  ["Install the app", "When the Android installer appears, choose Install. Wait for the installation to finish, then choose Done. You can delete the downloaded APK when Downloader asks — the installed app stays on the device."],
  ["Repeat for all three apps", "Install Waveo / Neighbourhood first, then TizenTube, then Stremio. When finished, return to the Fire TV Apps screen and open each app once."],
];

export default function FirestickSetupPage() {
  const [copied, setCopied] = useState("");

  async function copyCode(code, name) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(name);
      setTimeout(() => setCopied(""), 1500);
    } catch {}
  }

  return (
    <>
      <Nav />

      <header className="hero" style={{ minHeight: "auto", paddingBottom: 52 }}>
        <div className="caustics" />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 62 }}>
          <span className="eyebrow">● GREAT WHITE STREAMS SETUP</span>
          <h1 style={{ maxWidth: 900 }}>
            Your complete <span className="accent">3-app streaming setup.</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 760 }}>
            Three apps. Three jobs. We use Downloader for all three. Follow this guide from top to bottom and your device will be ready to go.
          </p>
          <div className="hero-stats">
            <div className="stat"><strong>1</strong><span>Waveo / Neighbourhood</span></div>
            <div className="stat"><strong>2</strong><span>TizenTube</span></div>
            <div className="stat"><strong>3</strong><span>Stremio</span></div>
          </div>
        </div>
      </header>

      <section className="section-pad" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="container">
          <div className="band" style={{ textAlign: "left", borderColor: "rgba(255,206,90,.45)", background: "linear-gradient(150deg, rgba(90,62,10,.28), rgba(8,18,38,.85))" }}>
            <span className="eyebrow" style={{ color: "var(--warn)" }}>BEFORE YOU START</span>
            <h2 style={{ marginTop: 16 }}>Coming from Hush or PureVision? Start clean.</h2>
            <p style={{ marginLeft: 0, maxWidth: 780 }}>
              We recommend a full factory reset before installing this new three-app setup. It clears out the old IPTV apps, settings and leftover files so you are starting from a clean device. <strong style={{ color: "var(--foam)" }}>A factory reset erases apps, accounts and local settings</strong>, so make sure you know your Amazon login and save anything you need first.
            </p>
            <p style={{ marginLeft: 0, maxWidth: 780, marginBottom: 0 }}>
              Fire TV: <strong style={{ color: "var(--foam)" }}>Settings → My Fire TV → Reset to Factory Defaults → Reset.</strong> After the Firestick restarts, complete the normal Amazon setup, install Downloader, then return to this guide.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingBottom: 34 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">STEP ZERO</span>
            <h2>Allow Downloader to install apps.</h2>
            <p>Fire TV blocks apps from outside the Amazon Appstore until you give Downloader permission.</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <div className="ico">⚙️</div>
              <h3>Enable Unknown Sources</h3>
              <p><strong style={{ color: "var(--foam)" }}>Settings → My Fire TV → Developer Options → Install Unknown Apps → Downloader → ON.</strong></p>
              <p>On some Fire TV versions the wording may be <strong style={{ color: "var(--foam)" }}>Apps from Unknown Sources</strong>. Turn it on for Downloader.</p>
            </div>
            <div className="card">
              <div className="ico">🔓</div>
              <h3>Developer Options missing?</h3>
              <p>Go to <strong style={{ color: "var(--foam)" }}>Settings → My Fire TV → About</strong>. Highlight the name of your Fire TV device and press the centre/select button on the remote <strong style={{ color: "var(--foam)" }}>7 times</strong>.</p>
              <p>Go back one screen. Developer Options should now appear. Open it and allow Downloader.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 34 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">YOUR 3 APPS</span>
            <h2>Install them in this order.</h2>
            <p>Open Downloader for each app and enter the code exactly as shown.</p>
          </div>

          <div className="grid grid-3">
            {APPS.map((app) => (
              <div className="card" key={app.name} style={{ display: "flex", flexDirection: "column", borderTop: `4px solid ${app.color}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "center" }}>
                  <span style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", background: app.color, color: "#03101f", fontWeight: 900, fontSize: 20 }}>{app.step}</span>
                  <span className="tag" style={{ color: app.color }}>{app.label}</span>
                </div>
                <h3 style={{ fontSize: 24, marginTop: 20 }}>{app.name}</h3>
                <p style={{ flex: 1 }}>{app.description}</p>
                <div style={{ margin: "12px 0 16px", padding: 18, borderRadius: 14, background: "rgba(3,6,15,.55)", border: "1px solid var(--line)" }}>
                  <span style={{ display: "block", color: "var(--faint)", fontSize: 11, fontWeight: 800, letterSpacing: ".12em" }}>DOWNLOADER CODE</span>
                  <strong style={{ display: "block", color: app.color, fontSize: 32, letterSpacing: ".06em", marginTop: 4 }}>{app.code}</strong>
                </div>
                <button className="btn btn-primary btn-block" onClick={() => copyCode(app.code, app.name)}>
                  {copied === app.name ? "Code copied" : "Copy Downloader code"}
                </button>
                <div style={{ marginTop: 16, fontSize: 12, fontWeight: 800, color: app.color, letterSpacing: ".05em" }}>BEST FOR: {app.best}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">INSTALLATION SOP</span>
            <h2>Downloader: step by step.</h2>
            <p>Use the same process for each of the three apps.</p>
          </div>
          <div className="grid grid-2">
            {installSteps.map(([title, body], index) => (
              <div className="card" key={title}>
                <div className="ico">{index + 1}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band" style={{ textAlign: "left", borderColor: "rgba(52,226,176,.38)" }}>
            <span className="eyebrow" style={{ color: "var(--ok)" }}>IMPORTANT — STREMIO</span>
            <h2 style={{ marginTop: 16 }}>Stremio is a free bonus. It will not last forever.</h2>
            <p style={{ marginLeft: 0, maxWidth: 820 }}>
              You are <strong style={{ color: "var(--foam)" }}>not paying for Stremio</strong>. It is installed free as an extra because it works well right now. GWS expects this setup to eventually stop working or change, so enjoy it while it is available. If Stremio stops working in the future, that does not mean your paid Waveo / Neighbourhood service is down.
            </p>
            <p style={{ marginLeft: 0, maxWidth: 820, marginBottom: 0 }}>
              When using Stremio, choose the title you want and then choose an available source you are authorized to access. Availability can vary.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">EASY WAY TO REMEMBER IT</span>
            <h2>Three apps. Three jobs.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card"><h3>📺 Waveo</h3><p><strong style={{ color: "var(--cyan)" }}>EVERYTHING.</strong><br />Your paid TV service: live TV, sports, PPV, movies, series and VOD.</p></div>
            <div className="card"><h3>▶️ TizenTube</h3><p><strong style={{ color: "#b45be3" }}>YOUTUBE.</strong><br />Your simple YouTube option without the usual ad interruptions.</p></div>
            <div className="card"><h3>🎬 Stremio</h3><p><strong style={{ color: "var(--ok)" }}>FREE BONUS.</strong><br />Use it while you can. It is separate from the paid GWS service.</p></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
