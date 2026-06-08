import Link from "next/link";
import FinLogo from "./FinLogo";

export default function Footer() {
  const tg = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_URL || "#";
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="foot-inner">
          <div style={{ maxWidth: 320 }}>
            <Link href="/" className="brand">
              <FinLogo />
              <span>
                GWS
                <small>Great White Streams</small>
              </span>
            </Link>
            <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 16 }}>
              Premium streaming, apex performance. Built for Hush and Pure
              Vision members.
            </p>
          </div>

          <div className="foot-links">
            <div className="foot-col">
              <h5>Product</h5>
              <Link href="/#features">Features</Link>
              <Link href="/install">Install Hush</Link>
              <Link href="/install#tivimate">Fix TiviMate</Link>
              <Link href="/#updates">Updates</Link>
            </div>
            <div className="foot-col">
              <h5>Get Started</h5>
              <Link href="/#trial">Free Trial</Link>
              <Link href="/#contact">Contact</Link>
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
