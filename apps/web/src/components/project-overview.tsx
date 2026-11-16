import Link from "next/link";
import { projects } from "@/content/projects";
import { ActionLink } from "./action-link";
import { ArrowIcon } from "./icon";

export function ProjectOverview() {
  if (projects.length === 0) return null;

  return (
    <section
      className="profile-section project-overview"
      aria-labelledby="independent-projects-title"
    >
      <p className="eyebrow">Beyond employer work</p>
      <h2 id="independent-projects-title">Personal projects and evaluation.</h2>
      <p>
        Alongside my work at Odessa, I explore AWS deployment, agent-assisted
        debugging, and AI evaluation through personal projects and learning
        exercises.
      </p>
      <ul className="project-overview-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <div className="project-meta">
              <span>{project.context}</span>
              <span className="project-status">{project.status}</span>
            </div>
            <h3>
              <Link className="text-link" href={`/projects/${project.slug}/`}>
                {project.title}
                <ArrowIcon diagonal />
              </Link>
            </h3>
            <p>{project.summary}</p>
          </li>
        ))}
      </ul>
      <ActionLink href="/projects/" variant="text">
        Explore project notes and architectures
      </ActionLink>
    </section>
  );
}
