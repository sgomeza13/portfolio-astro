---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/posts"]
---

Scope: home page, Post list and Post pages (one world). Mode: Experience on home, Read on Posts.
Audience: hiring managers (90-second skim → contact), engineers (read Posts). Proof: CV metrics, Posts. Constraints: NDA on RevAIsor internals; no invented claims; light-first, sober green.

## Direction contract

THESIS: The site is a well-typeset engineering paper by Simón; claims are numbered, figured and cited to Posts. Refuses the dark sidebar-plus-cards developer portfolio.

OWN-WORLD: Bright offset paper #fbfbf8, ink #161a17, bottle-green second ink #2f5d46 reserved for live things (current section, hovered link, active filter, citations). Source Serif 4 at optical sizes, small-caps section labels, tabular figures; JetBrains Mono only for code and metadata. Hairline rules, no boxes, no cards, no shadows. Wide left margin column carries section numbers and labels.

STORY: Reader sees name, role and an abstract with real figures, follows a citation into a Post, then emails or opens the CV.

FIRST VIEWPORT: Running head across the top (site · Preprint · revision date | Posts · ES · CV). Left-aligned title page: large serif title, author line "Simón Gómez Arango¹" with affiliation footnote, a correspondence line of contact links, green-labelled ABSTRACT with [n] citations, KEYWORDS line; Figure 1 (CV metrics as tabular numerals with to-scale hairline bars) starts at the fold. Primary action: the correspondence line.

FORM: Journal Paper, position 5 of 7, seed key 6b017009. Signature: citation markers hover-link to their references; Post titles morph via view transitions from reference list into the Post's title page.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Unresolved: Stock Recommender date and private repos; CV PDF pending.
