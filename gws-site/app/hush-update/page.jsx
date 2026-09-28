import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Customer Update — Great White Streams",
  description: "Great White Streams customer update and current three-app setup.",
};

export default function HushUpdatePage() {
  return (
    <>
      <Nav />
      <header className="hero" style={{minHeight:"auto",padding:"70px 0 46px"}}>
        <div className="caustics" />
        <div className="container" style={{position:"relative",zIndex:1,maxWidth:900}}>
          <span className="eyebrow">GREAT WHITE STREAMS · CUSTOMER UPDATE</span>
          <h1 style={{margin:"18px 0 14px"}}>Time to update your setup.</h1>
          <p className="hero-sub" style={{maxWidth:760}}>
            Great White Streams now uses our current three-app setup. Follow the new Install Guide for the easiest way to get your device up to date.
          </p>
          <div className="hero-cta">
            <Link href="/firestick-setup" className="btn btn-primary">Open Current Install Guide →</Link>
          </div>
        </div>
      </header>

      <section className="section-pad">
        <div className="container" style={{maxWidth:900}}>
          <div className="section-head">
            <span className="eyebrow">CURRENT SETUP</span>
            <h2>Three apps. Three simple jobs.</h2>
            <p>The Install Guide walks you through Downloader, Unknown Sources and all three current apps step by step.</p>
          </div>
          <div className="grid grid-3">
            <div className="card"><div className="ico">📺</div><h3>Waveo / Neighbourhood</h3><p>Your main paid Great White Streams service for live TV, sports, PPV, movies, series and VOD.</p></div>
            <div className="card"><div className="ico">▶️</div><h3>TizenTube</h3><p>Your YouTube option without the usual ad interruptions.</p></div>
            <div className="card"><div className="ico">🎬</div><h3>Stremio</h3><p>A free bonus while it works. It is separate from your paid Great White Streams service.</p></div>
          </div>

          <div className="band" style={{marginTop:34}}>
            <h2>Ready?</h2>
            <p>Use the current Install Guide. It will ask whether you are setting up fresh or updating an older setup and take you from there.</p>
            <Link href="/firestick-setup" className="btn btn-primary">Go to Install Guide →</Link>
          </div>

          <details style={{marginTop:34,padding:20,border:"1px solid var(--line)",borderRadius:14,color:"var(--muted)"}}>
            <summary style={{cursor:"pointer",fontWeight:800,color:"var(--foam)"}}>Legacy Hush-XC help</summary>
            <p style={{marginTop:14}}>A small number of existing customers may still temporarily use Hush-XC. If Great White Streams specifically told you to keep using it, contact support for the legacy instructions. New customers should use the current three-app setup above.</p>
          </details>
        </div>
      </section>
      <Footer />
    </>
  );
}
