import { ActionLink } from "@/components/action-link";

export default function NotFound() {
  return (
    <div className="container inner-page not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        A path that
        <br />
        doesn’t lead anywhere.
      </h1>
      <p>This page may have moved, or the link may be incomplete.</p>
      <ActionLink href="/">Back to home</ActionLink>
    </div>
  );
}
