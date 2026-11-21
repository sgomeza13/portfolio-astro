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

## Overview

**Creative North Star: "The Signage Standard"**

The site is a wayfinding system rather than a document or a gallery. A highway-green band runs across the top like the header strip of a road sign, the page beneath is a warm ivory sign ground, and every list is a stack of ruled rows on a full-width 12-column grid. One neo-grotesk in two weights does all the talking. The only color anywhere is a small solid bullet that says what kind of thing a row is: a Project, a Role, a Case study, or a Note. You always know where you are, what you are looking at, and where the next arrow goes.

Density is calm but not sparse: the frame runs to 96rem so a desktop is actually used, display type is set large and tight, and the directory rows carry date, title, summary, and a side label without any container around them. Depth is entirely flat. Hierarchy comes from scale, weight, and the 2px ink rules that head each section.

Night is not a dark theme bolted on; it is the same sign lit up. The green band stays lit, the ground goes green-black, the signal green brightens to mint, and the Kind bullets brighten like lamps.

**Key Characteristics:**
- Highway-green sign band header and a slim green footer strip; warm ivory ground between them.
- One grotesk (Host Grotesk) at exactly two weights, 400 and 600; tabular figures for dates.
- Two color jobs only: Signal Green is the sign itself (band, section rules, underlines, selection); four bullet colors mean Kind.
- One row schema for every list: date, bullet with title and summary, side label, arrow.
- Ruled rows, no cards, no shadows, no corners except the round bullet.
- Motion is three things: one staggered rise, a title morph into Posts, a Kind-colored reading bar.

## Colors

A green-black ink on warm ivory, one sign color (Highway Green) that carries the system, and four Kind colors reserved for bullets and the lines they draw.

### Primary
- **Deep Rust** (kind-project): marks Project rows, the Project filter, the reading bar and hover line on Project posts.
- **Petrol Blue** (kind-role): marks Role rows (the Experience timetable and role Posts).
- **Plum** (kind-case-study): marks Case study rows and posts; kept off green so it never reads as the sign color.
- **Ochre** (kind-note): marks Note rows and posts.

All four are printed-ink tones set together in OKLCH (matched chroma around 0.1, lightness 0.49 to 0.63) so they sit with Highway Green instead of fighting it; each clears 3:1 on ivory. Each Kind has a lighter night value (`*-night` tokens, lightness around 0.72) so the bullets read as lit lamps on the dark ground.

### Neutral
- **Sign Ground** (ground): page background; also the text color on the band.
- **Highway Green** (band, signal): the header band, the footer strip, the 2px section rules, pressed filter state, translation notice, selection highlight, link underlines, inline list dashes, blockquote rule, scrollbar, and the hot path in drawn figures. At night the band is #17614c and the signal lifts to mint #5cc29a.
- **Green Black** (ink): primary text.
- **Graphite** (ink-2, 8.6:1 on ground): summaries, intro paragraphs, figure captions, unpressed filters, secondary links.
- **Slate** (ink-3, 5:1 on ground): dates, metadata labels, filter row labels, ordered-list markers. This is the lightest value text may use.
- **Hairline** (rule): 1px row dividers, screenshot edges, code block top and bottom rules, link underlines at rest.
- **Band Sage** (band-ink-2): the language switch and the footer fine print on the band; tinted from the green, never grey.

### Named Rules
**The Two Colors Rule.** Color has two jobs. Highway Green is the sign: band, section rules, underlines, selection, pressed state, and hot paths. The four Kind colors appear only as a Kind's bullet, its hover line, its reading-progress bar, and its OG-card bullet. Headings, body text, code tokens, and focus rings stay ink. A row with no Kind (education) gets a hollow Slate ring instead of a bullet.

**The Ink-Only Code Rule.** Code is highlighted in ink steps only: keywords and function names bold, strings and numbers in Graphite, comments in Slate italic, on a transparent background. Drawn figures follow the same law: a hot path is shown by a heavier stroke (2.5 against 1 to 1.25) in Highway Green; auxiliary parts are dashed Hairline.

**The Lit Sign Rule.** In dark mode the band stays green and lifts a step (#17614c) rather than disappearing into the ground. Every color token switches through `prefers-color-scheme`; nothing is hard-coded to one mode, including the favicon and drawn SVG figures.

## Typography

**Display Font:** Host Grotesk (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Host Grotesk
**Mono Font:** JetBrains Mono (code only)

**Character:** A single neutral neo-grotesk set like signage: big and tight-tracked at the top, plain and open in running text, with tabular lining figures wherever dates line up.

### Hierarchy
- **Display** (600, clamp(2.75rem, 6vw, 5.5rem), 0.98, -0.04em): the home title and the Posts index title. The 404 numeral pushes the same treatment larger.
- **Headline** (600, clamp(2.5rem, 5.6vw, 5.25rem), 1, -0.038em): a Post's title, capped near 22ch; it is the morph target from the row title.
- **Section** (600, 1.625rem, 1.2, -0.02em): h2 inside post bodies; h3 steps down to 1.1875rem.
- **Title** (600, 1.3125rem, 1.25, -0.016em): every row title.
- **Lede** (400, 1.375rem, 1.45): a Post's summary above the body. Home and Posts intros use 1.125rem at 1.6 in Graphite.
- **Body** (400, 1.125rem, 1.7, 40rem measure): post reading text. The site base is 16px rising to 17px from 64rem, line-height 1.55.
- **Label** (400, 0.9375rem, tabular figures): dates, side labels, metadata, filters, nav. Section heads over lists use 1.0625rem at 600.
- **Code** (JetBrains Mono 400/700, 0.82rem, 1.65): code blocks; inline code 0.84em on a 7% ink tint.

### Named Rules
**The Two Weights Rule.** The grotesk is used at 400 and 600 only. Emphasis is 600; there is no light, medium, or bold. Italic is allowed (figure labels, a lone emphasized caption line) but adds no weight. The mono's 700 exists only for bold keywords in code.

**The Sentence Case Rule.** All text, including section heads and nav, is sentence case at normal tracking. Hierarchy comes from size and weight, never from uppercase or letterspacing.

## Layout

A full-width 12-column grid with a 1.5rem gutter inside a 96rem frame, page padding clamp(1.25rem, 3.5vw, 3rem). The home page splits 7/5 from lg: title, name, intro, and contact links left; Selected work as a stacked directory right. Experience runs full width below as a timetable of wide rows. The Posts index sets its title and intro 6/6, then a filter block, then wide rows. A Post puts a 3-column metadata aside (with a sticky contents list from lg) beside an 8-column body offset to column 4.

Section heads sit on a 2px ink rule with 0.75rem beneath; rows are separated by 1px Hairline rules. Reading text holds a 40rem measure while figures and code blocks run to the full column. Generous vertical air between sections (5 to 7rem; the footer sits 7 to 10rem below content). Below lg every grid collapses to one column and wide rows stack in the same order as narrow ones.

### Named Rules
**The One Row Rule.** Every list on the site is the same row: date, then bullet with title and summary, then a side label, then an arrow. Narrow rows stack these in a two-column grid (1.875rem bullet track, then content); wide rows lay them out as columns from lg (date 2, title and summary 7, side and arrow 3). New lists use this row; they do not get cards, tiles, or a new schema.

## Elevation & Depth

The system is completely flat. There are no shadows, no layered surfaces, and no blur at rest. Separation comes from the band against the ground, 2px green rules over sections, and 1px Hairline rules between rows. The only filled blocks besides the band are the pressed filter toggle and the translation-fallback notice, both solid green with ground text.

### Named Rules
**The Flat Sign Rule.** Nothing floats. If something needs emphasis, it gets a rule, a weight, or an ink fill, never a shadow or a card.

## Shapes

Square everywhere. Corners are 0 on every block, toggle, notice, code block, and figure frame. The one round form is the Kind bullet (a 0.72em disc, or a 2px Slate ring when there is no Kind), and its echo in the favicon: an ivory disc on a green square. Unordered list items in post bodies use a short 2px green dash, not a dot, so the round shape stays reserved for Kind. Arrows are drawn strokes (1.9 width, square caps) in three directions: right to go deeper, up-right to leave the site, left to go back. Screenshots get a 1px Hairline edge; drawn figures sit on the ground with no frame.

## Components

### Sign Band (navigation)
The header is a full-width band (3.5rem tall) in Highway Green with ivory text: the name at 600 on the left, Posts, CV, and the language switch on the right at 0.9375rem. Hover underlines at a 0.4em offset; the current section keeps a 2px underline. The language switch sits in Band Sage and lifts to band ink on hover. The footer is a slim strip of the same band (1.5rem vertical padding, 0.9375rem text): the copyright and location in Band Sage on the left, and Email, LinkedIn, GitHub, CV and RSS as plain links with up-right arrows on the right. The address itself never shows at display scale; the Email link carries it in its title.

### Sign Row (signature)
The row described in The One Row Rule. Titles are links whose hit area covers the whole row. On hover or keyboard focus, a 2px line in the row's Kind color draws from the bullet across the row (scaleX, 0.6s, cubic-bezier(0.16, 1, 0.3, 1)) and the arrow nudges 0.25rem right. Keyboard focus draws a 2px ink outline around the whole row at a 4px offset. A row with a link carries a `transition:name` so its title morphs into the Post headline.

### Filter Toggles
Plain text buttons at label size in Graphite, hover to ink; pressed state is a solid ink fill with ground text and square corners. Kind filters carry their bullet. Filter state lives in the URL so filtered lists can be linked.

### Links
Inline links are underlined with a 1px line at a 0.22em offset; at rest the underline is Highway Green at 45% (full green in post bodies) and turns the text color on hover. Contact and outbound link lists use 600 with a 2px underline and an arrow.

### Post Body
Grotesk reading text at Body. Blockquotes use a 1px ink left rule at 1.25rem. Code blocks have no fill, only Hairline top and bottom rules. Figures are captioned with their alt text in Graphite at 0.9375rem, unnumbered.

### Contents and Reading Progress
From lg, a sticky contents list in the aside: the section in view turns ink and shows the post's Kind bullet. A 3px bar in the post's Kind color runs across the top of the viewport, driven by the scroll timeline with no JavaScript.

### OG Cards
1200 x 630: the green band with the name at the top, then the Kind bullet and label in Graphite, then the title at 600 and -0.04em tracking on the ground. The default card uses an ink bullet.

## Do's and Don'ts

### Do:
- **Do** use the one row schema (date, bullet with title and summary, side, arrow) for any new list.
- **Do** reserve the four Kind colors for bullets, hover lines, the reading bar, and OG bullets.
- **Do** set code and drawn figures in ink steps; mark a hot path with a heavier stroke (2.5) and auxiliary parts with dashed Hairline.
- **Do** keep the grotesk at 400 and 600, sentence case, with tabular figures for dates and periods.
- **Do** head sections with a 2px Highway Green rule and divide rows with 1px Hairline rules.
- **Do** keep motion to the staggered rise (0.9s, 70ms steps, from an already-legible state), the title morph (0.45s), and the reading bar, all behind `prefers-reduced-motion`.
- **Do** keep the band green and lit at night and keep every color, including SVG figures and the favicon, mode-aware.
- **Do** caption figures with plain text, no figure numbers.

### Don't:
- **Don't** color headings, body text, code tokens, or focus rings; green is the sign, the four bullet colors are Kind, and nothing else gets a hue.
- **Don't** add weights beyond 400 and 600, uppercase labels, or tracked-out small caps.
- **Don't** wrap content in cards, add shadows, or round corners; the bullet is the only round shape.
- **Don't** use dots for prose list markers; round marks belong to Kind.
- **Don't** set text lighter than Slate (ink-3); its 5:1 contrast on the ground is the floor.
- **Don't** add icon glyphs; the drawn arrow is the only icon, in its three directions.
