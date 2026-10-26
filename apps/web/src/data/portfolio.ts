export type FocusArea = {
  title: string;
  description: string;
  topics: readonly string[];
};

export type Experience = {
  employer: string;
  role: string;
  period: string;
  location: string;
  highlights: readonly string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type SkillGroup = {
  title: string;
  skills: readonly string[];
};

export type Profile = {
  name: string | null;
  headline: string;
  introduction: string;
  location: string;
  website: string;
  currentRole: string;
  employer: string;
  experienceSummary: string;
  biography: readonly string[];
  email: string | null;
  github: string | null;
  linkedin: string | null;
  resumePath: string | null;
  resumeFormat: "PDF" | "DOCX";
  experience: readonly Experience[];
  education: readonly Education[];
};

// Source: the owner-provided Hari_Prakash_K_Resume.docx, imported 2026-10-26.
// Keep individual delivery improvements and personal AWS work scoped correctly.
export const profile: Profile = {
  name: "Hari Prakash K",
  headline: "Senior Backend Engineer | Agentic AI | AWS",
  introduction:
    "I’m Hari, a Staff Engineer at Odessa Solutions in Bengaluru. I build Python backend services and agentic AI systems for finance and leasing, with 7+ years in engineering and 2+ years in agentic AI.",
  location: "Bengaluru, India",
  website: "https://hariprakash.in",
  currentRole: "Staff Engineer — AI and Backend Architecture",
  employer: "Odessa Solutions",
  experienceSummary: "7+ years in engineering · 2+ years in agentic AI",
  biography: [
    "I’m Hari Prakash K, a Staff Engineer at Odessa Solutions, based in Bengaluru. My work spans enterprise finance and leasing systems, Python/FastAPI microservices, SQL performance engineering, and agentic AI.",
    "Since joining Odessa in May 2019, I’ve progressed from Software Engineer to Senior Software Engineer and Staff Engineer. Today, I work on enterprise RAG, tool-calling agents, ticket triage, and backend architecture, alongside daily client conversations to clarify requirements.",
    "My AI work includes a LangGraph/LangChain multi-agent RAG platform serving approximately 1,000 users, hybrid retrieval, and contributions to golden datasets for RAGAS evaluation. I also work with local LLMs for PII checks and request-data validation.",
    "Alongside my employer work, I have hands-on AWS deployment experience through personal projects. My work combines backend architecture, practical AI integration, and AI-assisted development.",
  ],
  email: "hariprakash.khp@gmail.com",
  github: "https://github.com/HariprakashKhp",
  linkedin: "https://www.linkedin.com/in/hariprakash-k/",
  resumePath: "/resume/Hari_Prakash_K_Resume.pdf",
  resumeFormat: "PDF",
  experience: [
    {
      employer: "Odessa Solutions",
      role: "Staff Engineer — AI and Backend Architecture",
      period: "Apr 2024 – Present",
      location: "Bengaluru, India",
      highlights: [
        "Architected a LangGraph/LangChain multi-agent RAG platform serving approximately 1,000 users at 100 requests per minute, combining BM25 and vector retrieval for enterprise product intelligence; contributed golden datasets for RAGAS evaluation.",
        "Built autonomous ticket triage and root-cause analysis across 87+ Jira boards, using client-specific knowledge and MCP for SLA-driven updates and remediation recommendations.",
        "Implemented TTL cache refresh and CDC-triggered invalidation for Customer Portal reads, bypassed caching for account balances, and enabled multi-agent tool calling over shared Lessor/Payment APIs.",
        "Reduced token and cloud compute costs by 35% through containerized local/cloud LLM integration while supporting on-premises enterprise data requirements.",
        "Used local LLMs for PII checks and request-data validation before forwarding requests to frontier models.",
        "Cut my individual delivery time by approximately 80% using Claude Code and Codex CLI for parallel development, debugging, agent context management, and code review.",
        "Handle daily client calls to gather and clarify requirements, translating business needs into backend features and AI workflows.",
      ],
    },
    {
      employer: "Odessa Solutions",
      role: "Senior Software Engineer",
      period: "Apr 2021 – Apr 2024",
      location: "Bengaluru, India",
      highlights: [
        "Built Customer Portal FastAPI microservices for reporting, billing, transactions, and inquiries behind a CDN, API gateway, and WAF. Routed writes through Lessor/Payment APIs to the primary database and reads/reports to a CDC-enabled read database.",
        "Reduced API response latency by 30% with asynchronous Python/FastAPI services and SQLAlchemy connection pooling across high-volume data workloads.",
        "Led T-SQL tuning of indexed views and execution plans, improving stored procedure execution time by 40%.",
      ],
    },
    {
      employer: "Odessa Solutions",
      role: "Software Engineer",
      period: "May 2019 – Apr 2021",
      location: "Bengaluru, India",
      highlights: [
        "Built C#/SQL Server asset and invoice automation, reducing manual effort by 55%.",
        "Integrated CyberSource through SOAP services for automated billing.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E., Mechanical Engineering",
      institution: "St. Joseph’s College of Engineering",
      period: "2015 – 2019",
    },
    {
      degree: "MBA, Financial Management",
      institution: "Annamalai University",
      period: "2019 – 2021",
    },
  ],
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Backend & data",
    skills: [
      "Python",
      "FastAPI",
      "C#",
      "SQL Server",
      "REST/SOAP APIs",
      "Asynchronous processing",
      "SQLAlchemy connection pooling",
    ],
  },
  {
    title: "Agentic AI",
    skills: [
      "LangGraph",
      "LangChain",
      "CrewAI",
      "Hybrid RAG",
      "BM25",
      "MCP",
      "ChromaDB",
      "Milvus",
      "OpenAI",
      "Ollama",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "System design",
      "HLD",
      "LLD",
      "Microservices",
      "Read/write separation",
      "Change Data Capture",
      "API gateway",
      "WAF",
    ],
  },
  {
    title: "Cloud & delivery",
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "Langfuse",
      "LangSmith",
      "Claude Code",
      "Codex CLI",
    ],
  },
];

export const focusAreas: readonly FocusArea[] = [
  {
    title: "Backend systems",
    description:
      "Python/FastAPI services, SQL performance, and data flows for finance and leasing systems.",
    topics: ["Python", "FastAPI", "SQL Server"],
  },
  {
    title: "Applied AI",
    description:
      "Enterprise RAG, tool-calling agents, ticket triage, and retrieval evaluation.",
    topics: ["LangGraph", "Hybrid RAG", "MCP"],
  },
  {
    title: "Engineering practice",
    description:
      "Personal AWS deployments, containerized LLM integration, and AI-assisted development.",
    topics: ["AWS", "Docker", "Claude Code / Codex"],
  },
];

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/experience/", label: "Experience" },
  { href: "/projects/", label: "Projects" },
  { href: "/resume/", label: "Resume" },
  { href: "/contact/", label: "Contact" },
] as const;
