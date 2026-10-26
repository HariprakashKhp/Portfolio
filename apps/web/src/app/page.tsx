import { CliIntro } from "@/components/cli-intro";
import { ActionLink } from "@/components/action-link";
import { ArrowIcon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { focusAreas, impactHighlights, profile } from "@/data/portfolio";

export default function Home() {
  const name = profile.name ?? "Engineering";

  return (
    <div className="container">
      <section className="hero portrait-surface" aria-labelledby="hero-title">
        <div className="hero-copy">
          <CliIntro
            name={name}
            role={profile.currentRole.split(" — ")[0]}
            location={profile.location}
          />
          <h1 id="hero-title">
            Backend<br />engineering.<br /><span>Applied AI.</span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="actions">
            <ActionLink href="/experience/">View experience</ActionLink>
            <ActionLink href="/contact/" variant="secondary">Contact me</ActionLink>
          </div>
          <p className="hero-footnote">Architecture. Implementation. Evidence.</p>
        </div>
      </section>
      <section className="section impact-section" aria-labelledby="impact-title">
        <div className="section-heading">
          <p className="eyebrow">Selected impact</p>
          <h2 id="impact-title">Results from the systems I build.</h2>
          <p className="impact-intro">Highlights from my professional work at Odessa Solutions.</p>
        </div>
        <dl className="impact-grid">
          {impactHighlights.map((highlight) => (
            <div className="impact-item" key={highlight.title}>
              <dt>{highlight.title}</dt>
              <dd className="impact-value">{highlight.value}</dd>
              <dd className="impact-description">{highlight.description}</dd>
              <dd className="impact-context">{highlight.context}</dd>
            </div>
          ))}
        </dl>
        <ActionLink href="/experience/" variant="text">Read the experience behind these results</ActionLink>
      </section>
      <section className="focus-section section" aria-labelledby="focus-title">
        <div className="section-heading">
          <p className="eyebrow">Areas of focus</p>
          <h2 id="focus-title">From the service<br />to the intelligence.</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="focus-item">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="topic-list">
                {area.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      {projects.length > 0 ? (
        <section className="section work-section" aria-labelledby="work-title">
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">Project notebook</p>
              <h2 id="work-title">The thinking behind the work.</h2>
            </div>
            <ActionLink href="/projects/" variant="text">All projects</ActionLink>
          </div>
          <ProjectCard project={projects[0]} />
        </section>
      ) : (
        <aside className="project-note" aria-labelledby="work-title">
          <div>
            <h2 id="work-title">Project notebook</h2>
            <p>New case studies will be shared when the projects are ready.</p>
          </div>
          <ActionLink href="/projects/" variant="text">View projects</ActionLink>
        </aside>
      )}
      <section className="closing-section" aria-labelledby="connect-title">
        <p className="eyebrow">Get in touch</p>
        <h2 id="connect-title">Have a backend or AI problem to solve?</h2>
        <p>Get in touch about Python backend engineering, applied AI, or opportunities to work together.</p>
        <div className="actions">
          <ActionLink href="/contact/">Contact me</ActionLink>
          {profile.resumePath && (
            <a className="action action--secondary" href={profile.resumePath} download>
              Download resume ({profile.resumeFormat})<ArrowIcon />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
