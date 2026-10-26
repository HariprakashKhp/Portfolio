import { ActionLink } from "@/components/action-link";
import {
  certificationPlan,
  certifications,
  courses,
  learningPlatforms,
} from "@/data/learning";

export function LearningSection() {
  const hasEntries = courses.length > 0 || certifications.length > 0;
  return (
    <section className="profile-section" aria-labelledby="learning-title">
      <p className="eyebrow">Continuous learning</p>
      <h2 id="learning-title">Courses &amp; certifications.</h2>
      {hasEntries ? (
        <div className="learning-grid">
          <article className="learning-panel" aria-labelledby="courses-title">
            <h3 id="courses-title">Online courses</h3>
            <ul className="tags" aria-label="Learning platforms">
              {learningPlatforms.map((platform) => (
                <li key={platform}>{platform}</li>
              ))}
            </ul>
            {courses.length > 0 ? (
              <ul className="learning-list">
                {courses.map((course) => (
                  <li key={`${course.provider}-${course.title}`}>
                    <h4>{course.title}</h4>
                    <p className="learning-meta">
                      {course.provider}
                      {course.completedOn && ` · Completed ${course.completedOn}`}
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
            ) : (
              <p className="learning-note">
                Course details and completion certificates will be added here soon.
              </p>
            )}
          </article>
          <article className="learning-panel" aria-labelledby="certifications-title">
            <h3 id="certifications-title">Certifications</h3>
            {certifications.length > 0 ? (
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
            ) : (
              <>
                <p className="eyebrow learning-plan-label">Planned learning</p>
                <p className="learning-note">{certificationPlan}</p>
              </>
            )}
          </article>
        </div>
      ) : (
        <div className="learning-overview">
          <p>
            Online learning through {learningPlatforms.join(", ")}. Course details
            will follow.
          </p>
          <p>
            <span className="learning-plan-label">Planned</span>{" "}
            {certificationPlan}
          </p>
        </div>
      )}
    </section>
  );
}
