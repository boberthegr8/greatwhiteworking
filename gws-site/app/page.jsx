import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Shark from "@/components/Shark";
import TrialForm from "@/components/TrialForm";
import ContactForm from "@/components/ContactForm";
import { prisma } from "@/lib/db";
import { syncTelegramUpdates } from "@/lib/telegram";

export const dynamic = "force-dynamic";

async function getUpdates() {
  try {
    // Best-effort: pull any new Hush + Pure Vision posts from Telegram first.
    await syncTelegramUpdates();
    const all = await prisma.update.findMany({
      orderBy: { createdAt: "desc" },
      take: 30,
    });
    return {
      hush: all.filter((u) => u.source === "Hush").slice(0, 8),
      pv: all.filter((u) => u.source === "Pure Vision").slice(0, 8),
    };
  } catch {
    // DB not ready yet (e.g. first build) — render empty feeds gracefully.
    return { hush: [], pv: [] };
  }
}

function fmt(d) {
  return new Date(d).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Feed({ title, pillClass, items, emptyHint }) {
  return (
    <div className="feed">
      <div className="feed-head">
        <h3>{title}</h3>
        <span className={`src-pill ${pillClass}`}>via Telegram</span>
      </div>
      <div className="feed-list">
        {items.length === 0 ? (
          <div className="feed-empty">{emptyHint}</div>
        ) : (
          items.map((u) => (
            <div className="feed-item" key={u.id}>
              <h4>{u.title}</h4>
              {u.body ? <p>{u.body}</p> : null}
              <time>{fmt(u.createdAt)}</time>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default async function Home() {
  const updates = await getUpdates();
  const tg = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_URL || "#";

  return (
    <>
      <Nav />

      {/* ── HERO ───────────────────────────────────────── */}
      <header className="hero">
        <div className="caustics" />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">● Apex-tier streaming</span>
            <h1>
              Dive into <span className="accent">Great White</span> Streams
            </h1>
            <p className="hero-sub">
              Crystal-clear channels, rock-solid uptime, and a setup so smooth
              it&apos;s almost predatory. Powered by Hush and Pure Vision —
              GWS keeps you locked on the action.
            </p>
            <div className="hero-cta">
              <Link href="#trial" className="btn btn-primary">
                Start your free trial →
              </Link>
              <Link href="/install" className="btn btn-ghost">
                Install Hush
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>99.9%</strong>
                <span>Server uptime</span>
              </div>
              <div className="stat">
                <strong>4K</strong>
                <span>Ultra HD ready</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Support &amp; updates</span>
              </div>
            </div>
          </div>
          <div className="shark-stage">
            <Shark />
          </div>
        </div>
      </header>

      {/* ── FEATURES ───────────────────────────────────── */}
      <section id="features" className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why GWS</span>
            <h2>Built to hunt buffering into extinction</h2>
            <p>
              Everything you need to set up, stream, and stay updated — across
              both of our premium services.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="ico">⚡</div>
              <h3>Blazing servers</h3>
              <p>
                Load-balanced, high-bandwidth infrastructure tuned for live
                sports and 4K without the stutter.
              </p>
            </div>
            <div className="card">
              <div className="ico">🛠️</div>
              <h3>Painless setup</h3>
              <p>
                Step-by-step guides for Hush and TiviMate. Get running in
                minutes on Firestick, Android TV, and more.
              </p>
            </div>
            <div className="card">
              <div className="ico">🔔</div>
              <h3>Live status updates</h3>
              <p>
                Real-time Hush and Pure Vision announcements, pulled straight
                from our update channels to this page.
              </p>
            </div>
            <div className="card">
              <div className="ico">🎟️</div>
              <h3>Free trials</h3>
              <p>
                Try before you commit. Request a trial and we&apos;ll get you
                set up fast.
              </p>
            </div>
            <div className="card">
              <div className="ico">💬</div>
              <h3>Real support</h3>
              <p>
                Reach us by email or hop into the Telegram chat. Real humans,
                quick answers.
              </p>
            </div>
            <div className="card">
              <div className="ico">🦈</div>
              <h3>Two apex services</h3>
              <p>
                Hush and Pure Vision under one roof — pick the pod that fits
                your devices and your viewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTION TILES ───────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="action-tiles">
            <div className="tile">
              <span className="tag">Setup</span>
              <h3>Install Hush</h3>
              <p>
                Fresh install on a new device? Follow the guided walkthrough to
                get Hush up and running cleanly.
              </p>
              <Link href="/install" className="btn btn-primary">
                Open install guide →
              </Link>
            </div>
            <div className="tile">
              <span className="tag">Troubleshoot</span>
              <h3>Fix TiviMate (Hush)</h3>
              <p>
                Playlist not loading or EPG acting up? Run through the TiviMate
                fix steps to get back to streaming.
              </p>
              <Link href="/install#tivimate" className="btn btn-ghost">
                Fix TiviMate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPDATES ────────────────────────────────────── */}
      <section id="updates" className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Status &amp; announcements</span>
            <h2>Live updates panel</h2>
            <p>
              Hush and Pure Vision updates sync automatically from our Telegram
              channels. Always know what&apos;s happening.
            </p>
          </div>
          <div className="updates-wrap">
            <Feed
              title="🦈 Hush"
              pillClass="src-hush"
              items={updates.hush}
              emptyHint="No Hush updates yet. New Telegram posts will appear here automatically."
            />
            <Feed
              title="🌊 Pure Vision"
              pillClass="src-pv"
              items={updates.pv}
              emptyHint="No Pure Vision updates yet. New Telegram posts will appear here automatically."
            />
          </div>
          <div style={{ textAlign: "center", marginTop: 26 }}>
            <a
              href={tg}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              💬 Join the Telegram chat
            </a>
          </div>
        </div>
      </section>

      {/* ── TRIAL ──────────────────────────────────────── */}
      <section id="trial" className="section-pad">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <span className="eyebrow">Free trial</span>
              <h2
                style={{
                  fontSize: "clamp(28px,4vw,42px)",
                  color: "var(--foam)",
                  margin: "14px 0 14px",
                }}
              >
                Test the waters, no strings
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>
                Drop your details and we&apos;ll provision a trial and email you
                the login plus setup steps. Every request lands in our inbox
                instantly — and in the admin dashboard for tracking.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Already a member and need help?{" "}
                <Link href="#contact">Contact us →</Link>
              </p>
            </div>
            <TrialForm />
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <section id="contact" className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <ContactForm />
            <div>
              <span className="eyebrow">Contact</span>
              <h2
                style={{
                  fontSize: "clamp(28px,4vw,42px)",
                  color: "var(--foam)",
                  margin: "14px 0 14px",
                }}
              >
                Talk to a real human
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>
                Questions about plans, devices, or your account? Send a message
                and it goes straight to our email. We usually reply same day.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Prefer chat?{" "}
                <a href={tg} target="_blank" rel="noreferrer">
                  Join us on Telegram →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band">
            <h2>Ready to join the pod?</h2>
            <p>
              Start a free trial today and see why GWS members don&apos;t go
              back to the shallow end.
            </p>
            <Link href="#trial" className="btn btn-primary">
              Start free trial →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Shark from "@/components/Shark";
import TrialForm from "@/components/TrialForm";
import ContactForm from "@/components/ContactForm";
import { prisma } from "@/lib/db";
import { syncTelegramUpdates } from "@/lib/telegram";

export const dynamic = "force-dynamic";

async function getUpdates() {
  try {
    // Best-effort: pull any new Pure Vision posts from Telegram first.
    await syncTelegramUpdates();
    const all = await prisma.update.findMany({
      orderBy: { createdAt: "desc" },
      take: 30,
    });
    return {
      hush: all.filter((u) => u.source === "Hush").slice(0, 8),
      pv: all.filter((u) => u.source === "Pure Vision").slice(0, 8),
    };
  } catch {
    // DB not ready yet (e.g. first build) — render empty feeds gracefully.
    return { hush: [], pv: [] };
  }
}

function fmt(d) {
  return new Date(d).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Feed({ title, pillClass, items, emptyHint }) {
  return (
    <div className="feed">
      <div className="feed-head">
        <h3>{title}</h3>
        <span className={`src-pill ${pillClass}`}>
          {pillClass === "src-hush" ? "via Circle" : "via Telegram"}
        </span>
      </div>
      <div className="feed-list">
        {items.length === 0 ? (
          <div className="feed-empty">{emptyHint}</div>
        ) : (
          items.map((u) => (
            <div className="feed-item" key={u.id}>
              <h4>{u.title}</h4>
              {u.body ? <p>{u.body}</p> : null}
              <time>{fmt(u.createdAt)}</time>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default async function Home() {
  const updates = await getUpdates();
  const tg = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_URL || "#";

  return (
    <>
      <Nav />

      {/* ── HERO ───────────────────────────────────────── */}
      <header className="hero">
        <div className="caustics" />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">● Apex-tier streaming</span>
            <h1>
              Dive into <span className="accent">Great White</span> Streams
            </h1>
            <p className="hero-sub">
              Crystal-clear channels, rock-solid uptime, and a setup so smooth
              it&apos;s almost predatory. Powered by Hush and Pure Vision —
              GWS keeps you locked on the action.
            </p>
            <div className="hero-cta">
              <Link href="#trial" className="btn btn-primary">
                Start your free trial →
              </Link>
              <Link href="/install" className="btn btn-ghost">
                Install Hush
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>99.9%</strong>
                <span>Server uptime</span>
              </div>
              <div className="stat">
                <strong>4K</strong>
                <span>Ultra HD ready</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Support &amp; updates</span>
              </div>
            </div>
          </div>
          <div className="shark-stage">
            <Shark />
          </div>
        </div>
      </header>

      {/* ── FEATURES ───────────────────────────────────── */}
      <section id="features" className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why GWS</span>
            <h2>Built to hunt buffering into extinction</h2>
            <p>
              Everything you need to set up, stream, and stay updated — across
              both of our premium services.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="ico">⚡</div>
              <h3>Blazing servers</h3>
              <p>
                Load-balanced, high-bandwidth infrastructure tuned for live
                sports and 4K without the stutter.
              </p>
            </div>
            <div className="card">
              <div className="ico">🛠️</div>
              <h3>Painless setup</h3>
              <p>
                Step-by-step guides for Hush and TiviMate. Get running in
                minutes on Firestick, Android TV, and more.
              </p>
            </div>
            <div className="card">
              <div className="ico">🔔</div>
              <h3>Live status updates</h3>
              <p>
                Real-time Hush and Pure Vision announcements, pulled straight
                from our update channels to this page.
              </p>
            </div>
            <div className="card">
              <div className="ico">🎟️</div>
              <h3>Free trials</h3>
              <p>
                Try before you commit. Request a trial and we&apos;ll get you
                set up fast.
              </p>
            </div>
            <div className="card">
              <div className="ico">💬</div>
              <h3>Real support</h3>
              <p>
                Reach us by email or hop into the Telegram chat. Real humans,
                quick answers.
              </p>
            </div>
            <div className="card">
              <div className="ico">🦈</div>
              <h3>Two apex services</h3>
              <p>
                Hush and Pure Vision under one roof — pick the pod that fits
                your devices and your viewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTION TILES ───────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="action-tiles">
            <div className="tile">
              <span className="tag">Setup</span>
              <h3>Install Hush</h3>
              <p>
                Fresh install on a new device? Follow the guided walkthrough to
                get Hush up and running cleanly.
              </p>
              <Link href="/install" className="btn btn-primary">
                Open install guide →
              </Link>
            </div>
            <div className="tile">
              <span className="tag">Troubleshoot</span>
              <h3>Fix TiviMate (Hush)</h3>
              <p>
                Playlist not loading or EPG acting up? Run through the TiviMate
                fix steps to get back to streaming.
              </p>
              <Link href="/install#tivimate" className="btn btn-ghost">
                Fix TiviMate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPDATES ────────────────────────────────────── */}
      <section id="updates" className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Status &amp; announcements</span>
            <h2>Live updates panel</h2>
            <p>
              Hush updates relay from Circle; Pure Vision updates sync from
              Telegram. Always know what&apos;s happening.
            </p>
          </div>
          <div className="updates-wrap">
            <Feed
              title="🦈 Hush"
              pillClass="src-hush"
              items={updates.hush}
              emptyHint="No Hush updates yet. New posts relayed from Circle will appear here."
            />
            <Feed
              title="🌊 Pure Vision"
              pillClass="src-pv"
              items={updates.pv}
              emptyHint="No Pure Vision updates yet. New Telegram posts will appear here automatically."
            />
          </div>
          <div style={{ textAlign: "center", marginTop: 26 }}>
            <a
              href={tg}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              💬 Join the Telegram chat
            </a>
          </div>
        </div>
      </section>

      {/* ── TRIAL ──────────────────────────────────────── */}
      <section id="trial" className="section-pad">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <span className="eyebrow">Free trial</span>
              <h2
                style={{
                  fontSize: "clamp(28px,4vw,42px)",
                  color: "var(--foam)",
                  margin: "14px 0 14px",
                }}
              >
                Test the waters, no strings
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>
                Drop your details and we&apos;ll provision a trial and email you
                the login plus setup steps. Every request lands in our inbox
                instantly — and in the admin dashboard for tracking.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Already a member and need help?{" "}
                <Link href="#contact">Contact us →</Link>
              </p>
            </div>
            <TrialForm />
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────── */}
      <section id="contact" className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <ContactForm />
            <div>
              <span className="eyebrow">Contact</span>
              <h2
                style={{
                  fontSize: "clamp(28px,4vw,42px)",
                  color: "var(--foam)",
                  margin: "14px 0 14px",
                }}
              >
                Talk to a real human
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>
                Questions about plans, devices, or your account? Send a message
                and it goes straight to our email. We usually reply same day.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Prefer chat?{" "}
                <a href={tg} target="_blank" rel="noreferrer">
                  Join us on Telegram →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="band">
            <h2>Ready to join the pod?</h2>
            <p>
              Start a free trial today and see why GWS members don&apos;t go
              back to the shallow end.
            </p>
            <Link href="#trial" className="btn btn-primary">
              Start free trial →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
