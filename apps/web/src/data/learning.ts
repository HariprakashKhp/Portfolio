export type Course = {
  title: string;
  provider: string;
  completedOn?: string;
  summary?: string;
  certificateUrl?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  issuedOn: string;
  expiresOn?: string;
  credentialUrl?: string;
};

// Owner-confirmed learning platforms. Specific course details will follow.
export const learningPlatforms = ["Udemy", "LinkedIn Learning", "Coursera"] as const;

// Add only owner-confirmed completed courses and earned certifications here.
// Dates use readable labels, such as "October 2026". Omit unavailable links.
export const courses: readonly Course[] = [];
export const certifications: readonly Certification[] = [];

// A learning intention, separate from earned credentials; no exam is selected yet.
export const certificationPlan =
  "AWS and AI certifications are on my learning roadmap. I’ll share earned credentials here as I complete them.";
