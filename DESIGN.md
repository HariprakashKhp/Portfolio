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

This is a brand/content site, in English; no application, Japan-market, or localization-specific workflows are in scope. The signature is a compact, annotated architecture diagram beside a strong typographic introduction. It represents an illustrative AI application, not a claim about an implemented project. The owner requested a small CLI-style name line on the homepage; keep the terminal treatment confined to that introduction. Avoid full terminal-window imitations, neon dashboards, fake metrics, invented availability claims, and decorative numbering.

Plan review: a terminal hero would imply an interactive tool without serving the visitor. Use a readable architecture figure instead, with the rest of the site deliberately quiet.

Runtime ownership: `apps/web/src/app/globals.css` owns CSS custom properties. This document mirrors the accepted palette and font roles. Tailwind utilities and semantic component classes consume those properties; do not maintain another palette in a Tailwind config. Fonts are bundled locally through Fontsource, with no external font requests.

## Colors

Blue slate background and tonal surfaces, near-white primary text, muted blue-gray secondary text, pale blue actions, and a restrained sandstone accent for annotations. Use `--line` for quiet dividers. Focus uses the primary color. Color never replaces text labels. Only the dark theme is implemented; forced-colors mode follows system colors.

## Typography

Space Grotesk for display headings and brand, Manrope for body and navigation, system monospace for diagram labels. Display type has tight tracking and responsive sizing; body copy has a comfortable 1.7 line height and a measure near 60 characters. Use sentence case. No external font service or font-fetch build dependency.

## Layout

Maximum content width 75rem with responsive 1.25rem–3rem gutters. Desktop homepage pairs a wide text column with the architecture figure. Sections use 6rem separation, reduced to 4rem on phones. At 48rem and below, columns stack and navigation becomes a nonmodal disclosure. The document owns scrolling; reserve scrollbar space globally. Every page uses the same header, footer, section headings, and content width.

## Elevation & Depth

Hierarchy comes from tonal surfaces and borders. Reserve a subtle shadow for the diagram; avoid stacked floating cards and glow effects. The header remains in normal document flow so it does not obscure focus.

## Shapes

Moderate 0.75rem panel corners and 0.375rem controls. Nodes in the diagram use the same control radius. Icons are 20px inline SVG strokes and always accompany meaningful text, except the decorative brand mark.

## Components

- Shared navigation marks the current route, including project detail routes. Mobile disclosure is nonmodal, supports Escape, restores trigger focus, closes after navigation, and requires no body scroll lock. With JavaScript disabled, all navigation links remain visible.
- Shared action links have solid/outline/text emphasis, visible hover and focus, and a minimum 44px target. Never render unavailable links or fake download buttons.
- Project cards distinguish draft layout previews from verified work. Draft routes and the initial site are noindex until content review is complete.
- Empty states name missing content in plain language. Resume and contact stay honest when their assets/details are absent.
- No async data flows, forms, destructive actions, toasts, or dialogs are needed. Add none for anticipated requirements.
- Motion includes short transitions and a homepage CLI loop: name, short current role, and location, in that order. Each six-second slot types for 1.5 seconds, holds for 2.5 seconds, deletes for 1.5 seconds, and leaves a short gap. The three-phrase cycle repeats every 18 seconds with a 700ms blinking cursor. Reserve the longest phrase's width and a stable line height. A compact icon-only toggle stops both typing and blinking: two vertical pause bars while running, a play triangle while paused. The underlying native checkbox retains its accessible name and keyboard/no-JavaScript behavior. Use a 44px target, a quiet default treatment, a surface hover, and a visible parent focus ring. The animated phrases are hidden from assistive technology; a static sentence exposes all three facts once without a live region. Reduced motion shows the complete name and static cursor with the Pause control hidden. Other pages retain static branding. No animated diagram or ambient effects.
- Scrollbars inherit tokenized thumb/track colors globally, with hover/active engine fallbacks and a forced-colors reset.

## Do's and Don'ts

- Do give project evidence priority over a technology logo wall.
- Do keep career facts in typed local content and distinguish unreviewed content.
- Don't invent a name, contact address, employer, result, or project.
- Don't hide missing information behind disabled controls or false interactions.
