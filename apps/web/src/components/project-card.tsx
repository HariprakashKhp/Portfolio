import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowIcon } from "./icon";
import { ProjectArchitecture } from "./project-architecture";

export function ProjectCard({
  project,
  headingLevel = 2,
}: {
  project: Project;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="project-card">
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.context}</span>
          <span className="project-status">{project.status}</span>
        </div>
        <Heading>
          <Link href={`/projects/${project.slug}/`}>
            {project.title}
            <ArrowIcon diagonal />
          </Link>
        </Heading>
        <p>{project.summary}</p>
        {project.stack.length > 0 && (
          <ul className="tags" aria-label="Technologies">
            {project.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <Link className="text-link" href={`/projects/${project.slug}/`}>
          Read project notes
          <ArrowIcon />
        </Link>
      </div>
      <ProjectArchitecture
        architecture={project.architecture}
        idPrefix={`${project.slug}-card`}
      />
    </article>
  );
}
