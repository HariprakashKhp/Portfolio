# Developer Portfolio — Static Frontend Specification

Last updated: 2026-10-26
Current stage: personal content populated from the supplied resume; Projects intentionally empty. Homepage CLI typing/deleting loop implemented. Sitemap, robots, PDF download, footer cleanup, Git ignore rules, and CI/CD instructions are implemented, awaiting requested testing. Deployment remains pending.

## 1. Objective and scope

Build a professional portfolio showcasing backend engineering, Python, Generative AI, RAG, and Agentic AI experience through clear, evidence-based content and project case studies.

The first release is a **static frontend only**. It must run without a backend, database, API key, authentication, or external content service. AI and backend skills are subjects of the portfolio content; an operational AI assistant is deferred.

The owner has already purchased hariprakash.in. Connecting that domain is part of the launch plan; purchasing another domain is unnecessary. Registrar/DNS and hosting details still need to be recorded. Canonical metadata uses https://hariprakash.in; the site defaults to noindex until ALLOW_INDEXING=true is configured for the production build and redeployed.

### First-release scope

- Home, About, Experience, Projects, Resume, and Contact.
- Projects remain empty at the owner's request until new work is ready. Individual static case studies are a later addition.
- A blog only when real articles are available; otherwise omit it from navigation and launch scope.
- Responsive layouts, accessible interactions, subtle motion, SEO, and optimized assets.
- Local content files and a working download of the supplied resume (owner-supplied PDF; verification pending).
- Static deployment, HTTPS, and the existing custom domain.

### Deferred scope

Do not implement FastAPI, LangGraph, LLM integration, retrieval, a vector database, chatbot UI, serverless functions, contact-form processing, admin tools, or conversation storage in this release.

The owner approved a homepage CLI loop above the main heading: type the name, pause, delete, then repeat with the short current role and location. The cursor blinks continuously. Reserve space for the longest phrase, provide a keyboard-operable Pause control, expose static accessible text without repeated announcements, and show the complete static name under reduced motion. Other animations remain deferred.

## 2. Technical approach

Retain the original specification's frontend stack, with build-time rendering and static export.

| Concern | Planned approach |
|---|---|
| Framework | Next.js with TypeScript and App Router |
| Output | Exported HTML, CSS, JavaScript, and assets; no production application server |
| Styling | Tailwind CSS; use shadcn/ui only for components that are needed |
| Animation | CSS first; add Motion only for interactions that justify it |
| Content | Typed local data and Markdown; processed during the build |
| Hosting | Cloudflare Pages, retained from the original plan; verify current deployment requirements before setup |
| Domain | Owner's existing hariprakash.in domain; DNS and hosting pending |
| Source control and CI/CD | GitHub with Cloudflare Pages automatic builds, previews, and production deployments; owner setup pending |
| Backend and database | None in the current release |

Next.js is a development/build tool here. The deployed artifact must be ordinary static files. Do not introduce request-time rendering, Server Actions, request-dependent route handlers, cookies, or API calls for core content. Generate every project/article route at build time. Use image handling compatible with static hosting rather than a runtime image optimizer.

Select supported package versions during setup and commit one package-manager lockfile. The proposed default package manager is npm. Record actual commands in README.md after scripts exist.

## 3. Visitor experience and content

Primary audience: recruiters, hiring managers, and engineering peers.

A visitor should quickly understand the owner's professional focus, experience, project evidence, and how to make contact.

| Route | Required content and behavior |
|---|---|
| / | Name, professional headline, concise introduction, featured projects, and working links to projects, resume, and contact |
| /about/ | Career background, engineering interests, working approach, and skills supported by evidence |
| /experience/ | Verified employers, roles, dates, responsibilities, and outcomes |
| /projects/ | Intentional empty state until the owner supplies new projects; no sample cards |
| /projects/[slug]/ | Deferred until real projects are provided; no placeholder detail routes |
| /resume/ | Professional overview and a link to the owner's supplied PDF; verification pending |
| /contact/ | Verified email link, GitHub, and LinkedIn; no submission form |
| /blog/ and /blog/[slug]/ | Optional: publish only when real, reviewed articles exist |
| /404.html | Helpful static not-found page with a route back home |

Treat route paths as the intended information architecture; verify the host serves exported routes directly and after refresh.

### Content rules

- Use owner-provided facts or verified source material. Do not invent employers, dates, metrics, ownership, certifications, production usage, or project results.
- Distinguish employment work from personal projects and learning exercises.
- Original-spec examples such as "AI Ticket RCA" and "Multi-Agent RAG" are illustrative, unverified examples, not confirmed projects.
- For each published project, capture: title, slug, summary, context, role/contribution, stack, status, case-study content, available links, and optional image/diagram.
- Keep draft placeholders clearly marked during development. Omit unavailable links and do not publish placeholder claims, empty articles, or buttons that do nothing.
- Store professional facts centrally so the homepage, experience, projects, and resume remain consistent.
- Keep the resume, contact details, project selection, and all public assets owner-approved before launch.

## 4. Design and accessibility

- Default visual direction: professional dark theme with clear typography, restrained accent colors, and generous spacing.
- Build a mobile-first layout with usable navigation on narrow screens.
- Provide a consistent header, footer, active navigation, and prominent project/resume links.
- Use semantic HTML, meaningful heading order, a skip link, descriptive link text, and image alternatives.
- Support keyboard operation and visible focus; ensure menu state is announced correctly.
- Target WCAG AA text contrast and respect reduced-motion preferences.
- Verify layouts at approximately 360px, 768px, and 1440px widths with no horizontal overflow.
- Keep essential content readable without client-side interaction; hydrate only interactive components.
- Reserve image dimensions to reduce layout shifts and optimize image/font sizes.

## 5. Static architecture and repository layout

```text
Visitor -> Existing custom domain + HTTPS -> Static host/CDN
                                               |
                                    Exported HTML/CSS/JS/assets
                                               |
                                    Content generated at build time
```

The frontend lives in apps/web. DESIGN.md records the shared visual direction. The structure below includes both implemented files and later additions explicitly marked as planned:

```text
Portfolio/
├── Agent.md                 # Canonical contributor/agent instructions
├── AGENTS.md                # Entry point pointing to Agent.md
├── spec.md                  # Requirements and canonical task checklist
├── DESIGN.md                # Visual direction and runtime token mapping
├── README.md                # Setup, commands, and local preview
├── apps/
│   └── web/
│       ├── src/
│       │   ├── app/         # Routes, shared layout, metadata
│       │   ├── components/  # Shared UI and sections
│       │   ├── content/     # Project case studies and optional articles
│       │   ├── data/        # Typed profile, experience, skills, project summaries
│       │   └── lib/         # Planned if content helpers become necessary
│       ├── public/          # Planned for approved PDF and project images
│       ├── scripts/         # Static preview server
│       ├── tests/           # Browser and accessibility checks
│       └── package.json
├── docs/
│   ├── verification.md      # Local skeleton verification evidence
│   └── deployment.md        # Planned: hosting, domain and rollback instructions
└── .github/
    └── workflows/           # Planned: frontend CI
```

Do not scaffold apps/api, shared API contracts, backend dependencies, or monorepo orchestration for anticipated future work.

## 6. SEO, validation, and release quality

- Add page titles, descriptions, favicon, social preview metadata, sitemap, and robots configuration.
- Set canonical URLs and sitemap origins from the confirmed public domain. Keep preview URLs out of production metadata.
- Add structured data only when it accurately reflects verified public facts.
- Run lint, TypeScript checks, and a production static build.
- Preview the exported output using a static file server; the development server alone does not prove static hosting works.
- Check all routes, refreshes, assets, project links, contact links, and the resume download.
- Add focused browser smoke tests for navigation and key interactions; avoid tests that only mirror presentation markup.
- Review keyboard navigation, mobile menu behavior, reduced motion, and representative mobile/desktop screenshots.
- Record Lighthouse accessibility, SEO, and performance results on a production preview; fix material issues and document remaining limitations. Use a mobile performance score of 90 as a target, not an unmeasured claim.

## 7. Hosting and existing custom domain

The hosting objective remains ₹0/month for static infrastructure where current provider eligibility and usage allow it. This is a target, not a verified price guarantee. Domain purchase and renewals are separate owner costs.

The implementation should remain portable to another static host. Do not require a Worker, Node server, or paid service.

### Information to confirm before domain configuration

| Item | Current status |
|---|---|
| Domain ownership | Already purchased, per owner |
| Exact hostname | hariprakash.in, confirmed by owner |
| Registrar and authoritative DNS provider | Pending |
| Preferred canonical host: apex or www | Metadata uses the supplied apex hostname; DNS/redirect behavior remains to be confirmed |
| Hosting account and repository | Pending |
| Existing DNS records or email service to preserve | Pending |
| Current hosting quotas and custom-domain requirements | Verify during deployment setup |

### Deployment requirements

- Confirm the provider's current static deployment workflow and free-tier limits before configuring it.
- Configure the web app's build root, actual build command, and actual export directory after scaffolding. Planned output: apps/web/out.
- Deploy and validate a preview before connecting the existing custom domain.
- Follow the hosting provider's domain instructions; preserve unrelated DNS records, especially email records.
- Verify domain ownership, DNS resolution, HTTPS certificate issuance, and apex/www behavior. Choose one canonical host and redirect the alternate if both are configured.
- Update production canonical URLs and sitemap, then verify nested routes, assets, resume downloads, and the 404 page on the real domain.
- Document redeployment and rollback to a previously working static artifact.
- Record deployment as complete only after live checks succeed.

## 8. Ordered task list

This checklist is the canonical progress tracker. Mark a task complete only when its stated result exists and has been verified. Record evidence or blockers beneath the affected task.

### Phase 0 — Scope and planning

- [x] DOC-01: Read the existing spec and identify frontend/backend scope.
- [x] DOC-02: Update this specification for a static frontend and the already purchased domain.
- [x] DOC-03: Create Agent.md and an AGENTS.md entry point with shared implementation guidance.

### Phase 1 — Content and foundation

- [x] FE-01: Inventory approved profile facts, experience, project candidates, links, and resume. Result: resume-backed facts imported; Projects intentionally left empty by owner instruction.
- [x] FE-02: Initialize apps/web with Next.js, TypeScript, Tailwind, npm scripts, a lockfile, and sensible ignore rules. Result: local development and documented validation commands work.
- [x] FE-03: Configure static export and static-compatible asset handling. Result: a production build produces output that can be served without an application server.
- [x] FE-04: Define typography, colors, spacing, shared layout, header/footer, and responsive navigation. Result: the shell works on mobile and desktop with keyboard support.
- [x] FE-05: Add typed local content models and build-time loading. Result: page content comes from reusable local files without runtime API dependencies.

The original skeleton verification is recorded in docs/verification.md. Personal content now comes from Hari_Prakash_K_Resume.docx. Updated checks cover the six populated primary routes, empty Projects behavior, the original resume download, contact preferences, and canonical metadata; see the content-update evidence in that document.

Dependencies: FE-02 precedes FE-03 through FE-05. Content collection can proceed alongside scaffolding; missing facts must not be invented.

### Phase 2 — Portfolio pages

- [x] FE-06: Build Home with a clear headline, personal introduction, resume/contact navigation, and an intentional Projects empty state.
- [x] FE-07: Populate About and Experience with resume-backed roles, achievements, education, and grouped skills.
- [x] FE-08: Implement the Projects page and reusable cards; keep the data empty and show no invented links or sample cards.
- [ ] FE-09: Deferred by owner: add static case-study routes after the new projects are ready.
- [ ] FE-10: Resume now points to the supplied PDF; Contact remains email/GitHub/LinkedIn only. Implemented — awaiting testing; see ToTest.md.
- [ ] FE-10A: Supplied PDF copied into public assets and selected for download. Implemented — awaiting PDF download/viewing checks in ToTest.md.
- [x] FE-11: Add the not-found page and intentional empty states. Decide whether real articles justify adding Blog; otherwise omit Blog.
- [ ] FE-12: Review all visible copy and public assets with the owner. Result: no fabricated claims, draft placeholders, or dead controls remain.

Dependencies: new owner-provided project content is needed for FE-09; the final public-content review remains FE-12.

Content status: name/headline, Bengaluru location, three Odessa roles, resume achievements, skills, education, email, and professional links are populated. Root DOCX/PDF originals are preserved and ignored by Git. The public download is now the supplied PDF; the old public DOCX copy is removed. Projects has no entries, including no digital-twin or sample case study. Blog is omitted. The footer progress badge is removed. Indexing defaults off; production can opt in with ALLOW_INDEXING=true. Sitemap/robots are added. Domain metadata is configured, while public deployment is pending.

### Phase 3 — Polish and verification

- [ ] FE-13: Sitemap, robots, and production-only indexing configuration are implemented — awaiting testing in ToTest.md. Social preview imagery remains a separate unfinished item.
- [ ] FE-14: Complete responsive, keyboard, contrast, reduced-motion, and image/font optimization checks.
- [x] FE-15: Run lint, type checks, focused browser smoke checks, link/download checks, and the static production build. Result: formatting/lint/types/build passed; 14 browser checks passed, including the real DOCX download. Evidence: docs/verification.md.
- [ ] FE-16: Inspect the exported site in a static preview, capture representative screenshots, and record Lighthouse results and remaining issues.
- [ ] FE-17: Use Cloudflare Pages GitHub integration for automatic build/deploy and branch previews. Instructions are in docs/deployment.md; owner setup and remote verification are pending. Tests are opt-in; no Actions workflow is required for this approach.
- [ ] FE-18: Later phase, deferred by owner: discuss and add purposeful animations with reduced-motion support after content work.
- [x] FE-18A: Extend and verify the homepage CLI animation as a repeating name/role/location typing-and-deleting loop, with continuous cursor blinking, a working Pause control, stable desktop/mobile layout, and a reduced-motion fallback. Evidence: 17 browser checks passed, including the full loop, deletion, keyboard pause/resume, no-JavaScript pause, and unchanged heading geometry.

Dependencies: page implementation precedes final verification. Repeat affected checks after fixes rather than broadening into unrelated work.

### Phase 4 — Hosting and custom-domain launch

- [ ] DEP-01: Confirm hostname, registrar/DNS provider, hosting account, repository, canonical host, and existing records to preserve.
- [ ] DEP-02: Verify current hosting requirements and quotas; configure the static build and deploy a preview. Result: exported routes, assets, and downloads work on the host.
- [ ] DEP-03: Connect the existing custom domain and verify DNS, HTTPS, and canonical redirects. Result: live checks succeed on the chosen hostname.
- [ ] DEP-04: Recheck production metadata, sitemap, deep links, 404 behavior, and resume download on the real domain.
- [ ] DEP-05: Step-by-step CI/CD, custom-domain, indexing, and rollback instructions are written in docs/deployment.md. Record actual account configuration and verification evidence after owner setup.

Dependencies: DEP-01 and a verified frontend build precede domain configuration. Deploying and changing DNS are later tasks, not part of this documentation update.

## 9. Definition of done

The static frontend release is complete when:

- Required portfolio pages contain reviewed, accurate content. Projects may remain intentionally empty until the owner supplies new work.
- Mobile and desktop layouts, keyboard navigation, and reduced-motion behavior have been checked.
- Resume, project, contact, and social links work; no placeholder content or nonfunctional controls remain.
- The production artifact is entirely static and core content requires no backend/API service.
- Lint, type checks, the static build, and relevant smoke checks pass; results are recorded.
- SEO metadata and sitemap use the confirmed canonical hostname.
- The site works over HTTPS on the owner's existing custom domain, including direct links and refreshes.
- Setup, deployment, rollback, and known limitations are documented.

A working chatbot or backend is not a condition for this release.

## 10. Deferred AI/backend direction

The original long-term concept remains a recruiter assistant grounded in verified portfolio content. Candidate technologies from the original plan were Python/FastAPI, LangGraph, a configurable LLM provider, and local curated documents with lightweight keyword/BM25 retrieval.

When that phase is explicitly resumed, revisit hosting, provider availability, security, usage limits, retrieval evaluation, and operational costs. Preserve the static site's independent availability. These are future design candidates, not approved dependencies or current tasks.

## 11. Immediate next step and open inputs

Review the populated personal pages, then add new projects when the owner is ready. Discuss additional animations in a later phase. Do not start backend work.

Remaining inputs for later tasks: new project descriptions, contribution/stack/results and public links; registrar/DNS and hosting details; and animation preferences when that phase begins. Domain confirmed: hariprakash.in. Contact preference confirmed: email, GitHub, LinkedIn only.
