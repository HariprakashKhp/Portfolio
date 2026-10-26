import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowIcon } from "./icon";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-visual" aria-hidden="true">
        <div className="blueprint-frame">
          <span>Problem</span>
          <i />
          <span className="blueprint-core">Architecture</span>
          <i />
          <span>Evidence</span>
        </div>
        <span className="blueprint-caption">CONTEXT → DECISIONS → OUTCOME</span>
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.context}</span>
          {project.status === "draft" && (
            <span className="draft-label">Draft</span>
          )}
        </div>
        <h3>
          <Link href={`/projects/${project.slug}/`}>
            {project.title}
            <ArrowIcon diagonal />
          </Link>
        </h3>
        <p>{project.summary}</p>
        {project.stack.length > 0 && (
          <ul className="tags" aria-label="Technologies">
            {project.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <Link className="text-link" href={`/projects/${project.slug}/`}>
          {project.status === "draft"
            ? "View case study layout"
            : "Read case study"}
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
