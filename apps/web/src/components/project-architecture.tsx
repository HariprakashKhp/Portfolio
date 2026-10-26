import type { ProjectArchitecture as Architecture } from "@/content/project-architectures";

export function ProjectArchitecture({
  architecture,
  idPrefix,
}: {
  architecture: Architecture;
  idPrefix: string;
}) {
  const titleId = `${idPrefix}-architecture-title`;
  const descriptionId = `${idPrefix}-architecture-description`;
  const arrowId = `${idPrefix}-architecture-arrow`;
  const nodesById = new Map(
    architecture.nodes.map((node) => [node.id, node] as const),
  );

  return (
    <figure className="project-architecture">
      <figcaption>
        <strong>{architecture.title}</strong>
        <span>Component and data flow map · based on repository code</span>
      </figcaption>
      <p className="architecture-scroll-hint">
        On smaller screens, scroll the diagram horizontally or read the text
        version below.
      </p>
      <div
        className="architecture-viewport"
        role="region"
        aria-label={`${architecture.title} — scrollable diagram`}
        tabIndex={0}
      >
        <svg
          className="architecture-canvas"
          viewBox={`0 0 1100 ${architecture.height}`}
          width="1100"
          height={architecture.height}
          role="img"
          aria-labelledby={`${titleId} ${descriptionId}`}
        >
          <title id={titleId}>{architecture.title}</title>
          <desc id={descriptionId}>{architecture.summary}</desc>
          <defs>
            <marker
              id={arrowId}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--primary)" />
            </marker>
          </defs>
          {architecture.boundaries.map((boundary) => (
            <g key={boundary.label} className="architecture-boundary">
              <rect
                x={boundary.x}
                y={boundary.y}
                width={boundary.width}
                height={boundary.height}
                rx="12"
              />
              <text x={boundary.x + 24} y={boundary.y + 28}>
                {boundary.label}
              </text>
            </g>
          ))}
          {architecture.connections.map((edge) => (
            <g
              key={`${edge.from}-${edge.to}`}
              className={`architecture-edge architecture-edge--${edge.kind}`}
            >
              <path
                d={edge.path}
                markerEnd={`url(#${arrowId})`}
                markerStart={
                  edge.bidirectional ? `url(#${arrowId})` : undefined
                }
              />
              <text x={edge.labelX} y={edge.labelY} textAnchor="middle">
                {edge.label}
              </text>
            </g>
          ))}
          {architecture.nodes.map((node) => (
            <g
              key={node.id}
              className={`architecture-node architecture-node--${node.kind}`}
              transform={`translate(${node.x} ${node.y})`}
            >
              <rect width="250" height="90" rx="8" />
              <text className="architecture-node-title" x="16" y="28">
                {node.title}
              </text>
              {node.detail.map((line, index) => (
                <text
                  className="architecture-node-detail"
                  key={line}
                  x="16"
                  y={52 + index * 20}
                >
                  {line}
                </text>
              ))}
            </g>
          ))}
        </svg>
      </div>
      <p className="architecture-legend">
        Solid arrows: application and data flow.
        {architecture.connections.some((edge) => edge.kind !== "flow") &&
          " Dashed arrows: feedback or deployment configuration."}
      </p>
      <details className="architecture-text">
        <summary>Read components and connections as text</summary>
        <p>{architecture.summary}</p>
        <ul>
          {architecture.nodes.map((node) => (
            <li key={node.id}>
              <strong>{node.title}:</strong> {node.detail.join(". ")}.
            </li>
          ))}
        </ul>
        <ul>
          {architecture.connections.map((edge) => (
            <li key={`${edge.from}-${edge.to}`}>
              {nodesById.get(edge.from)?.title} {edge.bidirectional ? "↔" : "→"}{" "}
              {nodesById.get(edge.to)?.title}: {edge.label}.
            </li>
          ))}
        </ul>
      </details>
    </figure>
  );
}
