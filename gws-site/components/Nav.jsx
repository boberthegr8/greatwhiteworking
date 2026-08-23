import Link from "next/link";
import AppIcon from "./AppIcon";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <AppIcon size={42} />
          <span>
            GWS
            <small>Great White Streams</small>
          </span>
        </Link>

        <div className="nav-links">
          <Link href="/gws-online">How to install GWS Online</Link>
          <Link href="/hush-update">How to update from Hush TiviMate</Link>
          <Link href="/#trial">Free Trial</Link>
          <Link href="/#contact">Support</Link>
        </div>

        <div className="nav-cta">
          <Link href="/admin" className="btn btn-ghost">
            Admin
          </Link>
          <Link href="/gws-online" className="btn btn-primary">
            Install GWS Online
          </Link>
        </div>
      </div>
    </nav>
  );
}
