import { ActionLink } from "@/components/action-link";
import {
  certificationPlan,
  certifications,
  courses,
  currentStudies,
  type Course,
} from "@/data/learning";

function CourseList({
  items,
  status,
}: {
  items: readonly Course[];
  status: "Completed" | "In progress";
}) {
  return (
    <ul className="learning-list">
      {items.map((course) => (
        <li key={`${course.provider}-${course.title}`}>
          <h4>
            {course.courseUrl ? (
              <a href={course.courseUrl}>{course.title}</a>
            ) : (
              course.title
            )}
          </h4>
          <p className="learning-meta">
            {course.provider} · {status}
            {course.completedOn && ` ${course.completedOn}`}
          </p>
          {course.summary && <p>{course.summary}</p>}
          {course.certificateUrl && (
            <ActionLink href={course.certificateUrl} variant="text">
              View completion certificate
            </ActionLink>
          )}
        </li>
      ))}
    </ul>
  );
}

export function LearningSection() {
  const aiCourses = courses.filter(
    (course) => course.category === "AI engineering",
  );
  const webCourses = courses.filter(
    (course) => course.category === "Web development",
  );

  return (
    <section className="profile-section" aria-labelledby="learning-title">
      <p className="eyebrow">Continuous learning</p>
      <h2 id="learning-title">Courses &amp; certifications.</h2>
      <div className="learning-grid">
        <article className="learning-panel" aria-labelledby="ai-courses-title">
          <h3 id="ai-courses-title">Completed AI courses &amp; programs</h3>
          <CourseList items={aiCourses} status="Completed" />
        </article>
        <div className="learning-stack">
          <article
            className="learning-panel"
            aria-labelledby="web-courses-title"
          >
            <h3 id="web-courses-title">Completed web development courses</h3>
            <CourseList items={webCourses} status="Completed" />
          </article>
          <article
            className="learning-panel"
            aria-labelledby="current-studies-title"
          >
            <h3 id="current-studies-title">Currently learning</h3>
            <CourseList items={currentStudies} status="In progress" />
          </article>
        </div>
      </div>
      {certifications.length > 0 && (
        <article
          className="learning-panel credential-panel"
          aria-labelledby="certifications-title"
        >
          <h3 id="certifications-title">Earned credentials</h3>
          <ul className="learning-list">
            {certifications.map((certification) => (
              <li key={`${certification.issuer}-${certification.title}`}>
                <h4>{certification.title}</h4>
                <p className="learning-meta">
                  {certification.issuer} · Issued {certification.issuedOn}
                  {certification.expiresOn &&
                    ` · Expires ${certification.expiresOn}`}
                </p>
                {certification.credentialUrl && (
                  <ActionLink href={certification.credentialUrl} variant="text">
                    View credential
                  </ActionLink>
                )}
              </li>
            ))}
          </ul>
        </article>
      )}
      <p className="learning-note">
        <span className="learning-plan-label">Planned</span> {certificationPlan}
      </p>
    </section>
  );
}
