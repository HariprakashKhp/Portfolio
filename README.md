# Portfolio frontend

A static portfolio built with Next.js, TypeScript, and Tailwind CSS. Home, About, Experience, Resume, and Contact use the supplied resume. Projects is intentionally empty until the owner adds new work. A custom 404 handles missing routes.

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
- `apps/web/src/data/portfolio.ts`: name, biography, roles, education, skill groups, contact links, domain, and resume path/format.
- `apps/web/src/content/projects.ts`: intentionally empty at the owner's request. Add reviewed projects when ready; do not seed sample entries.
- `apps/web/public/resume/Hari_Prakash_K_Resume.pdf`: the published, trackable PDF copy. The original DOCX download has been removed.
- `apps/web/src/app/globals.css`: canonical runtime design tokens and shared visual styles.
- `DESIGN.md`: visual direction, token mapping, and interaction conventions.

The contact page shows email, GitHub, and LinkedIn only, per the owner's preference. There is no backend or chatbot. Blog is omitted. The homepage CLI continuously types and deletes the name, short current role, and location, with a blinking cursor and a native Pause control. Reduced motion shows the complete static name. Other animations remain deferred.

The site defaults to **noindex**. Set build-time `ALLOW_INDEXING=true` only for production after the custom domain is ready; leave it false or unset locally and in previews. Redeploy after changing it. Link following is permitted. Canonical metadata uses `https://hariprakash.in`. Static `public/robots.txt` permits crawling and points to `public/sitemap.xml`, which lists the six portfolio routes.

## Project guidance

Read [Agent.md](Agent.md) for contributor instructions and [spec.md](spec.md) for the ordered task checklist and launch requirements. Domain configuration and deployment remain future tasks; no domain or hosting account has been changed.

## CI/CD deployment

Follow [docs/deployment.md](docs/deployment.md) for GitHub setup, Cloudflare Pages Git integration, exact build settings, preview branches, domain/HTTPS setup, indexing, and rollback. The pipeline builds and deploys main automatically once configured; tests remain opt-in. `.node-version` selects Node 24. No GitHub Actions deployment workflow or API token is needed for this native integration.

Launch-preparation changes are implemented but untested. See [ToTest.md](ToTest.md) for the queue. No Git initialization, push, remote setup, or DNS change has been performed by the agent.
