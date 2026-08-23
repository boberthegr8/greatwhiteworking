import Link from "next/link";
import AppIcon from "./AppIcon";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <AppIcon size={40} />
          <span>
            GWS
            <small>Great White Streams</small>
          </span>
        </Link>

        <div className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/install">Customer Setup</Link>
          <Link href="/#updates">Updates</Link>
          <Link href="/#trial">Free Trial</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className="nav-cta">
          <Link href="/admin" className="btn btn-ghost">
            Admin
          </Link>
          <Link href="/#trial" className="btn btn-primary">
            Start Trial
          </Link>
        </div>
      </div>
    </nav>
  );
}
