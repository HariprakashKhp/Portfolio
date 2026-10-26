export function SystemFigure({ compact = false }: { compact?: boolean }) {
  return (
    <figure
      className={`system-figure ${compact ? "system-figure--compact" : ""}`}
    >
      <figcaption>
        <span className="figure-dot" />
        <span>The engineering lens</span>
        <span className="figure-caption-end">Illustration</span>
      </figcaption>
      <div className="system-flow">
        <div className="system-node">
          <span className="node-symbol" aria-hidden="true">
            ↳
          </span>
          <div>
            <strong>Interface</strong>
            <span>A clear request</span>
          </div>
          <span className="node-type">INPUT</span>
        </div>
        <div className="flow-connector">
          <span>validate & route</span>
        </div>
        <div className="system-node system-node--accent">
          <span className="node-symbol" aria-hidden="true">
            ⌘
          </span>
          <div>
            <strong>Application</strong>
            <span>Python · APIs · Logic</span>
          </div>
          <span className="node-type">CORE</span>
        </div>
        <div className="flow-branches">
          <div>
            <span>retrieve</span>
            <strong>Knowledge</strong>
            <small>Relevant context</small>
          </div>
          <div>
            <span>reason</span>
            <strong>Intelligence</strong>
            <small>Models & agents</small>
          </div>
        </div>
        <div className="flow-output">
          <span aria-hidden="true">↳</span> Evaluate the result. Keep the
          evidence.
        </div>
      </div>
      <p className="figure-note">
        An illustrative application flow, from request to evaluated response.
      </p>
    </figure>
  );
}
