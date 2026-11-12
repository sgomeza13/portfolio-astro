# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output) + Tailwind CSS v4, pnpm, deployed to Cloudflare Workers static assets. Chosen by the user.

## Users

- **Primary:** hiring managers, tech recruiters and senior engineers evaluating Simón for a senior backend / infrastructure software engineering role. They arrive from a CV, LinkedIn or a referral and decide within ~90 seconds whether to reach out.
- **Secondary:** other software engineers reading his technical Posts (Notes, Case Studies) for their own learning; reputation, not hiring, is the outcome.

## Product Purpose

The personal site of Simón Gómez Arango, a software engineer with a backend and infrastructure focus (AWS, GCP) who has led an engineering team at RevAIsor since 2024. Success: a qualified reader understands who he is and what he is good at, finds evidence in his Posts, and contacts him.

## Positioning

A working engineer's record, not a template portfolio: real systems, real numbers from his CV, and his own technical writing, presented with the care he puts into production code.

## Operating Context

- Readers skim the home page, open one or two Posts, then check the CV PDF or LinkedIn.
- Content is authored by Simón as Markdown files in the repo and merged to `main`; there is no CMS and no drafts.
- Bilingual: English at `/`, Spanish at `/es/`; English is canonical, Spanish optional per Post with an English fallback banner.

## Capabilities and Constraints

- Every piece of content is a Post with one Kind (Project, Case Study, Role, Note); see `GLOSSARY.md`.
- Role Posts about RevAIsor are under NDA: no architecture, no screenshots, no customer names, no internal metrics beyond what his CV states.
- Fully static; contact is links only (email, LinkedIn, GitHub, CV PDF). No forms.
- The CV link appears only when `public/cv.pdf` exists.

## Brand Commitments

- Name: **Simón Gómez Arango** (with accents).
- Voice: first person, plain, engineer-to-engineer; no marketing adjectives.
- Title positioning: Software Engineer first; team lead is part of the story, not the headline.
- No headshot or personal photography.
- User-pinned direction: editorial, light-first, typography-led; dark mode follows the system.

## Evidence on Hand

- CV v2: `/home/simon/Dev/personal-projects/cv/Simon-Gomez-Arango-Resume-v2.pdf` (metrics: ≥60% endpoint wait reduction, CI 30→7 min, 50% query latency cut, 30% faster delivery, team lead >1 year).
- Two Projects migrated from the old site (YouTube Live Chat Analysis; Stock Recommender) with repos and three screenshots.
- No testimonials, no client logos, no press. Do not invent any.

## Product Principles

1. Evidence over adjectives: every claim traces to a Post, a repo or the CV.
2. Respect the 90-second reader: who, what, proof and contact are reachable without scrolling far.
3. Writing is the product: Posts must be a pleasure to read.
4. Adding a Post is adding a Markdown file; nothing else should be required.

## Accessibility & Inclusion

WCAG 2.2 AA; all motion respects `prefers-reduced-motion`.
