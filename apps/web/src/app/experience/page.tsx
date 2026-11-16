import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { PageHeading } from "@/components/page-heading";
import { EmptyState } from "@/components/empty-state";
import { ImpactHighlights } from "@/components/impact-highlights";
import { ProjectOverview } from "@/components/project-overview";
import { profile, professionalArchitecture } from "@/data/portfolio";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  path: "/experience/",
  description:
    "Hari Prakash K’s progression at Odessa Solutions: Python backend performance, enterprise RAG, agentic AI, client ownership, and separate personal evaluation projects.",
});

export default function ExperiencePage() {
  return (
    <div className="container inner-page">
      <PageHeading
        eyebrow="Experience"
        title="From enterprise backends to agentic AI."
      >
        <p>
          {profile.currentRole} at {profile.employer}.{" "}
          {profile.experienceSummary}.
        </p>
        <p>
          Building finance and leasing systems, from Python/FastAPI services
          and SQL performance to enterprise RAG and tool-calling agents.
          I independently lead client calls and own delivery decisions, and
          have travelled to client locations for forward-deployed engineering work.
        </p>
      </PageHeading>
      <section aria-labelledby="experience-impact-title">
        <div className="section-heading">
          <p className="eyebrow">Selected impact · {profile.employer}</p>
          <h2 id="experience-impact-title">
            Backend performance and AI efficiency.
          </h2>
          <p className="impact-intro">
            Outcomes from my professional work, with the role behind each result.
          </p>
        </div>
        <ImpactHighlights />
      </section>
      {profile.experience.length ? (
        <div className="experience-list">
          {profile.experience.map((role) => (
            <article key={`${role.employer}-${role.period}`}>
              <p className="eyebrow">{role.period}</p>
              <h2>{role.role}</h2>
              <p className="role-meta">
                {role.employer} · {role.location}
              </p>
              <ul>
                {role.highlights.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          label="Experience in preparation"
          title="The career story is being put together."
          href="/projects/"
          action="Explore the project notebook"
        >
          <p>
            Verified roles, dates, responsibilities, and achievements will
            appear here once reviewed.
          </p>
        </EmptyState>
      )}
      <section
        className="profile-section work-architecture"
        aria-labelledby="work-architecture-title"
      >
        <p className="eyebrow">
          {professionalArchitecture.employer} · Selected work
        </p>
        <h2 id="work-architecture-title">{professionalArchitecture.title}</h2>
        <p>{professionalArchitecture.summary}</p>
        <ul>
          {professionalArchitecture.areas.map((area) => (
            <li key={area.title}>
              <strong>{area.title}.</strong> {area.description}
            </li>
          ))}
        </ul>
      </section>
      <section
        className="profile-section professional-development"
        aria-labelledby="development-title"
      >
        <p className="eyebrow">Professional development</p>
        <h2 id="development-title">System design and problem solving.</h2>
        <div className="development-copy">
          {profile.professionalDevelopment.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </section>
      <ProjectOverview />
    </div>
  );
}
