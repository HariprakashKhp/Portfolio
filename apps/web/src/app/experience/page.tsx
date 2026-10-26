import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { EmptyState } from "@/components/empty-state";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <div className="container inner-page">
      <PageHeading
        eyebrow="Experience"
        title="The work. The responsibility. The learning."
      >
        <p>
          {profile.experienceSummary}. Building enterprise finance and leasing
          systems at {profile.employer}.
        </p>
      </PageHeading>
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
    </div>
  );
}
