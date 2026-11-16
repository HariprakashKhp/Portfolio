import { impactHighlights } from "@/data/portfolio";

export function ImpactHighlights() {
  return (
    <dl className="impact-grid">
      {impactHighlights.map((highlight) => (
        <div className="impact-item" key={highlight.title}>
          <dt>{highlight.title}</dt>
          <dd className="impact-value">{highlight.value}</dd>
          <dd className="impact-description">{highlight.description}</dd>
          <dd className="impact-context">{highlight.context}</dd>
        </div>
      ))}
    </dl>
  );
}
