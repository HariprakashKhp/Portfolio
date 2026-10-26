import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { EmptyState } from "@/components/empty-state";
import { ArrowIcon } from "@/components/icon";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const links = [
    {
      label: "Email",
      href: profile.email ? `mailto:${profile.email}` : null,
      detail: profile.email,
    },
    {
      label: "GitHub",
      href: profile.github,
      detail: profile.github?.replace("https://", "") ?? null,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      detail: profile.linkedin?.replace("https://www.", "") ?? null,
    },
  ].filter(
    (link): link is { label: string; href: string; detail: string } =>
      !!link.href && !!link.detail,
  );
  return (
    <div className="container inner-page">
      <PageHeading eyebrow="Contact" title="Start a conversation.">
        <p>
          I’m based in {profile.location}. Get in touch about backend
          engineering, agentic AI, or opportunities to work together.
        </p>
      </PageHeading>
      {links.length ? (
        <ul className="contact-links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.detail}</small>
                </span>
                <ArrowIcon diagonal />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          label="Contact details in preparation"
          title="A direct way to connect, soon."
          href="/about/"
          action="Read about the engineer"
        >
          <p>
            Verified email and professional profile links will be added here.
            There is no contact form to submit at this stage.
          </p>
        </EmptyState>
      )}
    </div>
  );
}
