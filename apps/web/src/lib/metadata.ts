import type { Metadata } from "next";
import { profile } from "@/data/portfolio";

export const siteTitle = `${profile.name} - Senior Backend Engineer & Agentic AI`;
export const siteDescription = `${profile.name}, ${profile.currentRole} at ${profile.employer}. Python, FastAPI, enterprise RAG, and agentic AI. Based in ${profile.location}.`;

// Pages sets these during its build. A preview cannot opt into indexing by
// accidentally inheriting ALLOW_INDEXING=true from the production environment.
const onCloudflarePages = process.env.CF_PAGES === "1";
const productionBranch = process.env.PRODUCTION_BRANCH || "main";
export const allowIndexing =
  process.env.ALLOW_INDEXING === "true" &&
  (!onCloudflarePages || process.env.CF_PAGES_BRANCH === productionBranch);

export function createPageMetadata({
  title,
  path,
  description = siteDescription,
}: {
  title?: string;
  path: string;
  description?: string;
}): Metadata {
  const shareTitle = title ? `${title} | ${profile.name}` : siteTitle;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: profile.name ?? "Engineering portfolio",
      title: shareTitle,
      description,
      url: new URL(path, profile.website).href,
      images: [{
        url: new URL("/social/portfolio-card.png", profile.website).href,
        width: 1200,
        height: 630,
        alt: `${profile.name} - Backend engineering and applied AI - hariprakash.in`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [new URL("/social/portfolio-card.png", profile.website).href],
    },
  };
}
