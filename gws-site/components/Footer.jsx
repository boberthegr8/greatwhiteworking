import Link from "next/link";
import AppIcon from "./AppIcon";

export default function Footer() {
  const tg = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_URL || "#";
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="foot-inner">
          <div style={{ maxWidth: 320 }}>
            <Link href="/" className="brand">
              <AppIcon size={42} />
              <span>
                GWS
                <small>Great White Streams</small>
              </span>
            </Link>
            <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 16 }}>
              Great White Streams apps, installation guides and customer support.
            </p>
          </div>

          <div className="foot-links">
            <div className="foot-col">
              <h5>Setup</h5>
              <Link href="/gws-online">How to install GWS Online</Link>
              <Link href="/hush-update">How to update from Hush TiviMate</Link>
            </div>
            <div className="foot-col">
              <h5>Get Started</h5>
              <Link href="/#trial">Free Trial</Link>
              <Link href="/#contact">Support</Link>
              <a href={tg} target="_blank" rel="noreferrer">
                Telegram Chat
              </a>
            </div>
            <div className="foot-col">
              <h5>Members</h5>
              <Link href="/admin">Admin Panel</Link>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {year} Great White Streams. All rights reserved.</span>
          <span>Stream responsibly · Licensed content only</span>
        </div>
      </div>
    </footer>
  );
}
