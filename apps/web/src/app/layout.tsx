import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: `${profile.name} — Senior Backend Engineer & Agentic AI`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name}, ${profile.currentRole} at ${profile.employer}. Python, FastAPI, enterprise RAG, and agentic AI. Based in ${profile.location}.`,
  alternates: { canonical: "/" },
  // Static HTML is generated separately for production and preview deployments.
  robots: { index: process.env.ALLOW_INDEXING === "true", follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <style>{`@media (max-width: 768px) { .navigation[data-open="false"] nav { display: grid; } .navigation .menu-toggle { display: none; } }`}</style>
        </noscript>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
