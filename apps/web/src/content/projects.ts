import {
  projectArchitectures,
  type ProjectArchitecture,
} from "./project-architectures";

export type CaseStudySection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "Prototype" | "In progress" | "Evaluation lab";
  statusNote: string;
  architecture: ProjectArchitecture;
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

// Owner-selected projects. Descriptions reflect public source, not live validation.
export const projects: readonly Project[] = [
  {
    slug: "twin",
    title: "Twin — AI digital twin on AWS",
    summary:
      "A personal AI chat prototype that answers from profile context and conversation history, with a FastAPI backend and Terraform-defined AWS infrastructure.",
    status: "Prototype",
    statusNote:
      "Personal prototype. The repository includes application code and deployment configuration; a currently running demo is not linked.",
    context: "Personal project",
    architecture: projectArchitectures.twin,
    stack: [
      "Python",
      "FastAPI",
      "Amazon Bedrock",
      "AWS Lambda",
      "S3",
      "Terraform",
      "Next.js",
    ],
    sourceUrl: "https://github.com/HariprakashKhp/twin",
    sections: [
      {
        title: "Purpose",
        body: "Explore how an AI assistant can answer questions about my professional background using supplied profile information. This personal project brings a conversational interface, a Python API, and AWS deployment configuration together.",
      },
      {
        title: "Architecture",
        body: "A Next.js chat interface calls a FastAPI backend. The backend builds a prompt from profile facts, summary notes, communication style, and LinkedIn content, then calls Amazon Bedrock with recent conversation history. Conversations can be stored in local JSON files or S3. Terraform defines Lambda, API Gateway, S3, and CloudFront resources, with GitHub Actions deployment workflows in the repository.",
      },
      {
        title: "Engineering decisions",
        body: "Profile information is supplied directly in the prompt rather than retrieved from a vector database. A session identifier connects each exchange to stored conversation history, and the model input is limited to the most recent 50 messages. Local storage supports development while the S3 option supports the AWS deployment path.",
      },
      {
        title: "Status and limitations",
        body: "This is a prototype, separate from my employer work. Source code shows the application and infrastructure design; it does not establish current deployment health, answer accuracy, or production usage. Session access controls, narrower IAM permissions, and a repeatable answer-quality evaluation are areas for further work.",
      },
    ],
  },
  {
    slug: "bugfixer",
    title: "BugFixer",
    summary:
      "An agent-assisted debugging project using LangGraph, filesystem tools through MCP, and a pytest tool to investigate a codebase and suggest fixes.",
    status: "In progress",
    statusNote:
      "In progress. The current implementation connects code inspection and test execution; a demonstrated repair workflow is still being developed.",
    context: "Personal project",
    architecture: projectArchitectures.bugfixer,
    stack: ["Python", "LangGraph", "OpenAI", "MCP", "pytest"],
    sourceUrl: "https://github.com/HariprakashKhp/BugFixer",
    sections: [
      {
        title: "Purpose",
        body: "Explore an agent workflow that uses code and test output to explain bugs and propose fixes. The aim is to make a diagnosis traceable to the files inspected and the failures observed.",
      },
      {
        title: "Current implementation",
        body: "The entry point loads filesystem tools from an MCP client and adds a tool for running pytest in the configured codebase. A LangGraph workflow alternates between an OpenAI model and tool execution, then prints the conversation. The current request asks the agent to find a bug, explain it, and suggest a fix.",
      },
      {
        title: "Test feedback",
        body: "The pytest tool captures subprocess output and applies a 60-second timeout. This gives the agent test feedback to inspect during its investigation. Tool integration is the current foundation; it is not evidence of reliable autonomous repair.",
      },
      {
        title: "Next milestone",
        body: "Document a reproducible example with a known failing test, the agent's diagnosis, a proposed patch, and the result of rerunning the test. This remains planned work, with no repair success rate or completed end-to-end result claimed here.",
      },
    ],
  },
  {
    slug: "deepeval",
    title: "DeepEval — agent and RAG evaluation",
    summary:
      "An evaluation lab covering agent task completion, tool correctness, retrieval quality, grounded answers, and multi-turn conversation behavior.",
    status: "Evaluation lab",
    statusNote:
      "Learning exercise focused on evaluation design and tracing. Metrics and example cases are implemented; benchmark scores are not claimed.",
    context: "Learning exercise",
    architecture: projectArchitectures.deepeval,
    stack: ["Python", "DeepEval", "LangChain", "OpenAI", "MCP"],
    sourceUrl: "https://github.com/HariprakashKhp/deepeval_proj",
    sections: [
      {
        title: "Evaluation focus",
        body: "A plausible response does not establish that an agent completed the task or selected the correct tool. This learning lab separates those questions and extends evaluation to retrieved context, grounded answers, and multi-turn conversations.",
      },
      {
        title: "Agent tracing and tools",
        body: "Plain and instrumented support agents show how tracing is added around model and tool calls. Golden cases specify expected tool names for order-status and refund-policy questions. DeepEval's Task Completion and Tool Correctness metrics assess the resulting traces as separate evaluation targets.",
      },
      {
        title: "RAG and conversation evaluation",
        body: "The RAG evaluation script defines Contextual Precision, Contextual Recall, Answer Relevancy, and Faithfulness metrics against policy questions with expected answers. A separate multi-turn example evaluates Turn Relevancy, Knowledge Retention, and Conversation Completeness across an order-support conversation.",
      },
      {
        title: "Evidence and next steps",
        body: "The repository demonstrates evaluation wiring and small example datasets. The inspected agent-tracing and RAG scripts each contain two golden cases, so they do not establish broad reliability. Next steps are a larger reviewed dataset, calibrated grading criteria, and saved results comparing two configurations. No measured quality improvement or passing score is claimed.",
      },
    ],
  },
];
