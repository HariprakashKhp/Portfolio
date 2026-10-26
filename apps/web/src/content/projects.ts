export type CaseStudySection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "draft" | "reviewed";
  context:
    | "Layout preview"
    | "Personal project"
    | "Professional work"
    | "Learning exercise";
  stack: readonly string[];
  sourceUrl?: string;
  demoUrl?: string;
  sections: readonly CaseStudySection[];
};

// Intentionally empty at the owner's request. Add projects when ready for review.
export const projects: readonly Project[] = [];
