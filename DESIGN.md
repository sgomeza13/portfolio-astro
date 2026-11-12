---
name: Simón Gómez Arango
description: A personal site set as a well-typeset engineering paper; claims are numbered, figured and cited to Posts.
colors:
  paper: "#fbfbf8"
  ink: "#161a17"
  ink-2: "#4c544e"
  ink-3: "#6a726c"
  rule: "#d9ddd8"
  bar: "#c4cbc5"
  green: "#2f5d46"
  green-soft: "#e3ece6"
  paper-dark: "#121614"
  ink-dark: "#e4e8e3"
  ink-2-dark: "#b3bbb4"
  ink-3-dark: "#8d968f"
  rule-dark: "#2b322d"
  bar-dark: "#3a433c"
  green-dark: "#8fc3a5"
  green-soft-dark: "#1c2a22"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.6rem, 7vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "\"onum\", \"pnum\""
  abstract:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "0.95rem"
    fontWeight: 400
    letterSpacing: "0.06em"
    fontFeature: "\"c2sc\", \"smcp\", \"lnum\""
  caption:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  none: "0px"
spacing:
  page-gutter: "1.25rem"
  page-gutter-lg: "2.5rem"
  column-gap: "2.5rem"
  margin-column: "10rem"
  measure: "42rem"
  page-max: "70rem"
  section-top: "4.5rem"
  entry-y: "1.5rem"
components:
  link:
    textColor: "{colors.ink}"
  link-hover:
    textColor: "{colors.green}"
  citation:
    textColor: "{colors.green}"
    typography: "{typography.body}"
  reference-cited:
    backgroundColor: "{colors.green-soft}"
  filter-toggle:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  filter-toggle-active:
    textColor: "{colors.green}"
  section-number:
    textColor: "{colors.green}"
    typography: "{typography.title}"
    width: "{spacing.margin-column}"
  running-head:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  post-entry:
    typography: "{typography.title}"
    padding: "1.5rem 0"
  inline-code:
    backgroundColor: "{colors.green-soft}"
    typography: "{typography.code}"
---

# Design System: Simón Gómez Arango

## Overview

**Creative North Star: "The Journal Paper"**

The site is set as a well-typeset engineering paper: offset paper, black-green ink, and one bottle-green second ink. Every page reads like a preprint. A running head runs across the top, a left-aligned title page carries the name, an author line with a superscript affiliation footnote and a correspondence line. A green small-caps ABSTRACT holds `[n]` citations that resolve to a reference list, and numbered figures carry real numbers drawn to scale. Structure comes from typography, hairline rules and a wide left margin column, never from containers.

Density is that of a journal page. Generous vertical rhythm between numbered sections, tight leading inside reference lists and metadata, and a reading measure held to 42rem. The margin column on the left (10rem on desktop) holds section numbers, hanging labels, dates and the post table of contents, the way a journal's margin holds running labels. Below 64rem the margin column folds into the flow and labels stack above their rows.

Motion is restrained and comes from print logic. The title page rises once on load in a staggered sequence. Post titles morph from list to title page through view transitions. A 2px green hairline tracks reading progress off the scroll timeline. Dark mode is the same paper with the lights off: same roles, values inverted, green lifted to a pale sage.

**Key Characteristics:**
- Bright offset paper, ink, one green second ink reserved for live things.
- Source Serif 4 for everything except code; small caps for labels, oldstyle figures in prose, tabular lining figures in data.
- Hairline rules (1px) separate everything; heavy ink rules (1px `ink`) open the abstract, Figure 1 and the footer.
- No boxes, no cards, no shadows, no radius.
- A left margin column for numbers and labels, a 42rem main column at reading measure.

## Colors

Two inks on paper: a neutral grey-green ink family carries everything, and a single bottle green marks what is live.

### Primary
- **Bottle Green** (`green`): the second ink. It marks live and referential things only: section numbers, `[n]` citation markers and reference numbers, the ABSTRACT label, the author footnote marker, link hover, the active filter, the current TOC entry, the reading-progress hairline, the "after" bar in result figures, the hot path in drawn figures, text selection and the focus ring. In dark mode it becomes Pale Sage (`green-dark`).
- **Green Wash** (`green-soft`): a pale tint of the green. It lights a reference entry while its citation is hovered or focused, and tints inline code.

### Neutral
- **Offset Paper** (`paper`): the page, OG cards and the background of drawn figures. Never pure white.
- **Ink** (`ink`): headings, body text, the heavy rules that open the abstract, Figure 1 and the footer.
- **Second Ink** (`ink-2`): summaries, captions, secondary prose, inactive filters (7.6:1 on paper).
- **Faint Ink** (`ink-3`): metadata, dates, running head, hanging labels, list bullets (4.8:1 on paper; the floor for any text).
- **Hairline** (`rule`): 1px dividers between entries and rows, link underlines at rest, the edge on raster screenshots.
- **Bar Grey** (`bar`): the "before" bar in to-scale figures, the scrollbar thumb, and the auxiliary/dashed strokes in drawn figures.

### Named Rules
**The Live Ink Rule.** Green means live: a number you can follow, a link under the pointer, the current filter or section, the hot path. Static decoration never gets green. If an element is not referential or stateful, it is ink.

**The Two-Paper Rule.** Light and dark are the same system. Every color is a role variable that swaps under `prefers-color-scheme: dark`; drawn figures embed the same variables so they swap with the page.

## Typography

**Display Font:** Source Serif 4 (variable 200-900, with Georgia, serif)
**Body Font:** Source Serif 4
**Label/Mono Font:** JetBrains Mono (400, 500), for code only

**Character:** One serif family does all the work, the way a journal does: semibold tightly tracked titles, roman reading text, italic for subheadings and tags, small caps for labels. Mono only appears where code appears.

### Hierarchy
- **Display** (600, clamp(2.6rem, 7vw, 5rem), 1.02, -0.03em): the home title page only, max 15ch. The Posts index uses a slightly smaller step (clamp(2.4rem, 6vw, 4rem)).
- **Headline** (600, clamp(2.2rem, 5.5vw, 3.75rem), 1.06, -0.028em): a Post's title page, max 22ch.
- **Title** (600, 1.375rem, 1.25, -0.01em): numbered section heads, post-body h2, Post entry titles. Role titles in Experience step down to 1.2rem. Body h3 is semibold italic at body size.
- **Body** (400, 1.0625rem, 1.7): post body text at 42rem measure. Root size 17px, 18px from 64rem. Home and abstract prose run 1.125rem/1.65.
- **Label** (all-small-caps, 0.95rem, +0.06em, lining figures): running head, hanging labels, kind/date metadata, ABSTRACT, KEYWORDS, CONTENTS, footer.
- **Caption** (400, 0.875rem, 1.5, `ink-2`): figure captions, led by a semibold ink "Figure n." label.
- **Code** (JetBrains Mono, 0.82rem, 1.65): code blocks; inline code 0.84em.

### Named Rules
**The Two Figures Rule.** Prose uses oldstyle proportional figures; anything read as data (dates, periods, section and reference numbers, figure values) uses lining tabular figures.

**The One Family Rule.** Source Serif 4 sets every word that is not code. Do not introduce a sans or a second display face.

## Layout

A three-column page grid, max 70rem, centred. On desktop (from 64rem): a 10rem margin column, a 42rem main column, and a flexible right column, 2.5rem apart with 2.5rem page gutters. Content sits in the main column by default; wide elements (abstract with margin references, Figure 1) span main plus right; the running head and footer span all three. Below 64rem it is one column with 1.25rem gutters.

Hanging content reaches into the margin column with a negative offset (-12.5rem) and is right-aligned: section numbers, row labels (dates, method keys), post-body h2 numbers. On a Post, the table of contents sticks in the margin column at 2.5rem from the top.

Rhythm: numbered sections open 4.5rem down; post-body h2 opens 2.6em down; body blocks are 1.1em apart; entries are 1.5rem top and bottom between hairlines; table rows 0.75-1.25rem. The footer sits 7rem below content.

## Elevation & Depth

Flat. There are no shadows, no surfaces above the paper and no tonal layering. Hierarchy is carried by type weight, rule weight and position: a 1px ink rule opens a major block, 1px hairlines separate items within it. The only overlay is the 2px reading-progress hairline fixed to the top edge.

### Named Rules
**The Printed Page Rule.** Nothing floats. If something needs separation, give it a rule or space; never a shadow, a box or a fill.

## Shapes

Square and open. No component has a border-radius; the only rounding is a 1-2px softening on the focus ring and transient highlight backgrounds. Lines do the shaping: horizontal hairlines above and below entries, rows and code blocks; a 1px left rule on blockquotes; 3px flat bars in to-scale figures; list bullets are short 0.45rem hairline dashes. Drawn figures use square 1px-stroke boxes with filled triangle arrowheads, dashed strokes for auxiliary nodes, and a 1.5px green stroke for the hot path.

### Named Rules
**The Drawn-On-Paper Rule.** Drawn figures (SVG) sit on the paper with no frame. Raster screenshots, and only those, get a 1px hairline edge.

## Components

### Links
- **Rest:** ink text, 1px underline in `rule` color, 0.2em offset. Navigation and titles drop the underline.
- **Hover:** text and underline go green (0.2s).
- **Focus:** 2px green outline, 3px offset.

### Citations and References
The signature. `[n]` markers in green lining figures sit inline in the abstract. Hovering or focusing a marker washes its reference entries (margin note and reference list) in `green-soft` (0.3s). References read as a bibliography: green tabular `[n]`, author, italic linked title, kind and date.

### Filters (chips)
- **Style:** bare text buttons in a hanging-label row, no fill, no border. Kinds roman, tags italic.
- **State:** inactive `ink-2`; hover green; pressed green with a 1px underline at 4px offset. State lives in the URL.

### Post Entry (list item)
A row between hairlines, 1.5rem padding: Title-size semibold title (the whole row is the hit area; it turns green on hover), `ink-2` summary, then small-caps kind · date · company in `ink-3` and italic tags after an em dash. The title carries a view-transition name so it morphs into the Post's title page.

### Navigation
- **Running head:** a small-caps line across the full grid, `ink-3`, hairline below: name · running head on the left, Posts · CV · language switch on the right. Name collapses to just the name on small screens.
- **Post TOC:** right-aligned in the margin column, small-caps CONTENTS label, numbered entries in `ink-2`; the entry for the section in view turns green.

### Figures
- **Result figure:** heavy ink rules top and bottom, a small-caps legend row, then rows of label · to-scale bars (`bar` before, `green` after, 3px) · tabular value, hairlines between. Bars stay at every width so the caption stays true.
- **Captions:** auto-numbered "Figure n." (localized) in semibold ink, then `ink-2` caption text.
- **Code blocks:** no fill; hairlines above and below, 1.25rem × 1.5rem padding, Shiki github-light / github-dark-dimmed.

### Abstract Block
A heavy ink rule, then a green small-caps ABSTRACT label, abstract prose at 1.125rem, and a KEYWORDS line (small-caps ink label, `ink-2` list separated by middle dots). Repeated on every Post's title page.

## Do's and Don'ts

### Do:
- **Do** keep green for live things: numbers you can follow, hover, active state, current section, the hot path.
- **Do** separate with 1px rules and space; open a major block with a 1px `ink` rule.
- **Do** hang numbers and labels in the 10rem margin column, right-aligned, on desktop.
- **Do** use small caps (+0.06em) for labels and lining tabular figures for data.
- **Do** draw figures to scale from the real numbers, and embed the color role variables in SVGs so they follow dark mode.
- **Do** number sections, figures and citations; a reference list closes any page that cites.

### Don't:
- **Don't** use boxes, cards, shadows, fills or border-radius on components.
- **Don't** frame drawn SVG figures; only raster screenshots get the hairline edge.
- **Don't** use green as decoration on static content.
- **Don't** introduce a sans, a second display face, or mono outside code.
- **Don't** set text lighter than `ink-3` on paper.
- **Don't** build the dark sidebar-plus-cards developer portfolio this site refuses.
