import type { CSSProperties } from "react";

export function CliIntro({
  name,
  role,
  location,
}: {
  name: string;
  role: string;
  location: string;
}) {
  const phrases = [name, role, location];
  const longest = Math.max(
    ...phrases.map((phrase) => Array.from(phrase).length),
  );

  return (
    <div
      className="cli-intro cli-loop"
      style={{ "--phrase-max": longest } as CSSProperties}
    >
      <span className="sr-only">{phrases.join(". ")}.</span>
      <span className="cli-prompt" aria-hidden="true">
        &gt;
      </span>
      <span className="cli-name" aria-hidden="true">
        {phrases.map((phrase, index) => (
          <span
            className="cli-phrase"
            key={phrase}
            style={
              {
                "--phrase-length": Array.from(phrase).length,
                "--phrase-delay": `${index * 6}s`,
              } as CSSProperties
            }
          >
            {phrase}
          </span>
        ))}
      </span>
      <label className="cli-toggle" title="Pause or resume text animation">
        <input type="checkbox" aria-label="Pause text animation" />
        <svg
          className="cli-pause-icon"
          aria-hidden="true"
          viewBox="0 0 20 20"
          width="20"
          height="20"
          fill="currentColor"
        >
          <rect x="5" y="4" width="3" height="12" rx="0.75" />
          <rect x="12" y="4" width="3" height="12" rx="0.75" />
        </svg>
        <svg
          className="cli-play-icon"
          aria-hidden="true"
          viewBox="0 0 20 20"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M6 3.5 16 10 6 16.5Z" />
        </svg>
      </label>
    </div>
  );
}
