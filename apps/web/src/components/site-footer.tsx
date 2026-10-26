import Link from "next/link";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <div>
        <p className="footer-title">
          {profile.name ?? "Engineering portfolio"}
        </p>
        <p>Backend systems. Applied AI. The details behind the work.</p>
      </div>
      <div className="footer-links">
        <Link href="/projects/">Explore projects</Link>
        <Link href="/contact/">Contact</Link>
      </div>
    </footer>
  );
}
