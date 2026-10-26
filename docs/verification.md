# Static skeleton verification

## Pause and play icons — 2026-10-26

The homepage control now shows two pause bars while running and a play triangle while paused, with no visible checkbox or text label. A transparent native input preserves keyboard and no-JavaScript operation. The control has a 44px target, an accessible name, a tooltip, and a parent focus ring. Reduced-motion behavior is unchanged.

Formatting, lint, type checks, static build, UI audit, and design lint passed. All 17 browser checks passed in 20.4 seconds, including both icon states, keyboard pause/resume, no-JavaScript interaction, and the full phrase cycle. Desktop and phone screenshots were visually inspected.

## Continuous CLI loop — 2026-10-26

The homepage now cycles through Hari Prakash K, Staff Engineer, and Bengaluru, India. Each phrase types for 1.5 seconds, holds for 2.5 seconds, deletes for 1.5 seconds, and leaves a short gap. The three phrases repeat every 18 seconds; the cursor blinks continuously. A native Pause checkbox freezes both animations and works with keyboard input and without JavaScript. All phrases are exposed once as static accessible text, while the changing visual text is hidden from assistive technology. Reduced motion displays the full static name and cursor. The longest phrase width is reserved to keep the heading stable. No JavaScript timer or dependency was added.

Formatting, lint, type checks, and production static build passed. Strict UI audit and DESIGN.md lint report zero errors or warnings. **17 browser checks passed in 17.6 seconds**, including every phrase, deletion, return to the name, paused animation times, keyboard resume, no-JavaScript pause, reduced motion, and unchanged heading position at 1440px and 360px. Desktop role and mobile name screenshots were visually inspected.

## Earlier single-pass CLI animation — 2026-10-26

The name above the homepage heading now uses a terminal prompt and a CSS-only stepped reveal. The full name remains in the HTML for assistive technology and no-JavaScript browsing. Its final width is reserved, so the heading does not move while typing. The name completes after 1.65 seconds including its initial delay; the cursor blinks four times and settles within 2.8 seconds. Reduced motion shows the complete name immediately with a static cursor. Other pages retain static branding; no animation dependency or timer was added.

Verification: formatting, lint, TypeScript, and production static build passed. **16 browser checks passed in 18.1 seconds**, including partial and completed states at 1440px/360px, unchanged heading geometry, reduced-motion behavior, and absence on the About page. Screenshots from `test-results/portfolio-homepage-CLI-types-once-without-moving-the-heading/` were visually inspected. Strict UI audit and DESIGN.md lint both report zero errors or warnings.

## Latest personal content update — 2026-10-26

The personal pages now use the supplied root `Hari_Prakash_K_Resume.docx`: name, headline, location, biography, three Odessa roles and their resume achievements, skills, education, email, GitHub, and LinkedIn. The contact page omits phone contact, and Projects is intentionally empty, as requested. Additional animations remain deferred.

The Resume page downloads an unchanged DOCX copy. Browser verification downloaded the file and compared its bytes with the root source; they match. Source and public-copy SHA-256 are recorded in `docs/content-source.md`.

The owner-confirmed domain `hariprakash.in` is used in canonical metadata for all six primary routes. Noindex remains active; no DNS/hosting changes or live deployment are claimed.

Latest checks:

- `npm.cmd run format:check`: passed.
- `npm.cmd run lint`: passed without warnings.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; all six primary routes and the custom 404 export statically.
- `npm.cmd test`: **14 passed in 25.8 seconds**, against the static export.
- Strict UI source audit: zero findings (`docs/ui-audit.json`).

The browser suite checks internal routes/links, canonical URLs, noindex, automated accessibility, 360px/768px reflow, keyboard/mobile navigation, no-JavaScript navigation, reduced motion, the custom 404, matching DOCX download, contact preferences, and the empty project list. It also confirms the removed sample project URL returns HTTP 404.

Fresh screenshots cover Home at 1440px/768px/360px and About, Experience, Contact, and Resume at 1440px/360px. Home and About on desktop and Experience and Contact on phone were visually inspected for longer real content, readable wrapping, and consistent styling.

An empty `generateStaticParams()` array is unsupported for a dynamic route with this Next.js static export. The project-detail route was removed while retaining its layout in `src/components/project-case-study.tsx`. When the owner supplies a real project, add a route wrapper generating that project's actual slug; do not seed a fictitious route to satisfy the build.

Remaining work includes owner review, future project content, an optional PDF, final SEO/CI, hosting/DNS, and later animation work. Lighthouse and real-device/manual screen-reader audits have not been run. The original source DOCX has not been changed.

## Historical skeleton baseline

Verified locally on 2026-10-26, on Windows with Node.js 24.19.0 and installed Microsoft Edge.

## Implemented scope

- Next.js 16.4.3, React 19.3.1, TypeScript, and Tailwind CSS with static export.
- Home, About, Experience, Projects, a labeled case-study layout preview, Resume, Contact, and a custom 404.
- Shared header/footer, responsive keyboard-operable navigation, skip link, reduced-motion rules, local fonts, and reusable page/card components.
- Typed local profile/project content; missing personal facts remain unset. No backend, chatbot, external runtime content service, fake PDF, or fabricated contact links.

## Evidence

Commands run from `apps/web`, unless noted:

| Check | Result |
|---|---|
| `npm run format:check` | Passed |
| `npm run lint` | Passed without warnings |
| `npm run typecheck` | Passed; route types are generated before TypeScript validation |
| `npm run build` | Passed; exported HTML and assets in `apps/web/out` |
| Development server smoke check | Homepage returned HTTP 200; owned server processes were stopped afterward |
| `npm test` | 12 passed in 19.0 seconds, against the static export |
| Strict premium UI source audit | 0 findings; machine-readable result in `docs/ui-audit.json` |
| Official DESIGN.md validator | 0 errors, 0 warnings |

Browser checks cover all seven content routes, internal static links, current navigation state, page errors, automated WCAG A/AA rules, 360px/768px reflow, mobile keyboard navigation and Escape, no-JavaScript navigation, reduced motion, and a real HTTP 404 with a working home link.

Homepage screenshots at 1440px, 768px, and 360px are generated in `apps/web/test-results/portfolio-reduced-motion-and-screenshots/`. Desktop and phone screenshots were visually inspected. These are local verification artifacts and are ignored by source control.

The first sandboxed test invocation passed every assertion but could not terminate its own Windows preview process tree. After stopping that owned process, the suite was rerun with process permissions and exited cleanly with all 12 checks passing. No production code workaround was needed.

The source audit can be rerun from the repository root with the installed frontend-design-premium skill's `scripts/audit_project.py`, using `--mode strict --output docs/ui-audit.json`. The design validator command used was `npx --package=@google/design.md designmd lint DESIGN.md` with the HTTPS npm registry.

## Remaining release work

This is a local skeleton, not a published portfolio. The name, biography, employment facts, real project case studies, resume PDF, contact links, and domain hostname still need owner input. Draft content is labeled and the site is noindex. Final canonical metadata, sitemap, social preview, CI, hosting, DNS, HTTPS, and Lighthouse measurements remain in the spec checklist.

Automated accessibility checks and screenshot inspection do not establish full WCAG conformance or real-device coverage. No live deployment, custom-domain verification, resume-download verification, or Lighthouse result is claimed.
