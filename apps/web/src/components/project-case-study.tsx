import Link from "next/link";
import type { Project } from "@/content/projects";
import { PageHeading } from "@/components/page-heading";
import { ActionLink } from "@/components/action-link";
import { ProjectArchitecture } from "@/components/project-architecture";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container inner-page">
      <Link className="text-link back-link" href="/projects/">
        ← Back to projects
      </Link>
      <PageHeading eyebrow={project.context} title={project.title}>
        <p>{project.summary}</p>
      </PageHeading>
      <div className="content-note">
        <span className="project-status">{project.status}</span>
        <p>{project.statusNote}</p>
      </div>
      <ul className="tags case-tags" aria-label="Technologies">
        {project.stack.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <section
        className="case-architecture"
        id="architecture"
        aria-labelledby="architecture-title"
      >
        <h2 id="architecture-title">System architecture</h2>
        <ProjectArchitecture
          architecture={project.architecture}
          idPrefix={`${project.slug}-detail`}
        />
      </section>
      <div className="case-layout">
        <aside className="case-index">
          <p className="eyebrow">Project notes</p>
          <nav aria-label="Case study sections">
            <a href="#architecture">System architecture</a>
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
