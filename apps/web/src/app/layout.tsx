import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/portfolio";
import { allowIndexing, createPageMetadata, siteTitle } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  ...createPageMetadata({ path: "/" }),
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  robots: { index: allowIndexing, follow: true },
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
