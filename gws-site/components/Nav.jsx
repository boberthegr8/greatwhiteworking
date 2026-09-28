import Link from "next/link";
import AppIcon from "./AppIcon";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <AppIcon size={42} />
          <span>GWS<small>Great White Streams</small></span>
        </Link>
        <div className="nav-links">
          <Link href="/#features">What You Get</Link>
          <Link href="/#trial">Free Trial</Link>
          <Link href="/#install">Customer Help</Link>
          <Link href="/#contact">Support</Link>
        </div>
        <div className="nav-cta">
          <Link href="/admin" className="btn btn-ghost">Admin</Link>
          <Link href="/#trial" className="btn btn-primary">Free Trial</Link>
        </div>
      </div>
    </nav>
  );
}
