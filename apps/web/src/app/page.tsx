import { CliIntro } from "@/components/cli-intro";
import { ActionLink } from "@/components/action-link";
import { ProjectCard } from "@/components/project-card";
import { SystemFigure } from "@/components/system-figure";
import { EmptyState } from "@/components/empty-state";
import { projects } from "@/content/projects";
import { focusAreas, profile } from "@/data/portfolio";

export default function Home() {
  const name = profile.name ?? "Engineering";

  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <CliIntro
            name={name}
            role={profile.currentRole.split(" — ")[0]}
            location={profile.location}
          />
          <h1 id="hero-title">
            Backend
            <br />
            engineering.
            <br />
            <span>Applied AI.</span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="actions">
            <ActionLink href="/projects/">Explore projects</ActionLink>
            <ActionLink href="/about/" variant="secondary">
              About the engineer
            </ActionLink>
          </div>
          <p className="hero-footnote">
            Architecture. Implementation. Evidence.
          </p>
        </div>
        <SystemFigure />
      </section>
      <section className="focus-section section" aria-labelledby="focus-title">
        <div className="section-heading">
          <p className="eyebrow">Areas of focus</p>
          <h2 id="focus-title">
            From the service
            <br />
            to the intelligence.
          </h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="focus-item">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="topic-list">
                {area.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section work-section" aria-labelledby="work-title">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">Project notebook</p>
            <h2 id="work-title">The thinking behind the work.</h2>
          </div>
          <ActionLink href="/projects/" variant="text">
            All projects
          </ActionLink>
        </div>
        {projects.length > 0 ? (
          <ProjectCard project={projects[0]} />
        ) : (
          <EmptyState
            label="In progress"
            title="New projects are taking shape."
          >
            <p>
              I’m working on new projects. Case studies and links will be added
              here when they’re ready.
            </p>
          </EmptyState>
        )}
      </section>
      <section className="closing-section">
        <p className="eyebrow">Beyond the code</p>
        <h2>
          A little context
          <br />
          goes a long way.
        </h2>
        <p>
          Explore the background, experience, and decisions that give the work
          its shape.
        </p>
        <ActionLink href="/experience/" variant="secondary">
          Explore experience
        </ActionLink>
      </section>
    </div>
  );
}
