# Portfolio frontend

A static portfolio built with Next.js, TypeScript, and Tailwind CSS. Home, About, Experience, Resume, and Contact use the supplied resume. Projects features the owner-selected Twin prototype, BugFixer in progress, and DeepEval evaluation lab, with static detail pages and GitHub links. A custom 404 handles missing routes.

## Resume work later

Read [PROJECT_NOTES.md](PROJECT_NOTES.md) for the current implementation, accepted decisions, content/asset map, deployment boundary, pending checks, and next steps. Follow [Agent.md](Agent.md) for the owner-directed workflow; historical test results do not verify the latest source.

## Run locally

Use Node.js 22.13 or later and npm.

```powershell
cd D:\Learning\Portfolio\apps\web
npm ci
npm run dev
```

Open http://127.0.0.1:3000. To check the actual exported files:

```powershell
npm run build
npm run preview
```

Open http://127.0.0.1:4173. `apps/web/out` is the deployable artifact. A development server is not required in production. The included preview server serves real static files and returns the custom 404 for missing routes; it does not use SPA fallback routing.

## Checks

Run verification only when the owner requests it; record pending checks in [ToTest.md](ToTest.md). From `apps/web`:

```powershell
npm run lint
npm run typecheck
npm run format:check
npm run build
npm test
```

Browser checks run against the static export. They use installed Microsoft Edge by default on Windows; on another platform, run `npx playwright install chromium` and set `PLAYWRIGHT_CHANNEL=chromium`. Screenshots and test results are written to ignored `test-results/`. Run `npm run format` after editing source files.

If PowerShell blocks npm.ps1, use `npm.cmd` in the commands above (for example, `npm.cmd run dev`). No machine-wide execution-policy change is needed.

## Add real content

- Root `Hari_Prakash_K_Resume.docx` and `Hari_Prakash_K_Resume.pdf`: local owner-provided originals, excluded from Git. Preserve them unchanged.
- `apps/web/src/data/portfolio.ts`: name, biography (including daily gym attendance and client ownership/FDE work), brief practice copy and supplied LeetCode/NeetCode profile links, roles, generalized Odessa customer-portal architecture, professional development (Hello Interview learning and interview rounds cleared), education, skill groups, contact links, domain, resume path/format, and resume-backed homepage impact highlights.
- Root `architecture.html`: detailed employer-architecture reference, kept local and Git-ignored. Only a generalized summary appears on Experience; do not copy, embed, or link this source in public assets or treat its assumptions/targets as verified achievements.
- `apps/web/src/data/learning.ts`: eight owner-confirmed completed courses/programs, current DevOps/Docker/AWS study, and certification plans. Course links use public catalog pages without coupons, lecture fragments, or private account URLs. Earned-credential entries remain empty until supplied.
- `docs/project-case-study-template.md`: a reusable brief for future projects; nothing is published from this template.
- `apps/web/src/content/projects.ts`: owner-selected project summaries, statuses, technologies, source links, and detail sections. Keep implementation evidence separate from planned work and measured results.
- `apps/web/src/content/project-architectures.ts`: repository-backed component maps, connections, boundaries, and summaries for all three projects. The shared `project-architecture.tsx` component renders full-width SVG diagrams and accessible text versions on Home, Projects, and detail pages. Diagrams scroll within their own region on small screens.
- `apps/web/src/app/projects/[slug]/page.tsx`: generates each real project route and its metadata at build time; no runtime GitHub or API dependency.
- `apps/web/public/resume/Hari_Prakash_K_Resume.pdf`: the published, trackable PDF copy. The original DOCX download has been removed.
- `apps/web/src/app/globals.css`: canonical runtime design tokens and shared visual styles.
- `DESIGN.md`: visual direction, token mapping, and interaction conventions.

The contact page shows email, GitHub, and LinkedIn only, per the owner's preference. There is no backend or chatbot. Blog is omitted. The homepage CLI continuously types and deletes the name, short current role, and location, with a blinking cursor and a native Pause control. Reduced motion shows the complete static name. Other animations remain deferred.

The site defaults to **noindex**. Cloudflare preview branches are also forced to noindex in page metadata: only the branch named by `PRODUCTION_BRANCH` (default `main`) can enable indexing on Pages. Set build-time `ALLOW_INDEXING=true` only for production after the custom domain is ready; leave it false or unset locally and in previews. Redeploy after changing it. Link following is permitted. Canonical metadata uses `https://hariprakash.in`. Static `public/robots.txt` permits crawling and points to `public/sitemap.xml`, which lists the six primary routes and three project detail routes.

## Images and sharing

The header uses a 192px WebP avatar; hero/About backgrounds use 900px desktop and 480px phone WebP variants. Original root PNGs are preserved. The generated files are committed static assets, so deployment needs no image optimizer.

To regenerate images and the branded 1200x630 social card after changing the originals or profile text, run `npm.cmd run assets:prepare` from `apps/web`. This is a manual asset-generation command, separate from builds and tests. It uses Sharp included with Next.js; keep Next's optional dependencies installed. It also writes the editable `apps/web/assets/portfolio-card.svg`. The social PNG is linked by Open Graph and Twitter metadata on all six primary routes.

## Project guidance

Read [Agent.md](Agent.md) for contributor instructions and [spec.md](spec.md) for the ordered task checklist and launch requirements. The owner reports the site is live; preview/production setup is still pending. No hosting account or DNS configuration has been changed by the agent.

## CI/CD deployment

Follow [docs/deployment.md](docs/deployment.md) for GitHub setup, Cloudflare Pages Git integration, exact build settings, preview branches, domain/HTTPS setup, indexing, and rollback. The pipeline builds and deploys main automatically once configured; tests remain opt-in. `.node-version` selects Node 24. No GitHub Actions deployment workflow or API token is needed for this native integration.

Launch-preparation changes are implemented but untested. See [ToTest.md](ToTest.md) for the queue. No Git initialization, push, remote setup, or DNS change has been performed by the agent.
