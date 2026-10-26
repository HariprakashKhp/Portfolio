# Changes awaiting testing

Run tests only when the owner requests them. After each change, add an unchecked entry describing the change, affected files, and what to check later. Record actual results when testing is requested; mark only successfully checked entries complete.

Requirements and implementation tasks remain in [spec.md](spec.md). This file is the testing queue.

## 2026-10-26

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
