export type Course = {
  title: string;
  provider: string;
  category: "AI engineering" | "Web development" | "Cloud & DevOps";
  courseUrl?: string;
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

// Status supplied by the owner on 2026-10-26; public pages establish titles.
export const learningPlatforms = [
  "Udemy",
  "LinkedIn Learning",
  "Coursera",
] as const;

// Add only owner-confirmed completed courses and earned certifications here.
// Dates use readable labels, such as "October 2026". Omit unavailable links.
export const courses: readonly Course[] = [
  {
    title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
    provider: "Udemy",
    category: "AI engineering",
    courseUrl:
      "https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/",
  },
  {
    title: "AI Coder: Complete Claude Code & Coding Agents Course",
    provider: "Udemy",
    category: "AI engineering",
    courseUrl:
      "https://www.udemy.com/course/ai-coder-from-vibe-coder-to-agentic-engineer/",
  },
  {
    title: "AI Engineer Production Track: Deploy LLMs & Agents at Scale",
    provider: "Udemy",
    category: "AI engineering",
    courseUrl:
      "https://www.udemy.com/course/generative-and-agentic-ai-in-production/",
  },
  {
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    provider: "Udemy",
    category: "AI engineering",
    courseUrl:
      "https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/",
  },
  {
    title: "Testing AI Systems with DeepEval: AI Agents, Chatbots & RAG",
    provider: "Udemy",
    category: "AI engineering",
    courseUrl: "https://www.udemy.com/course/rag-llm-evaluation-ai-test/",
  },
  {
    title: "IBM RAG and Agentic AI Professional Certificate",
    provider: "IBM · Coursera",
    category: "AI engineering",
    summary: "Completed professional certificate program.",
    courseUrl:
      "https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai",
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    provider: "Udemy",
    category: "Web development",
    courseUrl:
      "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    title: "The Complete JavaScript Course: From Zero to Expert!",
    provider: "Udemy",
    category: "Web development",
    courseUrl: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
];

export const currentStudies: readonly Course[] = [
  {
    title: "Decoding DevOps – From Basics to Advanced Projects with AI",
    provider: "Udemy",
    category: "Cloud & DevOps",
    courseUrl: "https://www.udemy.com/course/decodingdevops/",
  },
  {
    title: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain",
    provider: "Udemy",
    category: "Cloud & DevOps",
    courseUrl: "https://www.udemy.com/course/docker-mastery/",
  },
  {
    title: "AWS coursework",
    provider: "Udemy",
    category: "Cloud & DevOps",
    // The supplied My Courses list requires login. Omit that URL and unknown titles.
  },
];

// No credential URL, issue date, or certification award was supplied.
// The IBM program above records completed learning, not an exam credential.
export const certifications: readonly Certification[] = [];

// A learning intention, separate from earned credentials; no exam is selected yet.
export const certificationPlan =
  "Further AWS and AI certifications are on my learning roadmap.";
