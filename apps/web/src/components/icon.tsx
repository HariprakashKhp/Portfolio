export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
    >
      <path
        d="M4 9h9v6H4zm15 8h9v6h-9z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13 12h7v8h-1M8 15v5h11"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
