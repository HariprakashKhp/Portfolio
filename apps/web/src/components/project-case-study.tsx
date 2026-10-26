import Link from "next/link";
import type { Project } from "@/content/projects";
import { PageHeading } from "@/components/page-heading";
import { SystemFigure } from "@/components/system-figure";
import { ActionLink } from "@/components/action-link";

// Reuse this layout when the owner adds their first real project.
// The route wrapper is intentionally absent while the project list is empty.
export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container inner-page">
      <Link className="text-link back-link" href="/projects/">
        ← Back to projects
      </Link>
      <PageHeading eyebrow={project.context} title={project.title}>
        <p>{project.summary}</p>
      </PageHeading>
      {project.status === "draft" && (
        <div className="content-note">
          <span className="draft-label">Draft layout preview</span>
          <p>
            This page demonstrates the presentation only. It does not describe a
            completed project.
          </p>
        </div>
      )}
      <div className="case-layout">
        <aside className="case-index">
          <p className="eyebrow">In this case study</p>
          <nav aria-label="Case study sections">
            {project.sections.map((section, index) => (
              <a key={section.title} href={`#section-${index}`}>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <div className="case-content">
          {project.sections.map((section, index) => (
            <section id={`section-${index}`} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.title === "Architecture" &&
                project.status === "draft" && <SystemFigure compact />}
            </section>
          ))}
          {project.sourceUrl && (
            <ActionLink href={project.sourceUrl} variant="secondary">
              View source
            </ActionLink>
          )}
          {project.demoUrl && (
            <ActionLink href={project.demoUrl} variant="secondary">
              Open demo
            </ActionLink>
          )}
        </div>
      </div>
    </div>
  );
}
