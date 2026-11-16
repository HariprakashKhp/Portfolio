# Portfolio - notes to resume later

Last updated: 2026-11-16 (Asia/Kolkata).
Workspace: `D:\Learning\Portfolio`. Frontend: `apps/web`.
Branch observed at this checkpoint: `feature/next-update`.

## Read this first next session

This is the project handoff snapshot, not a replacement for the canonical instructions or task tracker.

1. Read [Agent.md](Agent.md) for the owner's rules, then this note.
2. Read [spec.md](spec.md) for requirements/tasks, [DESIGN.md](DESIGN.md) for accepted visual decisions, and [ToTest.md](ToTest.md) for pending checks.
3. Inspect the current branch, working tree, and relevant source before editing. The repository had modified and untracked files at this checkpoint; do not reset or overwrite them.
4. Do not run tests, lint/type checks, builds, browser checks, Lighthouse, audits, or formatter checks unless the owner explicitly requests them. Make requested changes and log them in ToTest.md.
5. Distinguish local implementation, historical verification, the owner's live-site report, and actual deployment verification.

## Where we stopped

### Latest update: replacement resume PDF

- Copied the owner's updated root `Hari_Prakash_K_Resume.pdf` into `apps/web/public/resume/Hari_Prakash_K_Resume.pdf`. Existing Home/Resume download links keep the same URL. Root originals remain local and unchanged.
- Added current-repository publishing steps and repeatable PDF replacement instructions to `docs/deployment.md`. Observed branch: `feature/next-update`; origin: `https://github.com/HariprakashKhp/Portfolio.git`. Cloudflare setup and live state remain unverified.
- FE-10A and the 2026-11-16 entry in `ToTest.md` track the update. Testing and builds remain deferred; no Git publication, deployment, or DNS changes performed.

### Latest update: About and Experience content refresh

- About now introduces the current Staff Engineer role/employer, expands the biography's backend/AI and independent-project focus, and adds evaluation skills plus context for professional RAGAS work versus DeepEval/pytest learning and personal AWS infrastructure. Existing education, courses, practice links, gym, and client-ownership details remain.
- Both pages render the new `src/components/project-overview.tsx` as compact, linked project rows from `content/projects.ts`, retaining each summary, context, and status. About places these before Education; Experience places them after Professional development, separate from Odessa achievements.
- Experience now opens with the current role, backend-to-AI focus, client ownership, and the attributed 30% latency/35% cost outcomes already shown on Home. `src/components/impact-highlights.tsx` owns the shared markup; Home uses it with the same content and styling.
- Updated route descriptions, shared styles, contributor/design/content-source notes, and FE-28. Testing is queued in the 2026-10-27 ToTest.md entry. No tests, lint/type/formatter checks, builds, browser checks, audits, deployment, or Git publication performed.

### Latest update: profiles, client ownership, and Odessa architecture

- About now links the supplied LeetCode and NeetCode profiles in the brief practice paragraph via `profile.problemSolving`, without counts or a separate practice section. It also mentions daily gym attendance.
- About and the Staff Engineer highlights now reflect independent client-call leadership, delivery decisions, ownership/responsibility, and travel to client locations for forward-deployed engineering work. No client names, destinations, dates, or new outcomes are inferred.
- Experience adds a generalized Odessa customer-portal architecture overview from the supplied root `architecture.html` and existing resume-backed work. It covers FastAPI behind CDN/gateway/WAF, CDC-fed reads versus transactional writes, cache correctness, and shared business APIs for agents. The source's assumptions, proposed Azure deployment, sizing, security settings, SLOs, and open decisions are not employer-achievement claims.
- Root `architecture.html` is preserved unchanged and now Git-ignored. No public copy, embed, link, or download is added. Keep identifying/internal details out of public content; personal Projects remain separate.
- Professional development now uses ordinary paragraphs across the section width, replacing the narrow 62ch list. Browser layout remains unverified.
- Updated contributor/design/source/spec/README notes and ToTest.md. No tests, lint/type checks, builds, browser checks, audits, deployment, or Git publication performed. The web reader could read LeetCode but could not access NeetCode; both links use supplied destinations without importing statistics.

### Latest update: full project architecture maps

The owner requested full architecture diagrams instead of the small three-component sketches. Home and Projects now use full-width cards with project copy above a detailed diagram. Each detail page repeats that diagram above the narrow notes layout and links it from the project index.

- New `src/content/project-architectures.ts`: typed component nodes, connections, boundaries, and summaries. Twin covers static delivery, API Gateway/Lambda/FastAPI/Mangum, profile context, S3/local memory, Bedrock, responses, and GitHub Actions/build/Terraform configuration. BugFixer covers CLI/settings, messages, model/routing, ToolNode, filesystem MCP, pytest, codebase access, and feedback. DeepEval covers golden inputs/expectations, three agent/RAG/chat paths, support tools, policy retrieval, history, evidence, metrics, judges, and results.
- New `src/components/project-architecture.tsx`: shared static SVG renderer, boundary labels, and complete component/connection text in native details. Small screens scroll within a named keyboard-focusable region; labels are not scaled to tiny phone text. Existing theme tokens and forced-colors fallbacks apply.
- Removed the old flow triples and blueprint presentation. No new runtime library, client JavaScript, endpoint, graph interaction, or live deployment/repair/evaluation result is introduced. Additional public source files were read for accuracy; projects were not run.
- Updated design, contributor, README, provenance/spec notes, and ToTest.md. No tests, lint/type checks, builds, browser checks, deployment, or Git publication performed. Check new diagrams only when the owner requests testing.

### Latest update: completed learning and coding practice

The owner supplied eight completed courses/programs, current DevOps/Docker/AWS studies, 500+ LeetCode problems solved, and recent NeetCode 150 practice. About now renders six completed AI/program entries, two completed web development entries, three current-study entries, and a brief problem-solving point in the biography. Public course titles were checked on Udemy/Coursera; completion/progress and practice counts come from the owner.

Course title links use public catalog URLs with coupons and lecture fragments removed. The IBM professional certificate program is included as completed learning; no award date, badge, or verification link is inferred. Earned-credential entries remain empty and their panel is hidden. AWS coursework is generic with no private My Courses link; the owner has been asked for specific course titles/public links. The refinement removes numeric practice claims and the separate practice section: About now says constant problem-solving practice on LeetCode and NeetCode. Experience adds Professional development about Hello Interview system-design/architecture learning and clearing system-design/problem-solving interview rounds. Profile URLs were subsequently supplied and linked in the latest update above.

Implementation is in `src/data/learning.ts`, `src/components/learning-section.tsx`, and the shared stylesheet. Contributor/design/content/spec/README notes and ToTest.md are updated. No tests, lint/type checks, builds, browser checks, deployment, or Git publication were performed; run queued checks only when requested.

### Latest update: owner-selected projects

The owner subsequently requested Twin, BugFixer as in progress, and DeepEval to showcase evaluation. This supersedes the earlier empty-Projects decision wherever it appears in historical notes below.

- `src/content/projects.ts` now contains repository-backed summaries, statuses, technology lists, source links, and four note sections per project. Twin is a personal Prototype; BugFixer is In progress; DeepEval is an Evaluation lab and Learning exercise.
- Home and Projects share all three cards with actual component labels. The existing detail layout now shows status/limitations and technologies instead of draft-placeholder content.
- `src/app/projects/[slug]/page.tsx` generates `twin`, `bugfixer`, and `deepeval` at build time, including per-project metadata. The sitemap includes these routes.
- Public repository inspection supports the descriptions. No live deployment, successful repair, evaluation score, or original authorship of course material is claimed. No runtime API/GitHub dependency was added.
- Updated Agent.md, spec.md, DESIGN.md, README.md, and docs/content-source.md to reflect the selection. See the new project entry in ToTest.md for route, content, source-link, metadata, layout, and accessibility checks, including replacement of the obsolete empty-project browser expectation.
- Implementation only: no tests, lint/type checks, builds, browser checks, deployment, or Git publication were performed. Do not treat older test results as verification of these additions.

### Earlier checkpoint

The owner accepted the portfolio improvement recommendations, and the corresponding repository changes are implemented:

- Home prioritizes experience/contact, includes two attributed professional impact highlights, and closes with contact/PDF actions.
- Empty project and learning content occupies less space.
- Images are optimized WebP assets, and a branded social-sharing PNG plus per-route metadata is added.
- Cloudflare preview branches have an additional build-time noindex safeguard; remaining dashboard steps are documented.

The latest work has NOT been tested, built, or deployed by the agent. The owner previously reported that the website is live, but the latest local changes must not be assumed to be live. Preview versus production setup remains an owner dashboard task.

Many source/doc changes are modified and new assets/helpers are untracked. In particular, include the new public WebPs/social PNG, metadata helper, learning files, asset script/SVG, and project brief when the owner reviews and commits the work. Both root image PNGs were also untracked. `apps/web/next-env.d.ts` was already modified before this documentation pass; it was left untouched. No branch creation, staging, commit, push, merge, deployment, or DNS mutation was performed for this checkpoint.

## Scope and stack

- Static frontend only: Next.js 16.4.3 App Router, React 19.3.1, TypeScript 6.0.3, Tailwind CSS 4.3.3, npm lockfile.
- Recommended Node version: 24 via `apps/web/.node-version`; package engine permits >=22.13.0.
- `next.config.ts`: `output: "export"`, `trailingSlash: true`, and `images.unoptimized: true`.
- Production artifact: `apps/web/out`, ordinary HTML/CSS/JS/assets. No running Next.js application server is required.
- Backend, chatbot, FastAPI/LangGraph services, databases, serverless functions, contact forms, and authentication are deferred.
- Blog remains omitted until real articles exist. Other animations remain deferred beyond the approved homepage CLI loop.
- Read the installed Next.js docs under `apps/web/node_modules/next/dist/docs/` before changing framework APIs; the local frontend AGENTS.md explicitly requires this.

## Pages and shared features implemented

| Surface | Current implementation |
|---|---|
| `/` | Compact text-led hero, CLI line, Experience/Contact actions, selected impact, focus areas, compact project note, Contact/PDF closing actions. |
| `/about/` | Resume-backed biography, skill groups, education, subtle portrait background, and Courses & Certifications section. |
| `/experience/` | Three Odessa roles, dates, responsibilities, and supplied outcomes. |
| `/projects/` | Owner-selected Twin, BugFixer, and DeepEval cards with static detail routes and source links; testing pending. |
| `/resume/` | Professional overview and the supplied public PDF download. |
| `/contact/` | Email, GitHub, and LinkedIn only; no phone link or form. |
| Custom 404 | Static not-found page with a route home. |
| Shared shell | Header/footer, current-route navigation, responsive mobile disclosure, Escape/focus handling, skip link, reduced-motion/no-JavaScript support, local fonts, themed scrollbars. |

The footer's "Portfolio in progress" badge was removed. Projects now shows the three selected entries; the compact empty fallback remains available if the list becomes empty.

### Latest homepage priorities

- Main actions: **View experience** and **Contact me**. The previous primary link to an empty Projects page was removed.
- Impact data is in `impactHighlights` in `src/data/portfolio.ts`:
  - 30% lower API response latency, attributed to Odessa / Senior Software Engineer.
  - 35% lower token and cloud compute costs, attributed to Odessa / Staff Engineer.
- These are existing resume-backed professional outcomes, not new measurements or personal-project claims.
- Full featured-project rendering remains conditional on real project entries.
- Bottom actions are Contact me and Download resume (PDF).

### Personal content and integrity

- Name: Hari Prakash K; Bengaluru, India.
- Current role: Staff Engineer - AI and Backend Architecture at Odessa Solutions. The profile headline positions senior backend/agentic AI/AWS experience.
- Current copy states 7+ years in engineering and 2+ years in agentic AI; revisit time-sensitive wording when the owner supplies updates.
- Personal/career/education/contact facts were imported from root `Hari_Prakash_K_Resume.docx`; see [content provenance](docs/content-source.md).
- The owner later supplied the root PDF. Its published copy is `apps/web/public/resume/Hari_Prakash_K_Resume.pdf`. The old public DOCX was removed.
- Preserve original root DOCX/PDF files unchanged; they are Git-ignored local sources. The public PDF is intentionally trackable.
- Contact publishes only the approved email/GitHub/LinkedIn details. Do not add a phone contact.
- The personal AWS digital twin is not employer work. It is now included as the owner-selected Twin prototype; current live deployment is not claimed.
- The approximately 80% delivery gain in experience copy is an individual improvement; never broaden it to a team/company result. Do not inflate system-design/HLD/LLD proficiency.

## Accepted design decisions - preserve these

The site uses a quiet dark slate engineering-notebook direction. Runtime tokens live in `src/app/globals.css`; DESIGN.md owns intent. Body/display fonts are locally bundled Manrope and Space Grotesk.

- Header: color avatar next to the name in a 52px circular crop. Empty image alt avoids duplicating the adjacent name.
- Website icon: a simple pale-blue **H** on slate in `src/app/icon.svg`.
- Monochrome portrait: decorative background only in the homepage hero and About page. CSS inversion/screen blending removes the paper, with a radial edge fade. Hide the decoration in forced-colors mode.
- The owner found the first portrait treatment ghostly. Keep it barely visible: desktop Home 8%, About 6%; phone Home 5%, About 4%.
- The owner rejected the generic system-flow chart in the hero. It has been removed; do not restore it or reserve a blank diagram column. The shared figure component remains for possible future project layouts.
- The unwanted gap came from large hero padding, two-column centering, and a 13rem diagram offset. Current hero has one content column capped at 43rem, top/bottom padding 2rem/3.5rem on desktop and 1.5rem/3rem on phones. The portrait box fits the hero height.

### CLI animation

- Homepage only: type, hold, and delete the name, short current role, then location, continuously.
- Each phrase has a six-second slot: 1.5s type, 2.5s hold, 1.5s delete, then a brief gap; full cycle is 18s. Cursor blinks every 700ms.
- Pause control uses the usual two-bar icon while running and a play triangle while paused. Do not restore a visible checkbox/text pause button.
- Native checkbox supports keyboard/no-JavaScript pause. Static accessible text exposes all facts once, animated text is hidden from assistive technology, and reduced motion shows the full name with a static cursor.
- No JavaScript timer or animation dependency was added.

## Projects and learning - selected projects and pending credentials

Projects contains the three explicitly selected entries. Completed courses/programs, current study, and coding practice are populated from the owner's latest message; earned-credential entries remain empty. Never populate any list with inferred resume entries or sample achievements.

- `src/content/projects.ts` defines the shared Project model and the three selected entries.
- [Project brief template](docs/project-case-study-template.md) collects problem, audience, contribution, real architecture/tradeoffs, status, evidence, stack, links, and limitations. It is a document only, not published project content.
- Project cards and the shared project-note layout are connected to the active static `/projects/[slug]/` route.
- Historical finding: an empty `generateStaticParams()` array did not work with this project's static export. When a real project is ready, add a route wrapper generating actual approved slugs; do not fabricate one to satisfy a build.
- `src/data/learning.ts` owns completed courses, current studies, earned credentials, and certification intentions. `src/data/portfolio.ts` owns the brief About practice copy/profile links, client/gym narrative, generalized professionalArchitecture, and professionalDevelopment entries.
- The completed IBM program is shown under AI courses/programs. Further AWS/AI certifications remain planned; no issue date, badge, or credential verification link is supplied.
- About uses one completed-AI panel beside stacked completed-web and current-study panels, then a compact certification-plan note. Problem-solving practice is a single About biography point; interview learning/outcomes appear under Professional development on Experience. Panels stack on phones; no empty earned-credential panel is rendered.
- Course fields: title, provider, category, optional courseUrl/completedOn/summary/certificateUrl. Certification fields: title, issuer, issuedOn, optional expiresOn/credentialUrl. Keep catalog and credential links distinct and omit unavailable dates/links.

## Image assets and social sharing

The owner supplied two root PNGs; preserve both:

| Root source | Purpose |
|---|---|
| `ChatGPT Image Oct 26, 2026, 03_42_57 PM.png` | Color avatar. |
| `ChatGPT Image Oct 26, 2026, 03_43_09 PM.png` | Black-and-white line-art portrait. |

The superseded public PNG copies were replaced with these generated, committed-intended assets:

| Public asset under `apps/web/public/` | Dimensions/use | Generated size |
|---|---|---|
| `images/hari-avatar.webp` | 192px wide; shown at 52px in header. | 8,972 bytes |
| `images/hari-portrait-line-art.webp` | 900px wide desktop portrait. | 51,492 bytes |
| `images/hari-portrait-line-art-mobile.webp` | 480px wide phone portrait. | 20,156 bytes |
| `social/portfolio-card.png` | 1200x630 branded sharing image. | 38,645 bytes |

- Manual generator: `apps/web/scripts/prepare-assets.mjs`, invoked by `npm.cmd run assets:prepare` from apps/web. It is not a build or test hook.
- The generator uses Sharp already supplied with Next.js and Node type stripping to read the public profile. Keep Next's optional dependencies installed; no new Sharp dependency was added.
- It also writes `apps/web/assets/portfolio-card.svg`. Update the generator if changing the social-card design; rerunning regenerates that SVG from the script/profile data.
- Root PNGs are untouched; only superseded named public PNG copies are removed after exports are written.
- Asset generation completed. This does not prove exported-site performance or live social previews.
- `src/lib/metadata.ts` creates page-specific titles/descriptions, canonical URLs, Open Graph fields, and Twitter large-image cards for the six primary routes. All share the static PNG on the canonical custom domain.

## Hosting, SEO, and current deployment boundary

- Domain: `hariprakash.in`; canonical origin: `https://hariprakash.in`.
- Selected CI/CD: GitHub integration with **Cloudflare Pages**. This is a static export; do not introduce a Worker/OpenNext adapter. Earlier `opennextjs-cloudflare build` errors came from using the Worker-oriented path for this static site.
- Owner reports the website is live. Registrar, DNS/HTTPS/redirect behavior, dashboard settings, current deployed commit, and latest deployed output have not been verified by the agent.
- Repository deployment settings: root `apps/web`, build `npm run build`, output `out`, production branch `main`, Node 24. No GitHub Actions workflow or service token is required for the selected native integration; tests are opt-in.
- [Deployment guide](docs/deployment.md), especially section 4, gives exact remaining dashboard steps. Set production branch/main and enable feature-branch previews on the existing Pages project; do not create another Worker or disturb existing DNS.
- Production: `PRODUCTION_BRANCH=main`; enable `ALLOW_INDEXING=true` only once the custom domain is ready for indexing. Preview: `PRODUCTION_BRANCH=main`, `ALLOW_INDEXING=false`. Rebuild/redeploy after changing build-time environment values.
- In code, `ALLOW_INDEXING=true` is required. On Pages (`CF_PAGES=1`), `CF_PAGES_BRANCH` must additionally match `PRODUCTION_BRANCH` (default main); previews or missing branch names remain noindex even if the flag was copied accidentally. Do not override Cloudflare's provider variables.
- Static `public/robots.txt` permits crawling and points to `sitemap.xml`; the sitemap contains the six primary canonical routes. Metadata follows links. Noindex is not an access-control mechanism.
- Keep preview metadata out of search indexes; retain the custom-domain canonical/social URLs. Actual production opt-in and remote behavior remain pending checks.
- Do not initialize/reset Git, publish, merge, push, or change DNS/account settings without the owner's instruction.

## Verification status - do not confuse old results with current proof

[docs/verification.md](docs/verification.md) contains historical results from the original scaffold, personal-content import, and CLI/pause changes. The last recorded CLI baseline had 17 passing browser checks plus the then-current lint/types/build checks.

Those runs PRECEDE the owner-triggered-only testing workflow and subsequent PDF, SEO, avatar/portrait, hero, learning, impact, image optimization, metadata, and deployment-guard changes. They do not verify the current tree. Some older notes describe the removed public DOCX, sample routes, or earlier layouts; read them as history.

- All new pending checks belong in [ToTest.md](ToTest.md), not duplicated as completed tasks.
- Do not rely on any existing `out`, `.next`, screenshots, or test artifacts as a fresh export of the current source.
- No new test/lint/type/build/browser/Lighthouse/audit results were produced during the latest edits or this documentation checkpoint.
- A previous attempt to review the live domain could not access it through the web reader, and the in-app browser was unavailable. No current visual/mobile/performance rating was independently established.
- When the owner explicitly requests verification, use the queued checks. Existing test assertions may need updating for intentionally changed controls/assets; distinguish obsolete expectations from real regressions and record actual outcomes.

## Useful commands - only run the ones the owner requests

PowerShell may block the unsigned npm.ps1 wrapper. Use `npm.cmd`; no machine-wide execution-policy change is necessary.

```powershell
cd D:\Learning\Portfolio\apps\web
npm.cmd ci                  # Only when dependencies need installing.
npm.cmd run dev             # Local editing preview; http://127.0.0.1:3000.
npm.cmd run assets:prepare  # Manual asset generation; requires root PNGs.
```

When the owner requests verification, the existing commands are `npm.cmd run lint`, `npm.cmd run typecheck`, `npm.cmd run format:check`, `npm.cmd run build`, and `npm.cmd test`. For an explicitly requested exported preview, run the build first, then `npm.cmd run preview` (http://127.0.0.1:4173). Tests target the static export; a development server alone does not establish static-host compatibility. Follow README.md for browser setup.

## Files to change for the next task

| Need | Main files |
|---|---|
| Profile/career/contact/impact data | `apps/web/src/data/portfolio.ts` |
| New courses/earned credentials | `apps/web/src/data/learning.ts` |
| Project entries and collection brief | `apps/web/src/content/projects.ts`, `docs/project-case-study-template.md` |
| Home/hero/impact/CTAs | `apps/web/src/app/page.tsx` |
| About and learning rendering | `apps/web/src/app/about/page.tsx`, `src/components/learning-section.tsx` |
| Avatar/navigation | `apps/web/src/components/site-header.tsx` |
| CLI and shared styles | `apps/web/src/components/cli-intro.tsx`, `src/app/globals.css` |
| Favicon | `apps/web/src/app/icon.svg` |
| Page metadata/indexing | `apps/web/src/lib/metadata.ts`, `src/app/layout.tsx`, individual page metadata |
| Image regeneration/social graphic | `apps/web/scripts/prepare-assets.mjs`, `apps/web/assets/portfolio-card.svg`, `apps/web/public/images/`, `public/social/` |
| Hosting instructions and build env | `docs/deployment.md`, `apps/web/.env.example` |
| Pending checks and canonical task status | `ToTest.md`, `spec.md` |

Paths abbreviated with `src/` or `public/` in the table are relative to `apps/web`.

## Next steps when we resume

1. Read this snapshot and inspect the current branch/tree. Review the latest local changes with the owner; do not assume they are committed, deployed, or verified.
2. Help finish preview/production settings using the existing Cloudflare Pages project when the owner resumes that task. Actual dashboard configuration and deployment verification remain outstanding.
3. Run relevant queued checks only if the owner explicitly asks. Priority coverage: homepage navigation/downloads, metric context, phone/tablet/desktop layout, CLI pause/reduced motion, WebP/social assets, per-route metadata, preview noindex, production opt-in, PDF, HTTPS, and canonical redirects.
4. Review selected project notes, completed/current learning, and practice content; run queued route/layout checks only when requested. Collect specific AWS course titles and optional credential/profile links when supplied. Final public-content review remains outstanding.
5. Discuss further animation only when requested; backend remains deferred.

The earlier checkpoint changed documentation only. The latest owner-selected-project update changes runtime content, presentation, routes, and the sitemap as described above; hosting and Git history are unchanged. Record actual verification separately and preserve the owner's testing preference.
