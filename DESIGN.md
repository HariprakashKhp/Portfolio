---
version: alpha
name: Engineering portfolio
description: A quiet engineering notebook for backend and applied AI work.
colors:
  background: "#111820"
  surface: "#18222D"
  foreground: "#F1F3F5"
  muted: "#A9B5C2"
  primary: "#A7C7E7"
  secondary: "#D4B59A"
typography:
  display:
    fontFamily: "'Space Grotesk Variable', sans-serif"
  body:
    fontFamily: "'Manrope Variable', sans-serif"
  mono:
    fontFamily: "ui-monospace, monospace"
rounded:
  DEFAULT: "0.75rem"
  control: "0.375rem"
spacing:
  page-max: "75rem"
  section-gap: "6rem"
components:
  navigation:
    textColor: "{colors.foreground}"
  button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
---

# Portfolio design direction

## Overview

An engineering notebook, with the clarity of a well-drawn system diagram. The audience is recruiters, hiring managers, and engineering peers browsing on desktop or mobile. The job is to explain professional focus, present evidence, and make the next step obvious.

This is a brand/content site, in English; no application, Japan-market, or localization-specific workflows are in scope. The homepage signature is a strong typographic introduction with a barely visible line-art portrait. The owner removed the generic architecture illustration from the hero. The owner requested a small CLI-style name line on the homepage; keep the terminal treatment confined to that introduction. Avoid full terminal-window imitations, neon dashboards, fake metrics, invented availability claims, and decorative numbering.

Keep the hero focused on the person and their work. Do not restore the generic system-flow diagram or reserve a blank column for it; use diagrams in future case studies only when they explain actual project evidence.

Runtime ownership: `apps/web/src/app/globals.css` owns CSS custom properties. This document mirrors the accepted palette and font roles. Tailwind utilities and semantic component classes consume those properties; do not maintain another palette in a Tailwind config. Fonts are bundled locally through Fontsource, with no external font requests.

## Colors

Blue slate background and tonal surfaces, near-white primary text, muted blue-gray secondary text, pale blue actions, and a restrained sandstone accent for annotations. Use `--line` for quiet dividers. Focus uses the primary color. Color never replaces text labels. Only the dark theme is implemented; forced-colors mode follows system colors.

## Typography

Space Grotesk for display headings and brand, Manrope for body and navigation, system monospace for diagram labels. Display type has tight tracking and responsive sizing; body copy has a comfortable 1.7 line height and a measure near 60 characters. Use sentence case. No external font service or font-fetch build dependency.

## Layout

Maximum content width 75rem with responsive 1.25rem–3rem gutters. The homepage hero has one content column capped at 43rem, with a decorative portrait behind it. Hero padding is 2rem above and 3.5rem below on desktop, reduced to 1.5rem and 3rem on phones; its height follows content, without diagram offsets or vertical centering. Sections use 6rem separation, reduced to 4rem on phones. At 48rem and below, columns stack and navigation becomes a nonmodal disclosure. The document owns scrolling; reserve scrollbar space globally. Every page uses the same header, footer, section headings, and content width.

## Elevation & Depth

Hierarchy comes from tonal surfaces and borders. Reserve a subtle shadow for the diagram; avoid stacked floating cards and glow effects. The header remains in normal document flow so it does not obscure focus.

## Shapes

Moderate 0.75rem panel corners and 0.375rem controls. Nodes in the diagram use the same control radius. Icons are 20px inline SVG strokes and always accompany meaningful text. The shared header uses the owner's color avatar in a 52px circular crop beside the name; the browser icon is a single pale-blue H on slate, drawn as a vector path for consistent rendering.

## Portrait assets

Published images are optimized WebP exports: `apps/web/public/images/hari-avatar.webp` (192px), `hari-portrait-line-art.webp` (900px), and `hari-portrait-line-art-mobile.webp` (480px). CSS selects the smaller portrait on phones. Preserve both original root PNGs unchanged; superseded public PNG copies are removed. The manual `assets:prepare` script recreates the exports using Sharp supplied with Next.js, without running a website build or adding a runtime image service. Use the avatar decoratively with empty alternative text because the adjacent brand already names the owner.

Only the homepage hero and About page use the shared `portrait-surface` background. CSS inverts the monochrome drawing, blends away its paper with screen, and fades the edges with a radial mask. The portrait sits behind the introduction, with its hero background box constrained to the section height so it cannot spill into the next section. The owner prefers a barely visible texture: opacity is 8% in the hero and 6% on About, reduced to 5% and 4% on phones. Preserve the original stacked mobile content flow. The background is decorative, static, confined to these surfaces, and hidden in forced-colors mode. Do not extend it to other routes or add ambient animation.

## Components

- Homepage hero actions are View experience and Contact me. Its next section shows two resume-backed outcomes (30% lower API latency and 35% lower token/cloud compute costs) with employer and role attribution. Values use a restrained display scale and two columns that stack on phones; they are professional-work results, separate from personal project evidence.
- Home and Projects share full-width cards for the owner-selected Twin, BugFixer, and DeepEval entries. Project copy precedes a detailed repository-backed architecture diagram, replacing the small three-component sketch. The same diagram appears above the notes on each detail page, outside the narrow case-content column. Twin separates application/data flow from deployment configuration; BugFixer shows conditional routing and tool feedback; DeepEval separates cases, three evaluation paths, and grading/results. Keep explicit Prototype, In progress, or Evaluation lab labels and source links. Preserve the compact fallback if the list becomes empty. Close Home with contact and the real PDF download.
- `project-architecture.tsx` owns diagram presentation and `content/project-architectures.ts` owns typed nodes, connections, boundaries, captions, and text equivalents. Use existing slate/pale-blue/sandstone tokens only. SVG labels have a readable minimum canvas width; small screens scroll inside a labeled, keyboard-focusable region instead of shrinking text or overflowing the page. Native details provides a full component/connection text version. Solid arrows show application/data flow, dashed arrows show feedback or configuration. The architecture is static, with no diagram library, runtime fetch, animation, or inferred deployment/repair/benchmark success.
- A static 1200x630 social card at `public/social/portfolio-card.png` uses the H identity, slate palette, name, engineering focus, and domain. Its editable SVG is in `assets/portfolio-card.svg`, regenerated with `assets:prepare`. Each primary route has its own social title, description, and canonical URL while sharing this image.

- Shared navigation marks the current route, including project detail routes. Mobile disclosure is nonmodal, supports Escape, restores trigger focus, closes after navigation, and requires no body scroll lock. With JavaScript disabled, all navigation links remain visible.
- Shared action links have solid/outline/text emphasis, visible hover and focus, and a minimum 44px target. Never render unavailable links or fake download buttons.
- Project cards distinguish personal prototypes, work in progress, and learning exercises without implying verified production results. Project detail pages inherit the site's production/preview indexing guard and have individual canonical/social metadata.
- Empty states name missing content in plain language. Resume and contact stay honest when their assets/details are absent.
- About follows Education with Courses & Certifications. Problem-solving practice is a single brief biography paragraph with underlined, pale-blue links to the supplied LeetCode and NeetCode profiles, with no separate section or numeric counts. A short biography sentence mentions daily gym attendance; client ownership and onsite FDE work stay in the career narrative. Completed AI courses/programs occupy one tonal panel; completed web development and current DevOps/Docker/AWS study use stacked panels in the adjacent column. The grid stacks on phones. Course titles link to clean public provider pages and status text distinguishes Completed from In progress. Course links are not certificate links. Show an earned-credential panel only when real entries are supplied; keep future certification plans to a compact note. Never style planned credentials as earned badges or invent completion evidence.
- After the employer history, Experience shows a restrained Odessa selected-work section: a customer-portal architecture introduction and three text points about read/write separation, cache correctness, and shared APIs for agents. Reuse section dividers, muted body text, and foreground emphasis; do not embed or link the detailed employer blueprint, add new cards, or present proposed capacity as measured results. Professional development follows as ordinary paragraphs that use the section's available width and wrap naturally, without the old narrow list or forced breaks. Keep Hello Interview learning and interview outcomes separate from employer achievements, with no inferred expertise rating, company, or job offer.
- No async data flows, forms, destructive actions, toasts, or dialogs are needed. Add none for anticipated requirements.
- Motion includes short transitions and a homepage CLI loop: name, short current role, and location, in that order. Each six-second slot types for 1.5 seconds, holds for 2.5 seconds, deletes for 1.5 seconds, and leaves a short gap. The three-phrase cycle repeats every 18 seconds with a 700ms blinking cursor. Reserve the longest phrase's width and a stable line height. A compact icon-only toggle stops both typing and blinking: two vertical pause bars while running, a play triangle while paused. The underlying native checkbox retains its accessible name and keyboard/no-JavaScript behavior. Use a 44px target, a quiet default treatment, a surface hover, and a visible parent focus ring. The animated phrases are hidden from assistive technology; a static sentence exposes all three facts once without a live region. Reduced motion shows the complete name and static cursor with the Pause control hidden. Other pages retain static branding. No animated diagram or ambient effects.
- Scrollbars inherit tokenized thumb/track colors globally, with hover/active engine fallbacks and a forced-colors reset.

About's introduction names the current role and employer. Its skill groups include evaluation, with brief copy distinguishing professional RAGAS contributions from DeepEval/pytest project learning and personal AWS infrastructure work. About and Experience use the shared ProjectOverview: plain divided rows with context/status, linked project titles, and summaries from the same data as Home/Projects. About places this before Education; Experience places it after Professional development. Keep full architecture diagrams on Home, Projects, and project details. Home and Experience share ImpactHighlights, preserving the existing two-column/mobile-stack treatment, descriptions, and employer/role attribution.

## Do's and Don'ts

- Do give project evidence priority over a technology logo wall.
- Do keep career facts in typed local content and distinguish unreviewed content.
- Don't invent a name, contact address, employer, result, or project.
- Don't hide missing information behind disabled controls or false interactions.
