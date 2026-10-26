# Portfolio contributor and agent instructions

This is the canonical project instruction file. AGENTS.md points here so agents use one shared source of guidance.

## Start here

1. Read this file, spec.md, DESIGN.md, and ToTest.md before making changes. DESIGN.md records the shared visual direction; ToTest.md records changes awaiting testing.
2. Treat spec.md as the product specification and its ordered checklist as the canonical task tracker.
3. Inspect the current files before assuming a framework, package script, build artifact, or deployment exists.
4. Follow the owner's latest instructions when they change scope; update the specification to match.

## Current scope

Build a professional portfolio frontend delivered as static HTML, CSS, JavaScript, and assets.

- Retain the planned Next.js/TypeScript static-export approach and Tailwind styling.
- Keep public content in local typed data or Markdown processed at build time.
- The owner already owns hariprakash.in. DNS/hosting setup is still pending; do not treat metadata configuration as deployment.
- Backend, FastAPI, LangGraph, retrieval, LLM integration, chatbot UI, databases, and serverless functions are deferred.
- Contact uses email and social links in this release; do not add a submission form that requires a service.
- Blog is optional and should be visible only when real articles are ready.
- The owner requested that Projects remain empty until new work is ready. Do not seed sample projects or publish the resume's project as a case study without a later request.
- Contact shows email, GitHub, and LinkedIn only. Do not add a phone contact.
- The owner approved a homepage-only CLI loop: type, hold, and delete the name, short current role, and location, with a continuously blinking cursor. Provide a keyboard-operable Pause control, stable geometry, static accessible text, and a reduced-motion fallback. Other animations remain deferred.

The frontend is implemented in apps/web. Profile, career, education, skills, and contact content come from the owner-provided root Hari_Prakash_K_Resume.docx. Preserve that source file. The downloadable resume now points to the owner-supplied PDF in apps/web/public/resume; keep the root DOCX and PDF originals unchanged and local. Read README.md for actual commands.

## Implementation workflow

- Work through the checklist in small, coherent increments, starting with the content inventory and frontend scaffold.
- Complete routine, reversible implementation within the agreed scope without repeatedly asking for confirmation.
- Ask for missing facts when they affect accuracy or configuration; continue independent layout/scaffolding work while waiting.
- Keep business content separate from presentation and reuse common layout/UI components.
- Prefer build-time rendering and minimal client-side JavaScript. Add libraries only when a concrete need justifies them.
- Do not scaffold unused backend folders, API contracts, monorepo tools, or placeholder chatbot controls.
- Use npm as the proposed default during setup, commit one lockfile, and document actual scripts once they exist.
- Track implementation progress in spec.md. If a completion criterion requires testing that has not been requested, note "Implemented — awaiting testing" and link to the relevant ToTest.md entry; do not claim it is verified.
- Keep requirements and implementation tasks in spec.md. Keep only changes awaiting testing and their proposed checks in ToTest.md.

## Content integrity

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

Production indexing is controlled at build time by ALLOW_INDEXING=true. Keep it false or unset locally and in previews; enable it only for production after the custom domain is ready, then redeploy. Public robots.txt and sitemap.xml are static files; maintain the sitemap when adding routes. The footer progress badge has been removed.
