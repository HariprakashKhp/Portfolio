import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { profile, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <div className="container inner-page">
      <PageHeading eyebrow="About" title="The person behind the systems.">
        <p>
          {profile.headline}. Based in {profile.location}.
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
        </section>
        <div className="focus-stack">
          {skillGroups.map((area) => (
            <article key={area.title}>
              <h2>{area.title}</h2>
              <ul className="tags">
                {area.skills.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
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
    </div>
  );
}
