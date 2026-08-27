"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const APPS = [
  {
    name: "GWS Online",
    badge: "PRIMARY",
    code: "6818487",
    description: "Great White Streams' TV-first app and newest GWS interface.",
    downloadUrl: "https://github.com/boberthegr8/GreatWhiteTV-Own/releases/latest/download/GWSOnline.apk",
    notes: [
      "Install through Downloader with code 6818487.",
      "Use the customer's authorized GWS credentials when prompted.",
    ],
  },
  {
    name: "Hush-XC",
    badge: "RECOMMENDED XC",
    code: "1124386",
    description: "Recommended Xtream Codes player for stable username, password and server login.",
    notes: [
      "Downloader code: 1124386.",
      "Server / DNS: https://ottipdns.com",
      "Recover an existing Hush login at Settings → Playlists → Hush → Xtream Codes Parameters.",
    ],
  },
  {
    name: "Stremio",
    badge: "MEDIA",
    code: "8878594",
    description: "Stremio media app for Firestick and Android TV installations.",
    notes: [
      "Downloader code: 8878594.",
      "Sign in with the customer's own Stremio account.",
      "Only add sources or services the customer is authorized to access.",
    ],
  },
  {
    name: "Waveo",
    badge: "ALTERNATE",
    code: "9378234",
    description: "Alternate TV player for installations where its login flow fits the customer's setup.",
    notes: [
      "Downloader code: 9378234.",
      "If the required custom/server login fields are unavailable, use Hush-XC instead.",
    ],
  },
];

export default function FirestickSetupPage() {
  const [copied, setCopied] = useState("");

  async function copyValue(value, label) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(""), 1600);
    } catch {
      setCopied("");
    }
  }

  return (
    <>
      <Nav />

      <header className="hero" style={{ minHeight: "auto", paddingBottom: 54 }}>
        <div className="caustics" />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 72 }}>
          <span className="eyebrow">● GWS FIRESTICK SETUP</span>
          <h1 style={{ maxWidth: 900 }}>
            One place for every <span className="accent">Great White</span> app setup.
          </h1>
          <p className="hero-sub" style={{ maxWidth: 760 }}>
            Open Downloader on the Firestick, enter the code for the app you need, install it, then follow the setup notes below.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => copyValue("https://ottipdns.com", "dns")}> 
              {copied === "dns" ? "DNS copied" : "Copy Hush DNS"}
            </button>
            <Link href="/hush-update" className="btn btn-ghost">Hush-XC migration guide</Link>
          </div>
        </div>
      </header>

      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">App library</span>
            <h2>Choose the app. Enter the code.</h2>
            <p>These are the current Great White Streams setup options.</p>
          </div>

          <div className="grid grid-2">
            {APPS.map((app) => (
              <div className="card" key={app.name} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start" }}>
                  <div>
                    <span className="tag">{app.badge}</span>
                    <h3 style={{ marginTop: 12 }}>{app.name}</h3>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em" }}>Downloader</div>
                    <strong style={{ display: "block", color: "var(--foam)", fontSize: 27, letterSpacing: ".05em" }}>{app.code}</strong>
                  </div>
                </div>

                <p>{app.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <button className="btn btn-primary" onClick={() => copyValue(app.code, app.name)}>
                    {copied === app.name ? "Code copied" : "Copy code"}
                  </button>
                  {app.downloadUrl ? (
                    <a className="btn btn-ghost" href={app.downloadUrl}>Direct APK</a>
                  ) : null}
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 14 }}>
                  {app.notes.map((note) => (
                    <p key={note} style={{ margin: "7px 0", color: "var(--muted)", fontSize: 14 }}>• {note}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band">
            <h2>Moving a customer off the old Hush app?</h2>
            <p>Save the username, password and expiration date before removing anything. Keep the old app installed until Hush-XC is confirmed working.</p>
            <Link href="/hush-update" className="btn btn-primary">Open Hush-XC guide →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
