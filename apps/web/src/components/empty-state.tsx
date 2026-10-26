import type { ReactNode } from "react";
import { ActionLink } from "./action-link";

export function EmptyState({
  label,
  title,
  children,
  href,
  action,
}: {
  label: string;
  title: string;
  children: ReactNode;
  href?: string;
  action?: string;
}) {
  return (
    <div className="empty-state">
      <span className="draft-label">{label}</span>
      <h2>{title}</h2>
      <div className="prose">{children}</div>
      {href && action && (
        <ActionLink href={href} variant="text">
          {action}
        </ActionLink>
      )}
    </div>
  );
}
