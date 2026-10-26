import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { PageHeading } from "@/components/page-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { EmptyState } from "@/components/empty-state";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  path: "/projects/",
  description:
    "Explore Twin on AWS, BugFixer in progress, and a DeepEval lab for agent and RAG evaluation by Hari Prakash K.",
});

export default function ProjectsPage() {
  return (
    <div className="container inner-page">
      <PageHeading
        eyebrow="Project notebook"
        title="More than the finished result."
      >
        <p>
          Personal projects and evaluation experiments, with implementation
          notes, source code, and a clear view of what is still in progress.
        </p>
      </PageHeading>
      {projects.length > 0 ? (
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      ) : (
        <EmptyState
          label="In progress"
          title="New projects are on the way."
          href="/experience/"
          action="View experience"
        >
          <p>
            I’m working on a few projects and will share the case studies,
            implementation details, and links when they’re ready.
          </p>
        </EmptyState>
      )}
    </div>
  );
}
