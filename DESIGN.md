---
name: Simón Gómez Arango
description: A personal site built as a wayfinding sign system; a highway-green band, ruled rows, and one colored bullet that says what kind of thing you are looking at.
colors:
  ground: "#f5f2e9"
  ink: "#12201b"
  ink-2: "#3d4a43"
  ink-3: "#5c6760"
  rule: "#d9d6c6"
  band: "#0e4a3a"
  band-ink: "#f5f2e9"
  band-ink-2: "#a8c7b8"
  signal: "#0e4a3a"
  kind-project: "#9a412b"
  kind-role: "#356890"
  kind-case-study: "#834d7e"
  kind-note: "#b47c2e"
  ground-night: "#0d1311"
  ink-night: "#e9e6dc"
  ink-2-night: "#b3bab3"
  ink-3-night: "#8a938d"
  rule-night: "#26302b"
  band-night: "#17614c"
  band-ink-night: "#f5f2e9"
  band-ink-2-night: "#c2ddd0"
  signal-night: "#5cc29a"
  kind-project-night: "#d77c60"
  kind-role-night: "#75acd2"
  kind-case-study-night: "#c590c0"
  kind-note-night: "#e8bd6d"
typography:
  display:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.038em"
  section:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.016em"
  lede:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"lnum\", \"tnum\""
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  none: "0"
  bullet: "50%"
spacing:
  page-inline: "clamp(1.25rem, 3.5vw, 3rem)"
  gutter: "1.5rem"
  row: "1.25rem"
  row-wide: "1.5rem"
  band: "3.5rem"
  measure: "40rem"
  frame: "96rem"
components:
  sign-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    typography: "{typography.label}"
    height: "{spacing.band}"
  sign-row:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "{spacing.row} 0"
    rounded: "{rounded.none}"
  kind-bullet:
    backgroundColor: "{colors.kind-project}"
    rounded: "{rounded.bullet}"
    size: "0.72em"
  filter-toggle:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    padding: "0.125rem 0.5rem"
    rounded: "{rounded.none}"
  filter-toggle-pressed:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ground}"
  notice:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    padding: "0.75rem 1rem"
    rounded: "{rounded.none}"
---

# Design System: Simón Gómez Arango

<!-- impeccable:design-map -->
Name: Simón Gómez Arango
Colors: sign: band #0e4a3a (Highway Green; signal, rules, pressed); neutral: ground #f5f2e9, ink #12201b, ink-2 #3d4a43, ink-3 #5c6760, rule #d9d6c6; kind (bullets only): project #9a412b, role #356890, case-study #834d7e, note #b47c2e (night variants in frontmatter and sidecar)
Fonts: Host Grotesk (display, headline, section, title, lede, body, label); JetBrains Mono (code)
Spacing: page-inline clamp(1.25rem, 3.5vw, 3rem), gutter 1.5rem, row 1.25rem, row-wide 1.5rem, band 3.5rem, measure 40rem, frame 96rem
Radius: none 0, bullet 50%
North Star: "The Signage Standard"
Rules:
- The Two Colors Rule. Color has two jobs.
- The Ink-Only Code Rule. Code is highlighted in ink steps only: keywords and function names bold, strings and numbers in Graphite, comments in Slate italic, on a transparent background.
- The Lit Sign Rule. In dark mode the band stays green and lifts a step (#17614c) rather than disappearing into the ground.
- The Two Weights Rule. The grotesk is used at 400 and 600 only.
- The Sentence Case Rule. All text, including section heads and nav, is sentence case at normal tracking.
- The One Row Rule. Every list on the site is the same row: date, then bullet with title and summary, then a side label, then an arrow.
- The Flat Sign Rule. Nothing floats.
Don't:
- Don't color headings, body text, code tokens, or focus rings; green is the sign, the four bullet colors are Kind, and nothing else gets a hue.
- Don't add weights beyond 400 and 600, uppercase labels, or tracked-out small caps.
- Don't wrap content in cards, add shadows, or round corners; the bullet is the only round shape.
- Don't use dots for prose list markers; round marks belong to Kind.
- Don't set text lighter than Slate (ink-3); its 5:1 contrast on the ground is the floor.
- Don't add icon glyphs; the drawn arrow is the only icon, in its three directions.
Do:
- Do use the one row schema (date, bullet with title and summary, side, arrow) for any new list.
- Do reserve the four Kind colors for bullets, hover lines, the reading bar, and OG bullets.
- Do set code and drawn figures in ink steps; mark a hot path with a heavier stroke (2.5) and auxiliary parts with dashed Hairline.
- Do keep the grotesk at 400 and 600, sentence case, with tabular figures for dates and periods.
- (+4 more)
Full: .impeccable/design-full.md (read a section when you need its detail)
