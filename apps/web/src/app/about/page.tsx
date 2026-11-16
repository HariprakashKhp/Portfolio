import type { Metadata } from "next";
import { Fragment } from "react";
import { createPageMetadata } from "@/lib/metadata";
import { PageHeading } from "@/components/page-heading";
import { LearningSection } from "@/components/learning-section";
import { ActionLink } from "@/components/action-link";
import { ProjectOverview } from "@/components/project-overview";
import { profile, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  path: "/about/",
  description:
    "Meet Hari Prakash K: Staff Engineer at Odessa Solutions working on Python backends and agentic AI, with personal AWS, debugging, and evaluation projects.",
});

export default function About() {
  return (
    <div className="container inner-page about-page portrait-surface">
      <PageHeading
        eyebrow="About"
        title="Backend engineering. Applied AI. Ownership."
      >
        <p>
          {profile.currentRole} at {profile.employer}. Based in{" "}
          {profile.location}.
        </p>
      </PageHeading>
      <div className="about-grid">
        <section className="biography" aria-labelledby="background-title">
          <p className="eyebrow">Background</p>
          <h2 id="background-title">
            Python, enterprise systems, and applied AI.
          </h2>
          {profile.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {profile.problemSolving.introduction}{" "}
            {profile.problemSolving.profiles.map((site, index) => (
              <Fragment key={site.url}>
                {index > 0 ? " and " : null}
                <a className="inline-profile-link" href={site.url}>
                  {site.name}
                </a>
              </Fragment>
            ))}
            .
          </p>
          <ActionLink href="/experience/" variant="text">
            Read my experience and engineering outcomes
          </ActionLink>
        </section>
        <div className="focus-stack">
          {skillGroups.map((area) => (
            <article key={area.title}>
              <h2>{area.title}</h2>
              {area.description && <p>{area.description}</p>}
              <ul className="tags">
                {area.skills.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <ProjectOverview />
      <section className="profile-section" aria-labelledby="education-title">
        <p className="eyebrow">Education</p>
        <h2 id="education-title">Engineering and business.</h2>
        <div className="education-grid">
          {profile.education.map((item) => (
            <article key={item.degree}>
              <p className="eyebrow">{item.period}</p>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </section>
      <LearningSection />
    </div>
  );
}
