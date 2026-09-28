import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Shark from "@/components/Shark";
import TrialForm from "@/components/TrialForm";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const tg = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_URL || "#";

  return (
    <>
      <Nav />

      <header className="hero">
        <div className="caustics" />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">● GREAT WHITE STREAMS</span>
            <h1>Your TV. <span className="accent">Great White</span> simple.</h1>
            <p className="hero-sub">
              Live TV, sports, pay-per-view, movies, series and video on demand — one simple setup built for the way you watch.
            </p>
            <div className="hero-cta">
              <Link href="/#trial" className="btn btn-primary">Start a Free Trial →</Link>
              <Link href="/#features" className="btn btn-ghost">See what you get</Link>
            </div>
            <div className="hero-stats">
              <div className="stat"><strong>LIVE TV</strong><span>Channels you know</span></div>
              <div className="stat"><strong>SPORTS + PPV</strong><span>Big events in one place</span></div>
              <div className="stat"><strong>VOD</strong><span>Movies & series</span></div>
            </div>
          </div>
          <div className="shark-stage"><Shark /></div>
        </div>
      </header>

      <section id="features" className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Everything in one place</span>
            <h2>Turn your TV into the entertainment centre.</h2>
            <p>Simple access to the content you want, without juggling a pile of different services.</p>
          </div>
          <div className="grid grid-3">
            <div className="card"><div className="ico">📺</div><h3>Live TV</h3><p>Enjoy a familiar TV experience with live channels and an easy guide.</p></div>
            <div className="card"><div className="ico">🏒</div><h3>Sports</h3><p>Keep your live sports together so game night is easy.</p></div>
            <div className="card"><div className="ico">🥊</div><h3>Pay-Per-View</h3><p>Find major events without hunting through different apps.</p></div>
            <div className="card"><div className="ico">🎬</div><h3>Movies</h3><p>Browse movies on demand when you want something to watch.</p></div>
            <div className="card"><div className="ico">🍿</div><h3>TV Series</h3><p>Catch up on series and choose what you want, when you want it.</p></div>
            <div className="card"><div className="ico">💬</div><h3>Real Support</h3><p>Need help with your account or setup? Great White Streams support is here.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{paddingTop:0}}>
        <div className="container">
          <div className="band">
            <span className="eyebrow">GREAT WHITE SIMPLE</span>
            <h2 style={{marginTop:16}}>Watch more. Fuss less.</h2>
            <p>One straightforward setup for live TV, sports, movies, series and more.</p>
            <Link href="/#trial" className="btn btn-primary">Try Great White Streams →</Link>
          </div>
        </div>
      </section>

      <section id="trial" className="section-pad">
        <div className="container">
          <div className="grid grid-2" style={{alignItems:"center"}}>
            <div>
              <span className="eyebrow">Free trial</span>
              <h2 style={{fontSize:"clamp(28px,4vw,42px)",color:"var(--foam)",margin:"14px 0"}}>See if Great White is right for you.</h2>
              <p style={{color:"var(--muted)",marginBottom:18}}>Send your details and we&apos;ll get you set up with what you need to try the service.</p>
              <p style={{color:"var(--muted)"}}>Already a customer? Keep scrolling for setup and support.</p>
            </div>
            <TrialForm />
          </div>
        </div>
      </section>

      <section id="install" className="section-pad" style={{paddingTop:0}}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Already with Great White?</span>
            <h2>Customer setup & updates</h2>
            <p>This section is for existing customers. Choose what you need and we&apos;ll take you to the right instructions.</p>
          </div>
          <div className="action-tiles">
            <div className="tile">
              <span className="tag">NEW / CURRENT CUSTOMER</span>
              <h3>Are you setting up your device?</h3>
              <p>Use the customer Install Guide for the current Great White Streams setup and step-by-step device instructions.</p>
              <Link href="/firestick-setup" className="btn btn-primary">Open Install Guide →</Link>
            </div>
            <div className="tile">
              <span className="tag">EXISTING CUSTOMER</span>
              <h3>Are you updating an older setup?</h3>
              <p>If Great White Streams told you to update or move from an older app, use the update instructions.</p>
              <Link href="/hush-update" className="btn btn-ghost">Open Update Guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad" style={{paddingTop:0}}>
        <div className="container">
          <div className="grid grid-2" style={{alignItems:"center"}}>
            <ContactForm />
            <div>
              <span className="eyebrow">Support</span>
              <h2 style={{fontSize:"clamp(28px,4vw,42px)",color:"var(--foam)",margin:"14px 0"}}>Need a hand?</h2>
              <p style={{color:"var(--muted)",marginBottom:18}}>Already a customer and need help with your login, device or setup? Send us a message.</p>
              <p style={{color:"var(--muted)"}}>Prefer chat? <a href={tg} target="_blank" rel="noreferrer">Join us on Telegram →</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
