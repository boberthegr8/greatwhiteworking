"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const apps = [
  { n: 4, name: "Waveo / Neighbourhood", code: "9378234", color: "var(--cyan)", use: "YOUR PAID TV SERVICE", detail: "Live TV • Sports • PPV • Movies • Series • VOD", note: "This is the main Great White Streams app — the service you are paying for." },
  { n: 5, name: "TizenTube", code: "6366500", color: "#b45be3", use: "YOUTUBE", detail: "YouTube without the usual ad interruptions", note: "Open TizenTube whenever you want to watch YouTube." },
  { n: 6, name: "Stremio", code: "8878594", color: "var(--ok)", use: "FREE BONUS", detail: "Use it while you can", note: "FREE extra. You are NOT paying for Stremio. It will eventually stop working or change." },
];

function Step({ number, title, children, color = "var(--cyan)" }) {
  return (
    <div className="card" style={{ marginBottom: 18, borderLeft: `5px solid ${color}`, padding: 28 }}>
      <div style={{ display:"flex", gap:18, alignItems:"flex-start" }}>
        <div style={{ minWidth:48, height:48, borderRadius:"50%", display:"grid", placeItems:"center", background:color, color:"#03101f", fontWeight:900, fontSize:22 }}>{number}</div>
        <div style={{ flex:1 }}><h3 style={{ fontSize:24, marginBottom:10 }}>{title}</h3>{children}</div>
      </div>
    </div>
  );
}

export default function FirestickSetupPage() {
  const [oldUser, setOldUser] = useState(null);
  const [copied, setCopied] = useState("");

  async function copy(code, name) {
    try { await navigator.clipboard.writeText(code); setCopied(name); setTimeout(()=>setCopied(""),1400); } catch {}
  }

  return (
    <>
      <Nav />
      <header className="hero" style={{ minHeight:"auto", padding:"68px 0 38px" }}>
        <div className="caustics" />
        <div className="container" style={{ position:"relative", zIndex:1, textAlign:"center" }}>
          <span className="eyebrow">GREAT WHITE STREAMS</span>
          <h1 style={{ maxWidth:900, margin:"20px auto 14px" }}>Set up your Firestick.<br/><span className="accent">Just follow the numbers.</span></h1>
          <p className="hero-sub" style={{ margin:"0 auto", maxWidth:680 }}>Do each step in order. Don't skip ahead.</p>
        </div>
      </header>

      <main className="section-pad" style={{ paddingTop:24 }}>
        <div className="container" style={{ maxWidth:900 }}>
          <div className="band" style={{ padding:32, marginBottom:28 }}>
            <span className="eyebrow" style={{ color:"var(--warn)" }}>START HERE</span>
            <h2 style={{ marginTop:15 }}>Were you using Hush or PureVision on this device?</h2>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", marginTop:22 }}>
              <button className="btn btn-primary" style={{ minWidth:170 }} onClick={()=>setOldUser(true)}>YES</button>
              <button className="btn btn-ghost" style={{ minWidth:170 }} onClick={()=>setOldUser(false)}>NO</button>
            </div>
          </div>

          {oldUser === true && (
            <div className="band" style={{ textAlign:"left", padding:30, marginBottom:28, borderColor:"rgba(255,206,90,.5)" }}>
              <h2>⚠️ Factory reset first</h2>
              <p style={{ marginLeft:0, maxWidth:"none" }}>We recommend starting clean. <strong style={{color:"var(--foam)"}}>This erases your apps, accounts and settings.</strong> Make sure you know your Amazon login first.</p>
              <p style={{ marginLeft:0, maxWidth:"none", marginBottom:0 }}><strong style={{color:"var(--warn)"}}>Settings → My Fire TV → Reset to Factory Defaults → Reset</strong></p>
              <p style={{ marginLeft:0, maxWidth:"none", marginBottom:0 }}>After setup finishes, come back here and continue with Step 1.</p>
            </div>
          )}

          {oldUser !== null && (
            <>
              <Step number="1" title="Install Downloader">
                <p>On the Firestick home screen, search for <strong style={{color:"var(--foam)"}}>Downloader</strong>. Install the orange Downloader app from the Amazon Appstore, then open it.</p>
              </Step>

              <Step number="2" title="Turn on Unknown Sources">
                <p><strong style={{color:"var(--foam)"}}>Settings → My Fire TV → Developer Options → Install Unknown Apps → Downloader → ON</strong></p>
                <div style={{ padding:16, borderRadius:12, background:"rgba(255,206,90,.08)", border:"1px solid rgba(255,206,90,.25)", marginTop:12 }}>
                  <strong style={{color:"var(--warn)"}}>DON'T SEE DEVELOPER OPTIONS?</strong>
                  <p style={{marginBottom:0}}>Go to <strong>Settings → My Fire TV → About</strong>. Highlight your Fire TV device name and press the centre/select button <strong>7 times</strong>. Go back one screen.</p>
                </div>
              </Step>

              <Step number="3" title="Open Downloader">
                <p>Open Downloader. Click the big address/code box on the Home screen. You will type the three codes below one at a time.</p>
              </Step>

              {apps.map(app => (
                <Step key={app.name} number={app.n} title={`Install ${app.name}`} color={app.color}>
                  <div style={{ padding:20, borderRadius:14, background:"rgba(3,6,15,.65)", border:"1px solid var(--line)", margin:"12px 0" }}>
                    <div style={{fontSize:12, fontWeight:800, letterSpacing:".12em", color:"var(--faint)"}}>TYPE THIS INTO DOWNLOADER</div>
                    <div style={{fontSize:"clamp(38px,9vw,58px)", lineHeight:1.1, fontWeight:900, letterSpacing:".06em", color:app.color, margin:"8px 0"}}>{app.code}</div>
                    <button className="btn btn-primary" onClick={()=>copy(app.code,app.name)}>{copied===app.name ? "COPIED ✓" : `COPY ${app.code}`}</button>
                  </div>
                  <p><strong style={{color:app.color}}>{app.use}:</strong> {app.detail}</p>
                  <p>{app.note}</p>
                  <div style={{padding:14,borderRadius:10,background:"rgba(56,214,255,.06)"}}>
                    <strong style={{color:"var(--foam)"}}>When installation finishes:</strong> choose <strong>DONE</strong>. If Downloader asks to delete the APK, choose <strong>DELETE → DELETE</strong>. Then come back to Downloader for the next code.
                  </div>
                </Step>
              ))}

              <div className="band" style={{ marginTop:30, marginBottom:28 }}>
                <span className="eyebrow">✓ FINISHED</span>
                <h2 style={{marginTop:15}}>That's it. You're ready.</h2>
                <p style={{maxWidth:700}}>Go to your Firestick Apps screen. Open each app once. If you can't see an app, select the Apps icon and choose <strong>My Apps</strong> / <strong>See All</strong>.</p>
              </div>

              <div className="grid grid-3" style={{marginBottom:28}}>
                <div className="card"><h3>📺 Want TV?</h3><p><strong style={{color:"var(--cyan)"}}>OPEN WAVEO</strong><br/>Live TV, sports, PPV, movies, series and VOD.</p></div>
                <div className="card"><h3>▶️ Want YouTube?</h3><p><strong style={{color:"#b45be3"}}>OPEN TIZENTUBE</strong><br/>Your YouTube app.</p></div>
                <div className="card"><h3>🎬 Want the free extra?</h3><p><strong style={{color:"var(--ok)"}}>OPEN STREMIO</strong><br/>Free bonus. Use it while it works.</p></div>
              </div>

              <div className="band" style={{textAlign:"left", borderColor:"rgba(255,206,90,.5)", marginBottom:28}}>
                <span className="eyebrow" style={{color:"var(--warn)"}}>⚠ STREMIO — PLEASE READ</span>
                <h2 style={{marginTop:15}}>Stremio WILL eventually stop working or change.</h2>
                <p style={{marginLeft:0,maxWidth:"none"}}><strong style={{color:"var(--foam)"}}>You are NOT paying for Stremio.</strong> We installed it FREE because it works well right now. Enjoy it while it works. If Stremio stops working later, your paid Great White Streams service is still Waveo / Neighbourhood.</p>
              </div>

              <div className="band" style={{textAlign:"left"}}>
                <span className="eyebrow">I'M STUCK</span>
                <h2 style={{marginTop:15}}>Quick fixes</h2>
                <p style={{marginLeft:0,maxWidth:"none"}}><strong style={{color:"var(--foam)"}}>No Developer Options?</strong> My Fire TV → About → highlight device name → press Select 7 times.</p>
                <p style={{marginLeft:0,maxWidth:"none"}}><strong style={{color:"var(--foam)"}}>Downloader won't install?</strong> Recheck Step 2 and make sure Downloader is ON under Install Unknown Apps.</p>
                <p style={{marginLeft:0,maxWidth:"none"}}><strong style={{color:"var(--foam)"}}>Code didn't work?</strong> Check the number and try it again. Do not add spaces.</p>
                <p style={{marginLeft:0,maxWidth:"none",marginBottom:0}}><strong style={{color:"var(--foam)"}}>Can't find the app?</strong> Open the Apps icon → My Apps / See All and look near the bottom.</p>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
