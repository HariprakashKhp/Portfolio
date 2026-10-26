export type ArchitectureNode = {
  id: string;
  x: number;
  y: number;
  title: string;
  detail: readonly [string, string];
  kind: "service" | "store" | "model" | "configuration";
};

export type ArchitectureConnection = {
  from: string;
  to: string;
  path: string;
  label: string;
  labelX: number;
  labelY: number;
  kind: "flow" | "feedback" | "configuration";
  bidirectional: boolean;
};

export type ProjectArchitecture = {
  title: string;
  summary: string;
  height: number;
  boundaries: readonly {
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
  }[];
  nodes: readonly ArchitectureNode[];
  connections: readonly ArchitectureConnection[];
};

function node(
  id: string,
  x: number,
  y: number,
  title: string,
  detail: readonly [string, string],
  kind: ArchitectureNode["kind"] = "service",
): ArchitectureNode {
  return { id, x, y, title, detail, kind };
}

function connection(
  from: string,
  to: string,
  path: string,
  label: string,
  labelX: number,
  labelY: number,
  kind: ArchitectureConnection["kind"] = "flow",
  bidirectional = false,
): ArchitectureConnection {
  return { from, to, path, label, labelX, labelY, kind, bidirectional };
}

// Repository-backed component maps, not evidence of a running deployment.
// Coordinates use a shared 1100-unit canvas and 250 × 90 component boxes.
export const projectArchitectures = {
  twin: {
    title: "Twin: application and AWS deployment architecture",
    summary:
      "A browser loads the Next.js interface through CloudFront and S3. Chat requests reach API Gateway and a Lambda-hosted FastAPI app through Mangum. The backend combines profile context and session history, calls Bedrock, stores the conversation, and returns the reply. A separate GitHub Actions workflow packages and provisions the AWS resources with Terraform.",
    height: 860,
    boundaries: [
      {
        x: 10,
        y: 20,
        width: 1080,
        height: 650,
        label: "Application and data flow",
      },
      {
        x: 10,
        y: 690,
        width: 1080,
        height: 155,
        label: "Deployment configuration",
      },
    ],
    nodes: [
      node("browser", 35, 85, "Visitor / browser", [
        "Professional profile questions",
        "Message + session identifier",
      ]),
      node("ui", 420, 85, "Next.js chat interface", [
        "Static frontend",
        "Displays conversation replies",
      ]),
      node(
        "delivery",
        805,
        85,
        "CloudFront + S3",
        ["CDN + static frontend bucket", "Serves exported site assets"],
        "store",
      ),
      node("gateway", 420, 250, "API Gateway", [
        "HTTP API · POST /chat",
        "Forwards requests to Lambda",
      ]),
      node("api", 420, 410, "Lambda + FastAPI", [
        "Mangum adapter · chat handler",
        "Load history · build prompt",
      ]),
      node(
        "profile",
        35,
        410,
        "Profile context",
        ["Facts · summary · style notes", "LinkedIn document content"],
        "store",
      ),
      node(
        "memory",
        805,
        410,
        "Conversation memory",
        ["S3 in AWS / local JSON files", "Load history · save new turns"],
        "store",
      ),
      node(
        "bedrock",
        420,
        565,
        "Amazon Bedrock",
        ["Converse API", "Prompt + recent 50 messages"],
        "model",
      ),
      node("response", 805, 565, "Chat response", [
        "Generated reply + session_id",
        "Returned to the chat interface",
      ]),
      node(
        "actions",
        35,
        735,
        "GitHub Actions",
        ["OIDC AWS credentials", "Runs deployment script"],
        "configuration",
      ),
      node(
        "build",
        420,
        735,
        "Build + package",
        ["Python Lambda ZIP", "Next.js static export"],
        "configuration",
      ),
      node(
        "terraform",
        805,
        735,
        "Terraform + deployment",
        ["Lambda · API · S3 · CloudFront", "Provision resources · upload"],
        "configuration",
      ),
    ],
    connections: [
      connection("browser", "ui", "M285 130 H420", "open chat", 352, 116),
      connection("delivery", "ui", "M805 130 H670", "site assets", 738, 116),
      connection(
        "ui",
        "gateway",
        "M545 175 V250",
        "message + session_id",
        650,
        216,
      ),
      connection("gateway", "api", "M545 340 V410", "invoke handler", 635, 378),
      connection("profile", "api", "M285 455 H420", "profile input", 352, 441),
      connection(
        "api",
        "memory",
        "M670 455 H805",
        "session history",
        738,
        441,
        "flow",
        true,
      ),
      connection(
        "api",
        "bedrock",
        "M545 500 V565",
        "request / reply",
        450,
        537,
        "flow",
        true,
      ),
      connection(
        "api",
        "response",
        "M650 500 V540 H930 V565",
        "response payload",
        810,
        528,
      ),
      connection(
        "response",
        "ui",
        "M1055 610 H1075 V210 H620 V175",
        "HTTP response",
        900,
        198,
        "feedback",
      ),
      connection(
        "actions",
        "build",
        "M285 780 H420",
        "package",
        352,
        766,
        "configuration",
      ),
      connection(
        "build",
        "terraform",
        "M670 780 H805",
        "apply + upload",
        738,
        766,
        "configuration",
      ),
    ],
  },
  bugfixer: {
    title: "BugFixer: agent investigation and tool feedback loop",
    summary:
      "The CLI loads configured filesystem MCP tools and a separate pytest tool, then starts a LangGraph workflow with message state. The model either finishes with a diagnosis and suggested fix or routes tool calls through ToolNode. Filesystem access and captured pytest output return as tool results for the next model step. A verified patch-and-rerun workflow remains future work.",
    height: 835,
    boundaries: [
      {
        x: 10,
        y: 20,
        width: 1080,
        height: 795,
        label: "Current implementation · investigation and suggestions",
      },
    ],
    nodes: [
      node("request", 35, 85, "Debugging request", [
        "CLI prompt in main.py",
        "Find bug · explain · suggest fix",
      ]),
      node("entry", 420, 85, "Application entry point", [
        "Load MCP + pytest tools",
        "Compile and invoke the graph",
      ]),
      node(
        "settings",
        805,
        85,
        "Codebase configuration",
        ["Settings.codebase_dir", "Filesystem server directory"],
        "configuration",
      ),
      node(
        "state",
        35,
        270,
        "Message state",
        ["add_messages reducer", "Request + model / tool history"],
        "store",
      ),
      node(
        "model",
        420,
        270,
        "Model node",
        ["OpenAI model with bound tools", "Chooses tools or final response"],
        "model",
      ),
      node("router", 805, 270, "Conditional routing", [
        "LangGraph tools_condition",
        "Tool calls → tools; else finish",
      ]),
      node("result", 35, 455, "Diagnosis + suggestion", [
        "Final assistant message",
        "Printed to the CLI",
      ]),
      node("tools", 805, 455, "Tool execution", [
        "LangGraph ToolNode",
        "Dispatch + return tool results",
      ]),
      node(
        "files",
        35,
        635,
        "Target codebase",
        ["Source files and test suite", "Configured local directory"],
        "store",
      ),
      node("mcp", 420, 635, "Filesystem MCP server", [
        "stdio · npx filesystem server",
        "Tools loaded through MCP client",
      ]),
      node("pytest", 805, 635, "pytest subprocess", [
        "uv run pytest · 60s timeout",
        "Captured output + exit status",
      ]),
    ],
    connections: [
      connection("request", "entry", "M285 130 H420", "start", 352, 116),
      connection(
        "settings",
        "entry",
        "M805 130 H670",
        "load settings",
        738,
        116,
        "configuration",
      ),
      connection(
        "entry",
        "model",
        "M545 175 V270",
        "initial messages",
        646,
        226,
      ),
      connection(
        "state",
        "model",
        "M285 315 H420",
        "message history",
        352,
        301,
        "flow",
        true,
      ),
      connection("model", "router", "M670 315 H805", "model output", 738, 301),
      connection("router", "tools", "M930 360 V455", "tool calls", 993, 412),
      connection(
        "router",
        "result",
        "M805 335 H765 V410 H160 V455",
        "no tool calls → finish",
        370,
        397,
      ),
      connection(
        "tools",
        "model",
        "M805 500 H730 V390 H545 V360",
        "tool results → next model step",
        570,
        379,
        "feedback",
      ),
      connection(
        "tools",
        "mcp",
        "M865 545 V585 H545 V635",
        "filesystem tool",
        680,
        573,
        "flow",
        true,
      ),
      connection(
        "tools",
        "pytest",
        "M990 545 V635",
        "run_tests tool",
        990,
        598,
        "flow",
        true,
      ),
      connection(
        "mcp",
        "files",
        "M420 680 H285",
        "file access",
        352,
        666,
        "flow",
        true,
      ),
      connection(
        "pytest",
        "files",
        "M930 725 V775 H160 V725",
        "execute tests in configured codebase",
        545,
        762,
      ),
    ],
  },
  deepeval: {
    title: "DeepEval: agent, retrieval, and conversation evaluation",
    summary:
      "Golden inputs and expected behavior feed evaluation runners. Separate support-agent, RAG-agent, and multi-turn chatbot paths exercise tools, policy retrieval, and conversation history. Agent and RAG callbacks capture traces; chatbot tests capture turns. Metric suites use this evidence and configured graders to produce per-case scores and reasons, with no benchmark result claimed here.",
    height: 970,
    boundaries: [
      {
        x: 10,
        y: 20,
        width: 1080,
        height: 190,
        label: "Cases and expected behavior",
      },
      {
        x: 10,
        y: 245,
        width: 1080,
        height: 365,
        label: "Three evaluation paths",
      },
      {
        x: 10,
        y: 640,
        width: 1080,
        height: 315,
        label: "Captured evidence, grading, and results",
      },
    ],
    nodes: [
      node(
        "goldens",
        35,
        85,
        "Golden test cases",
        ["Order / refund / policy inputs", "Small example datasets"],
        "store",
      ),
      node("runner", 420, 85, "Evaluation runners", [
        "Dataset evaluation iterator",
        "Conversation evaluate()",
      ]),
      node(
        "expected",
        805,
        85,
        "Expected behavior",
        ["Expected tool names", "Reference answers for RAG"],
        "store",
      ),
      node(
        "support",
        35,
        295,
        "Support agent",
        ["LangChain + OpenAI", "Instrumented tool-calling agent"],
        "model",
      ),
      node(
        "rag",
        420,
        295,
        "RAG support agent",
        ["LangChain + OpenAI", "search_policies tool"],
        "model",
      ),
      node(
        "chat",
        805,
        295,
        "Multi-turn chatbot",
        ["OpenAI SDK tool loop", "Keeps history between turns"],
        "model",
      ),
      node("supporttools", 35, 485, "Support tools", [
        "Order status + refund lookups",
        "MCP shipping-options tool",
      ]),
      node(
        "retrieval",
        420,
        485,
        "Policy retrieval",
        ["9 policies · OpenAI embeddings", "InMemoryVectorStore · top 3"],
        "store",
      ),
      node(
        "history",
        805,
        485,
        "Conversation history",
        ["User / assistant messages", "Tool calls and tool results"],
        "store",
      ),
      node(
        "evidence",
        420,
        680,
        "Captured evidence",
        ["Callbacks + observe → traces", "Chat turns + retrieval context"],
        "store",
      ),
      node(
        "judge",
        35,
        840,
        "OpenAI judge models",
        ["LLM-based metric grading", "Used by configured metrics"],
        "model",
      ),
      node("metrics", 420, 840, "DeepEval metric suites", [
        "Task / tools · RAG quality",
        "Conversation quality",
      ]),
      node("report", 805, 840, "Evaluation output", [
        "Per-case scores + reasons",
        "Configured metric thresholds",
      ]),
    ],
    connections: [
      connection("goldens", "runner", "M285 130 H420", "test inputs", 352, 116),
      connection(
        "expected",
        "runner",
        "M805 130 H670",
        "expectations",
        738,
        116,
      ),
      connection(
        "runner",
        "support",
        "M485 175 V225 H160 V295",
        "agent cases",
        310,
        214,
      ),
      connection("runner", "rag", "M545 175 V295", "RAG cases", 595, 268),
      connection(
        "runner",
        "chat",
        "M605 175 V225 H930 V295",
        "conversation turns",
        820,
        214,
      ),
      connection(
        "support",
        "supporttools",
        "M160 385 V485",
        "tool calls + results",
        263,
        443,
        "flow",
        true,
      ),
      connection(
        "rag",
        "retrieval",
        "M545 385 V485",
        "semantic search",
        640,
        443,
        "flow",
        true,
      ),
      connection(
        "chat",
        "history",
        "M930 385 V485",
        "retain turns",
        1000,
        443,
        "flow",
        true,
      ),
      connection(
        "support",
        "evidence",
        "M35 340 H25 V725 H420",
        "model + tool spans",
        205,
        712,
      ),
      connection(
        "rag",
        "evidence",
        "M670 340 H720 V725 H670",
        "reply + context",
        802,
        712,
      ),
      connection(
        "chat",
        "evidence",
        "M1055 340 H1075 V725 H670",
        "captured turns",
        982,
        712,
      ),
      connection(
        "evidence",
        "metrics",
        "M545 770 V840",
        "actual + expected",
        646,
        808,
      ),
      connection(
        "metrics",
        "judge",
        "M420 885 H285",
        "LLM grading",
        352,
        871,
        "flow",
        true,
      ),
      connection(
        "metrics",
        "report",
        "M670 885 H805",
        "scores + reasons",
        738,
        871,
      ),
    ],
  },
} satisfies Record<string, ProjectArchitecture>;
