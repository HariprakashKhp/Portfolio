# Changes awaiting testing

Run tests only when the owner requests them. After each change, add an unchecked entry describing the change, affected files, and what to check later. Record actual results when testing is requested; mark only successfully checked entries complete.

Requirements and implementation tasks remain in [spec.md](spec.md). This file is the testing queue.

## 2026-11-16

- [ ] **Refresh the downloadable resume PDF and publishing instructions**
  - Changed: replaced the public resume with the owner's updated root Hari_Prakash_K_Resume.pdf. Existing download links keep /resume/Hari_Prakash_K_Resume.pdf. Added publishing steps for the existing GitHub repository and Cloudflare Pages project, plus repeatable PDF replacement instructions.
  - Files: apps/web/public/resume/Hari_Prakash_K_Resume.pdf, docs/deployment.md, spec.md, PROJECT_NOTES.md, ToTest.md.
  - Check later: Home and Resume downloads open the latest PDF and match the root source; a fresh export includes the updated asset. After publishing, confirm the production deployment contains the intended commit and download the PDF from the custom domain in a fresh browser session. Review preview/production build settings and indexing behavior when requested.
  - Status: implemented — testing deferred. No tests, lint/type checks, builds, browser checks, commits, pushes, deployments, or DNS changes performed.

## 2026-10-27

- [ ] **About and Experience refresh from Home and Projects**
  - Changed: refreshed both route introductions/descriptions, About biography, evaluation skills, and cloud/delivery context. Added a shared compact project overview on both routes, sourced from the same Twin/BugFixer/DeepEval summaries, contexts, statuses, and slugs as Home/Projects. Experience now shows the same 30% latency and 35% token/cloud-cost outcomes as Home through a shared ImpactHighlights component, retaining employer/role attribution. Personal projects remain separate from Odessa achievements; existing chronology, architecture, professional-development paragraphs, courses, education, practice profiles, gym, and contact/resume data are retained.
  - Files: apps/web/src/app/about/page.tsx, apps/web/src/app/experience/page.tsx, apps/web/src/app/page.tsx, apps/web/src/app/globals.css, apps/web/src/data/portfolio.ts, apps/web/src/components/project-overview.tsx, apps/web/src/components/impact-highlights.tsx, Agent.md, DESIGN.md, docs/content-source.md, spec.md, PROJECT_NOTES.md, ToTest.md.
  - Check later: About/Experience show the current role/employer and match Home's experience summary. Confirm project titles, summaries, contexts, and statuses match Projects exactly; each title and overview action navigates correctly. Verify the Prototype/In progress/Evaluation lab labels and professional RAGAS versus independent DeepEval/pytest/AWS scope remain clear, without new deployment/repair/score claims. Home's impact markup/content should remain equivalent; Experience must preserve 30%/35% role attribution and the individual scope of the existing 80% delivery claim. Check education, courses, practice links, gym, Odessa architecture privacy, and employer dates remain intact. At 360/768/1440px and zoom, review heading hierarchy, long linked titles, status wrapping, impact columns, page length/spacing, keyboard focus/44px link targets, and absence of horizontal overflow. Run relevant format/lint/type/build and static route/browser checks only when requested.
  - Status: implemented — testing deferred. No tests, lint/type/formatter checks, builds, browser checks, audits, deployment, or Git publication performed.

## 2026-10-26


- [ ] **Coding profiles, personal routine, client ownership, and Odessa architecture**
  - Changed: linked the owner-supplied LeetCode and NeetCode profiles within the brief About practice paragraph, without counts or a standalone section. Added daily gym attendance and independent client-call leadership, delivery decisions, responsibility, and travel for forward-deployed engineering work. Experience now includes a generalized customer-portal architecture summary and renders Professional development as ordinary full-width paragraphs instead of the narrow 62ch list. Added /architecture.html to .gitignore; the detailed source remains local and is not imported, embedded, copied to public assets, or linked.
  - Files: .gitignore, apps/web/src/data/portfolio.ts, apps/web/src/app/about/page.tsx, apps/web/src/app/experience/page.tsx, apps/web/src/app/globals.css, Agent.md, DESIGN.md, README.md, docs/content-source.md, spec.md, PROJECT_NOTES.md, ToTest.md.
  - Check later: correct profile hrefs, clear link styling and visible keyboard focus, practice shown once without counts, and gym wording. Confirm client leadership/FDE wording reflects the owner's statement without invented names, dates, destinations, outcomes, or extra metrics. Review the architecture summary against the source and resume: no client identifiers, internal URLs, credentials, detailed topology, unconfirmed Azure deployment, capacity targets, or SLO claims appear in public output; detailed architecture.html must stay Git-ignored and absent from a fresh export. Verify professional work stays on Experience, separate from personal Projects. At 360/768/1440px and zoom, confirm natural system-design paragraph wrapping, section hierarchy/spacing, no overflow, and unchanged course/contact/resume content. Run relevant lint/type/build/route checks only when requested.
  - Source note: the public LeetCode page was readable, while the web reader could not access the NeetCode page. Both links use exactly the owner-supplied destinations; no profile statistics were imported. Destination/browser behavior remains pending.
  - Status: implemented — testing deferred. No tests, lint/type checks, builds, browser checks, audits, deployment, or Git publication performed. Supersedes the earlier unlinked-practice and Professional development list-layout expectations below.

- [ ] **Full project architecture diagrams**
  - Changed: replaced three-component sketches with detailed typed component/data-flow maps for Twin, BugFixer, and DeepEval. Home/Projects cards now use full-width copy-then-diagram layouts; detail pages show the same diagram above notes with an index anchor. Added boundaries, routed/directional connections, feedback/configuration distinctions, readable SVG labels, contained keyboard-accessible scrolling, text equivalents in native details, and forced-colors styles. Source files were inspected; no projects were executed.
  - Files: apps/web/src/content/project-architectures.ts, apps/web/src/content/projects.ts, apps/web/src/components/project-architecture.tsx, apps/web/src/components/project-card.tsx, apps/web/src/components/project-case-study.tsx, apps/web/src/app/globals.css, Agent.md, DESIGN.md, README.md, docs/content-source.md, spec.md, PROJECT_NOTES.md, ToTest.md.
  - Check later: diagram routing/labels and node/edge relationships against linked repositories; no clipped/overlapping text, disconnected arrows, or ambiguous crossings. Verify full-width cards/detail placement at 1440/768/360px and zoom; diagrams scroll inside their region without page overflow; keyboard focus/arrow scrolling, visible scrollbars, details disclosure, image names/text equivalents, forced colors, reduced motion, unique SVG IDs/arrowheads, section links, and existing card/source links. Confirm no live deployment, automatic-repair success, or measured score is implied. Run lint/type/build and relevant route/browser checks only when requested.
  - Status: implemented — testing deferred. No tests, lint/type checks, builds, browser checks, screenshots, deployment, or Git publication performed. Supersedes the earlier small-diagram checks.

- [ ] **Brief About practice pointer and professional-development point**
  - Changed: replaced the separate LeetCode/NeetCode section and numeric counts with one About biography sentence: "I constantly practice problem solving on LeetCode and NeetCode." Added a shared professionalDevelopment field and an Experience-page point about learning system design/architecture through Hello Interview's YouTube channel and clearing system-design/problem-solving interview rounds. Reused the existing section/list styling and kept the point separate from employer achievements.
  - Files: apps/web/src/data/portfolio.ts, apps/web/src/data/learning.ts, apps/web/src/components/learning-section.tsx, apps/web/src/app/experience/page.tsx, apps/web/src/app/globals.css, Agent.md, DESIGN.md, README.md, docs/content-source.md, spec.md, PROJECT_NOTES.md, ToTest.md.
  - Check later: About includes the brief practice sentence once, without 500+/150 figures or a standalone practice section; course panels remain intact. Experience shows the professional-development point once after the employer history, with semantic heading/list structure and readable phone/desktop layout. Confirm no employer attribution, expert skill rating, interview count/date, company, or job offer is inferred. This supersedes the numeric-practice checks in the earlier course entry.
  - Status: implemented — testing deferred. No tests, lint/type checks, builds, browser checks, or deployment performed.

- [ ] **Completed courses, current study, and problem-solving practice**
  - Changed: populated eight owner-confirmed completed courses/programs (six AI entries including the IBM program, two web development courses), current DevOps/Docker/AWS studies, and LeetCode/NeetCode practice on About. Shared course lists show Completed versus In progress; title links use clean public catalog pages, with no coupons/lecture fragments/private list links. IBM is completed learning; earned-credential entries remain empty with no invented dates or verification links. AWS study remains generic pending specific course titles.
  - Files: apps/web/src/data/learning.ts, apps/web/src/components/learning-section.tsx, apps/web/src/app/globals.css, Agent.md, DESIGN.md, README.md, docs/content-source.md, spec.md, PROJECT_NOTES.md, ToTest.md.
  - Check later: six completed AI/program entries, two completed web entries, three current-study entries; correct grouping/status/provider/title links; AWS item has no private account URL; catalog links are not labeled as certificates. Check About's static HTML, heading order, long-title wrapping, keyboard focus/link targets, two-column/stacked layout at phone/tablet/desktop widths and zoom, and no empty earned-credential panel. Confirm 500+ is scoped to LeetCode problems solved; NeetCode says practiced with no full-completion claim or invented profile link. Verify no completion dates, credential links, certificate awards, or exam names were inferred.
  - Status: implemented — tests, lint/type checks, builds, browser checks, and deployment deferred under the owner-triggered workflow. Earlier empty-learning queue notes describe the previous state.

- [ ] **Owner-selected Twin, BugFixer, and DeepEval projects**
  - Changed: added repository-backed summaries and project notes for Twin (Prototype), BugFixer (In progress), and DeepEval (Evaluation lab / Learning exercise). Home and Projects share three cards with actual component labels. Added static detail routes, status notes, technology lists, GitHub links, per-project metadata, and sitemap entries. Updated contributor/design/content/spec/handoff documentation to supersede the empty-project requirement.
  - Files: apps/web/src/content/projects.ts, apps/web/src/components/project-card.tsx, apps/web/src/components/project-case-study.tsx, apps/web/src/app/page.tsx, apps/web/src/app/projects/page.tsx, apps/web/src/app/projects/[slug]/page.tsx, apps/web/src/app/globals.css, apps/web/public/sitemap.xml, Agent.md, DESIGN.md, README.md, docs/content-source.md, spec.md, PROJECT_NOTES.md, ToTest.md.
  - Check later: three cards on Home and Projects; consistent status labels; H2 card headings on Projects and H3 under the Home section; readable diagrams/tags and keyboard focus at phone/tablet/desktop widths and zoom. Check exported /projects/twin/, /projects/bugfixer/, and /projects/deepeval/ directly and on refresh, section anchors, back/source links, per-project canonical/social metadata, inherited preview noindex, sitemap coverage, and unknown-project 404 behavior. Confirm wording distinguishes source inspection from execution, planned repair work from implemented tooling, and evaluation configuration from measured scores.
  - Existing test maintenance: the old "projects stay empty" browser test is superseded; replace it with coverage for the selected projects and detail routes when testing is requested. Earlier queue references to empty Projects describe the previous state.
  - Status: implemented — testing deferred under the owner-triggered workflow. No tests, lint/type checks, builds, browser checks, deployment, or Git publication performed.

- [ ] **Documentation checkpoint for resuming later**
  - Changed: added PROJECT_NOTES.md covering the full implementation, owner decisions, current feature branch/working-tree snapshot, file/asset map, historical versus pending checks, live-site/deployment boundary, commands, and next steps. Linked it from Agent.md and README.md, refreshed spec status/task/next-step notes, and labeled docs/verification.md as historical evidence.
  - Files: PROJECT_NOTES.md, Agent.md, README.md, spec.md, docs/verification.md, ToTest.md.
  - Check later: handoff links and facts still match the working tree when resuming; historical 17-test results are not presented as verification of later edits; uncommitted/untracked files are preserved; owner-triggered-only testing and pending Cloudflare/content tasks remain clear.
  - Status: documentation only; no runtime source changes, tests, builds, browser checks, Git mutations, deployment, or DNS changes performed for this checkpoint.

- [ ] **Homepage priorities and compact unfinished sections**
  - Changed: hero actions now lead to Experience and Contact. Added 30% API-latency and 35% token/cloud-cost highlights from the existing resume-backed data, retaining employer/role attribution. Replaced the large empty project feature with a short note; real projects still render the existing feature. Home closes with Contact and a PDF download. Empty Projects offers View experience. Empty courses/certifications show a compact overview; full panels appear when entries exist. Added a project brief template without publishing sample work.
  - Files: apps/web/src/app/page.tsx, apps/web/src/app/projects/page.tsx, apps/web/src/data/portfolio.ts, apps/web/src/components/learning-section.tsx, apps/web/src/app/globals.css, docs/project-case-study-template.md, docs/content-source.md, README.md, Agent.md, DESIGN.md, spec.md.
  - Check later: hero/contact/experience/PDF destinations; correct metric wording and role attribution; two impact columns stack on phones; compact empty states do not create excess gaps; full project and learning layouts return when real entries are supplied. Review headings, keyboard focus, CLI pause/reduced motion, long labels and mobile/zoom reflow. Projects/courses/earned credentials remain empty.
  - Status: implemented - no tests, lint/type checks, builds, browser checks, or deployment performed.

- [ ] **Optimized images and social sharing**
  - Changed: generated a 192px avatar WebP (8,972 bytes), 900px desktop portrait WebP (51,492 bytes), and 480px phone portrait WebP (20,156 bytes) from unchanged root PNGs. Removed superseded public PNG copies and updated the header/CSS. Generated a 1200x630 branded social PNG (38,645 bytes) and editable SVG; added manual assets:prepare script using Next's existing Sharp dependency. Added shared metadata and route-specific social titles/descriptions/canonical URLs across all six primary routes.
  - Files: apps/web/public/images/*.webp, removed apps/web/public/images/hari-avatar.png and hari-portrait-line-art.png, apps/web/public/social/portfolio-card.png, apps/web/assets/portfolio-card.svg, apps/web/scripts/prepare-assets.mjs, apps/web/package.json, apps/web/src/components/site-header.tsx, apps/web/src/app/globals.css, apps/web/src/lib/metadata.ts, apps/web/src/app/layout.tsx, apps/web/src/app/{about,experience,projects,resume,contact}/page.tsx, README.md, DESIGN.md, spec.md.
  - Check later: exported asset URLs and image content types; avatar crop/sharpness at high pixel densities; subtle desktop/mobile portraits and original opacity/containment; no references to removed PNG URLs; original root PNGs remain intact. Confirm each route's canonical/og:url/title, absolute social image URL, image dimensions/alt text, Twitter card, and actual messaging/LinkedIn previews after deployment. Check transfer size and performance only when requested. Regeneration needs the two root sources and Next's optional Sharp dependency.
  - Status: assets generated and source updated; website tests, builds, browser checks, and live sharing checks deferred.

- [ ] **Preview versus production indexing guard**
  - Changed: Cloudflare builds enable indexing only when ALLOW_INDEXING=true and CF_PAGES_BRANCH matches PRODUCTION_BRANCH (default main). Preview or missing branch names remain noindex. Documented Production/Preview environment values and the existing Pages project's branch settings; no provider settings changed.
  - Files: apps/web/src/lib/metadata.ts, apps/web/src/app/layout.tsx, apps/web/.env.example, docs/deployment.md, README.md, Agent.md, spec.md.
  - Check later when authorized: local/default noindex; Pages main with opt-in allows indexing; feature/missing branch remains noindex even with opt-in true; custom production branch works only when both settings match. Review actual Cloudflare branch/env settings, preview header protection, custom-domain canonicals, and a fresh remote deployment. Dashboard setup remains the owner's task.
  - Status: repository implementation and instructions complete; no builds, provider mutations, or live checks performed.

- [ ] **Compact hero: remove the generic flow chart and excess spacing**
  - Changed: removed SystemFigure from Home and replaced the vertically centered two-column hero with one content column. Removed the diagram's 13rem top offset and unused hero-specific responsive diagram rules. Reduced hero top/bottom padding to 2rem/3.5rem on desktop and 1.5rem/3rem on phones. The faint portrait background now fits the hero's content height. Updated design/spec and contributor guidance to retain this direction.
  - Files: apps/web/src/app/page.tsx, apps/web/src/app/globals.css, Agent.md, DESIGN.md, spec.md, ToTest.md.
  - Check later: no flow chart or reserved diagram column on Home; introduction starts close below navigation at desktop/tablet/phone widths; readable text measure and working action links; portrait stays subtle and inside the hero, including at text zoom; CLI typing/pause/reduced-motion behavior and mobile menu remain usable. Supersedes the diagram placement described in the earlier portrait identity entry.
  - Status: implemented - testing deferred as requested. No tests, builds, browser checks, or deployment performed.

- [ ] **Subtler portrait backgrounds**
  - Changed: reduced desktop hero portrait opacity from 28% to 8% and About from 18% to 6%; phone values reduced from 13% to 5% and 11% to 4%, respectively. Updated the design direction to retain this barely visible treatment.
  - Files: apps/web/src/app/globals.css, DESIGN.md, ToTest.md.
  - Check later: portrait feels subtle on both pages at desktop and phone widths, with readable foreground text and the existing edge fades.
  - Status: implemented — testing deferred as requested. No tests, builds, or browser checks run.

- [ ] **About: Courses & Certifications**
  - Changed: added a section after Education with Online courses and Certifications panels. The course panel shows Udemy, LinkedIn Learning, and Coursera; the certification panel clearly labels AWS/AI intentions as planned. Separate typed arrays remain empty until the owner supplies details. Rendering supports course summaries/completion dates and earned credential issue/expiry dates, with links shown only when supplied. Documented where to add future content and the boundary between learning plans and earned credentials.
  - Files: apps/web/src/data/learning.ts, apps/web/src/components/learning-section.tsx, apps/web/src/app/about/page.tsx, apps/web/src/app/globals.css, Agent.md, DESIGN.md, docs/content-source.md, spec.md, ToTest.md.
  - Check later: section appears once below Education; two columns on desktop stack on phones without overflow; heading hierarchy and platform labels are accessible; empty lists show honest notes without fake credentials or dead links. When real data is added, check titles/providers/dates, optional summary and expiry rendering, omitted missing links, actual certificate destinations, long-title wrapping, and keyboard focus. Confirm the section is included in the static export and adds no client-side state or backend dependency.
  - Status: implemented — testing deferred as requested. No tests, lint/type checks, builds, browser checks, audits, or deployment performed.

- [ ] **Portrait identity: header avatar, H icon, and hero/About backgrounds**
  - Changed: copied both supplied root PNGs unchanged into public/images. The shared header now shows a circular color avatar beside the name; the SVG website icon is a single H. The monochrome portrait becomes a faded line-art background through CSS inversion, screen blending, and a radial mask, confined to the homepage hero and About page. The homepage diagram sits lower beside the portrait; phone layouts use a subtler watermark and retain stacked content. Decorative backgrounds are hidden in forced-colors mode.
  - Files: apps/web/public/images/hari-avatar.png, apps/web/public/images/hari-portrait-line-art.png, apps/web/src/components/site-header.tsx, apps/web/src/app/icon.svg, apps/web/src/app/page.tsx, apps/web/src/app/about/page.tsx, apps/web/src/app/globals.css, DESIGN.md, spec.md, ToTest.md.
  - Check later: avatar crop and sharpness beside the name; header/menu layout and keyboard focus on phone/tablet/desktop; H favicon after browser cache refresh; portrait visibility and text contrast with CSS masks/screen blending in supported browsers; no background bleed into other homepage sections or other routes; no horizontal overflow or layout shift; diagram spacing and CLI pause/reduced-motion behavior; forced-colors readability. Check static asset URLs and image transfer cost in an exported preview. Root originals should remain intact.
  - Status: implemented — testing deferred as requested. No tests, lint/type checks, builds, browser checks, audits, or deployment performed.

- [ ] **Owner-triggered testing workflow**
  - Changed: Agent.md now defers automatic testing and verification during routine edits; every change must be recorded here.
  - Files: Agent.md, ToTest.md.
  - Check later: future edits are logged in this queue, checks run only when requested, and untested changes are not reported as verified.
  - Status: testing deferred as requested. No website behavior changed.

- [ ] **Launch preparation: sitemap, robots, and indexing**
  - Changed: added static sitemap.xml for six real routes and robots.txt allowing crawling; metadata now uses ALLOW_INDEXING for indexing and allows link following.
  - Files: apps/web/public/sitemap.xml, apps/web/public/robots.txt, apps/web/src/app/layout.tsx, apps/web/.env.example, apps/web/scripts/preview.mjs.
  - Check later: both files serve at their root URLs with correct content types; sitemap contains only real canonical URLs; default/preview builds emit noindex; production built with ALLOW_INDEXING=true permits indexing. Changing the environment requires a new build/deployment.
  - Status: implemented — testing deferred as requested.

- [ ] **Remove the footer progress badge**
  - Changed: removed “Portfolio in progress” from the shared footer; Projects remains intentionally empty.
  - Files: apps/web/src/components/site-footer.tsx.
  - Check later: footer layout on phone/desktop and absence of the badge across routes.
  - Status: implemented — testing deferred as requested.

- [ ] **Switch the resume download to the supplied PDF**
  - Changed: copied the owner's PDF into public/resume, updated the selected path/format, removed the obsolete public DOCX copy, and updated the existing browser test's expected asset.
  - Files: apps/web/public/resume/Hari_Prakash_K_Resume.pdf, apps/web/src/data/portfolio.ts, apps/web/tests/portfolio.spec.ts; old apps/web/public/resume/Hari_Prakash_K_Resume.docx removed.
  - Check later: the PDF link/download, suggested filename, content type, PDF viewing, and correct bytes; the old DOCX URL should not be served after a fresh export. Original root DOCX/PDF files must remain intact.
  - Status: implemented — test source updated but not run. No PDF rendering or builds performed.

- [ ] **Git ignore rules and CI/CD preparation**
  - Changed: expanded .gitignore, selected Node 24, and wrote the Cloudflare Pages GitHub integration guide and production/preview environment instructions.
  - Files: .gitignore, apps/web/.node-version, docs/deployment.md, Agent.md, README.md, spec.md, docs/content-source.md.
  - Check later after owner git init: dependencies, caches, builds, logs, secrets and root resume originals are excluded; package-lock.json, .env.example, .node-version and the public PDF remain trackable. After owner Cloudflare setup, review clean remote dependency install/build, preview versus main deployment, DNS/HTTPS, www redirects and indexing settings.
  - Status: preparation implemented — no Git operations, tests, builds, deployment, or DNS changes performed by the agent.
