import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icon";

export function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
}) {
  return (
    <Link href={href} className={`action action--${variant}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
