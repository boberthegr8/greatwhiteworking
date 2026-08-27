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
          <Link href="/firestick-setup">Firestick Setup</Link>
          <Link href="/hush-update">Hush-XC Setup</Link>
          <Link href="/gws-online">GWS Online</Link>
          <Link href="/#trial">Free Trial</Link>
          <Link href="/#contact">Support</Link>
        </div>

        <div className="nav-cta">
          <Link href="/admin" className="btn btn-ghost">
            Admin
          </Link>
          <Link href="/firestick-setup" className="btn btn-primary">
            App Setup
          </Link>
        </div>
      </div>
    </nav>
  );
}
