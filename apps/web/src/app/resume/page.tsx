import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { EmptyState } from "@/components/empty-state";
import { profile } from "@/data/portfolio";
import { ArrowIcon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Resume",
  alternates: { canonical: "/resume/" },
};

export default function ResumePage() {
  return (
    <div className="container inner-page">
      <PageHeading eyebrow="Resume" title="The professional overview.">
        <p>
          {profile.name} · {profile.headline}. Experience, skills, and education
          in one document.
        </p>
      </PageHeading>
      {profile.resumePath ? (
        <section
          className="resume-panel"
          aria-labelledby="resume-details-title"
        >
          <p className="eyebrow">{profile.location}</p>
          <h2 id="resume-details-title">{profile.currentRole}</h2>
          <p>
            {profile.employer} · {profile.experienceSummary}
          </p>
          <a
            className="action action--primary"
            href={profile.resumePath}
            download
          >
            Download resume ({profile.resumeFormat})<ArrowIcon />
          </a>
          <p className="download-note">
            {profile.resumeFormat === "DOCX"
              ? "Microsoft Word document"
              : "PDF document"}
          </p>
        </section>
      ) : (
        <EmptyState
          label="Document in preparation"
          title="The resume will be available here."
          href="/experience/"
          action="View experience"
        >
          <p>
            The reviewed PDF has not been added yet. Once ready, it will be
            available to read and download from this page.
          </p>
        </EmptyState>
      )}
    </div>
  );
}
