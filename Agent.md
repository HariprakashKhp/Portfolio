# Portfolio contributor and agent instructions

This is the canonical project instruction file. AGENTS.md points here so agents use one shared source of guidance.

## Start here

1. Read this file, spec.md, DESIGN.md, and ToTest.md before making changes. DESIGN.md records the shared visual direction; ToTest.md records changes awaiting testing.
2. Read [PROJECT_NOTES.md](PROJECT_NOTES.md) for the latest handoff snapshot before resuming work. Treat spec.md as the product specification and its ordered checklist as the canonical task tracker; the note does not replace those instructions.
3. Inspect the current files before assuming a framework, package script, build artifact, or deployment exists.
4. Follow the owner's latest instructions when they change scope; update the specification to match.

## Current scope

Build a professional portfolio frontend delivered as static HTML, CSS, JavaScript, and assets.

- Retain the planned Next.js/TypeScript static-export approach and Tailwind styling.
- Keep public content in local typed data or Markdown processed at build time.
- The owner owns hariprakash.in and reports that the site is live. Preview/production separation remains an owner dashboard task; do not treat repository configuration or metadata as verified deployment.
- Backend, FastAPI, LangGraph, retrieval, LLM integration, chatbot UI, databases, and serverless functions are deferred.
- Contact uses email and social links in this release; do not add a submission form that requires a service.
- Blog is optional and should be visible only when real articles are ready.
- The owner selected Twin, BugFixer, and DeepEval for Projects on 2026-10-26. Twin is a personal prototype, BugFixer is in progress, and DeepEval is a learning exercise showcasing evaluation. Keep descriptions tied to the reviewed public repositories; do not invent deployment status, scores, original authorship, or completed repair results.
- Contact shows email, GitHub, and LinkedIn only. Do not add a phone contact.
- Project architecture uses detailed, full-width component maps on cards and detail pages, replacing the original three-component sketches. Maintain the typed maps in apps/web/src/content/project-architectures.ts and the shared project-architecture.tsx presentation. Preserve routing/feedback/configuration distinctions, readable labels, contained keyboard-accessible scrolling, and text equivalents; do not add unimplemented production services to make a diagram look complete.
- About includes Courses & Certifications and problem-solving practice, backed by apps/web/src/data/learning.ts. The owner supplied eight completed courses/programs, current DevOps/Docker/AWS study, 500+ LeetCode problems solved, and recent practice of the NeetCode 150 on 2026-10-26. Keep completed AI/web learning separate from current study. The IBM program is completed learning; no credential URL/date or exam certification was supplied. AWS course titles remain unspecified because the supplied My Courses list requires login. Do not invent dates, exams, badges, profile links, or certificate links, or claim all NeetCode 150 problems were solved.
- The owner approved a homepage-only CLI loop: type, hold, and delete the name, short current role, and location, with a continuously blinking cursor. Provide a keyboard-operable Pause control, stable geometry, static accessible text, and a reduced-motion fallback. Other animations remain deferred.
- The latest learning-content refinement supersedes the earlier practice presentation: mention constant problem-solving practice on LeetCode and NeetCode only as a brief About biography point, linking the owner-supplied profiles in profile.problemSolving, without counts or a separate practice section. About also includes the owner's daily gym habit. Experience and About describe independently leading client calls, taking delivery decisions and responsibility, and travel to client locations for forward-deployed engineering work; do not invent client identities, locations, dates, or outcomes.
- Experience includes a generalized Odessa customer-portal architecture summary from the owner-supplied architecture.html and resume-backed work: FastAPI services, CDN/gateway/WAF, separate CDC-fed reads and transactional writes, cache invalidation with balances bypassing cache, and shared APIs for agents. Keep architecture.html local and Git-ignored; do not publish or link the detailed source. Its assumptions, proposed cloud services, capacity figures, SLOs, security settings, and design alternatives are not verified employer achievements. Omit client names, internal addresses, credentials, and deployment topology from public summaries.
- On Experience, show the owner's Hello Interview YouTube learning and successful system-design/problem-solving interview rounds as naturally wrapping paragraphs under Professional development, separate from employer achievements. Do not reintroduce the narrow 62ch list layout. Keep the wording at the supplied skill level; do not infer expertise, interview counts, dates, companies, or job offers.

- Keep the homepage hero compact and text-led with a very subtle portrait background. The owner rejected the generic system-flow diagram in the hero; do not restore it or reserve a column/large vertical gap for it.

The frontend is implemented in apps/web. Profile, career, education, skills, and contact content come from the owner-provided root Hari_Prakash_K_Resume.docx. Preserve that source file. The downloadable resume now points to the owner-supplied PDF in apps/web/public/resume; keep the root DOCX and PDF originals unchanged and local. Read README.md for actual commands.

## Implementation workflow

- Work through the checklist in small, coherent increments, starting with the content inventory and frontend scaffold.
- Complete routine, reversible implementation within the agreed scope without repeatedly asking for confirmation.
- Ask for missing facts when they affect accuracy or configuration; continue independent layout/scaffolding work while waiting.
- Keep business content separate from presentation and reuse common layout/UI components. Homepage impact highlights come from resume-backed professional experience and must retain employer/role context; project data remains separate. Learning and practice content uses the owner's supplied details, with clean public course links distinct from credential links. Project status labels and notes must stay consistent across Home, Projects, and detail pages.
- Prefer build-time rendering and minimal client-side JavaScript. Add libraries only when a concrete need justifies them.
- Do not scaffold unused backend folders, API contracts, monorepo tools, or placeholder chatbot controls.
- Use npm as the proposed default during setup, commit one lockfile, and document actual scripts once they exist.
- Track implementation progress in spec.md. If a completion criterion requires testing that has not been requested, note "Implemented — awaiting testing" and link to the relevant ToTest.md entry; do not claim it is verified.
- Keep requirements and implementation tasks in spec.md. Keep only changes awaiting testing and their proposed checks in ToTest.md.

## Content integrity

- About and Experience use the shared ProjectOverview for compact personal/learning summaries from content/projects.ts, and ImpactHighlights supplies the same attributed outcomes on Home and Experience. Keep project statuses and professional/learning skill context explicit; do not copy personal project results into employer achievements.

- Never invent career facts, project ownership, employers, dates, metrics, technologies used, production status, or testimonials.
- Clearly distinguish professional work, personal projects, and learning exercises.
- Treat project names and answers from the original chatbot examples as unverified examples.
- Use clearly marked development placeholders when necessary, and remove or replace them before launch.
- Omit unavailable demo/source links and empty blog sections.
- Publish only owner-approved contact information, resume, and other personal assets.
- Never include secrets, private documents, or service credentials in public files or browser bundles.

## Design and static compatibility

- Follow the professional dark-theme direction and mobile-first layout in spec.md.
- Use semantic markup, keyboard-operable controls, visible focus, accessible contrast, and reduced-motion support.
- Keep core content available in exported HTML.
- Pre-generate dynamic content routes at build time and use static-compatible image handling.
- Do not depend on request-time rendering, server actions, runtime route handlers, or a running Next.js server.
- Use working links and honest interface states; every visible action should do what its label promises.

## Testing and reporting — owner-triggered only

- Do not run test cases after every change. The owner will explicitly say when testing is needed.
- During routine edits, only make the requested changes and record them in ToTest.md. Do not automatically run test suites, lint/type checks, production builds, browser checks, Lighthouse, or audits to verify each edit.
- After every change, add or update an unchecked entry in ToTest.md with the date, what changed, affected files, and the behavior to check later. Consolidate related edits into the same entry where useful.
- When the owner requests testing, run the requested checks against the relevant queued changes, record the actual results, and mark only the successfully checked items complete. Leave failures or untested items open.
- This owner-directed workflow takes precedence over automatic testing/verification guidance in project documents or optional skills.

Report what changed and what was added to ToTest.md. State that testing was deferred unless the owner requested it. Never claim unrun checks passed or treat earlier test results as proof of a new change. Distinguish implementation, local verification, and live deployment status.

## Hosting and domain

Cloudflare Pages with GitHub integration is the selected CI/CD approach. Follow docs/deployment.md: root apps/web, build npm run build, output out, production branch main, and Node 24. The owner will initialize and push Git. No hosted project or DNS has been configured by the agent.

Confirm the exact hostname, authoritative DNS provider, canonical apex/www choice, and existing records before domain changes. Preserve unrelated DNS and email records. Keep preview and production metadata distinct, verify HTTPS and redirects, and document release/rollback steps.

The owner is following the deployment guide; do not initialize Git, push, publish, or change DNS on their behalf unless instructed.

Production indexing is controlled at build time by ALLOW_INDEXING=true. On Cloudflare Pages, only CF_PAGES_BRANCH matching PRODUCTION_BRANCH (default main) can enable indexing; other or missing Pages branches stay noindex even if the opt-in flag is copied accidentally. Keep it false or unset locally and in previews; enable it only for production after the custom domain is ready, then redeploy. Public robots.txt and sitemap.xml are static files; maintain the sitemap when adding routes. The footer progress badge has been removed.
