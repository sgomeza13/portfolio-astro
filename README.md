# sgomeza.com

Personal site of Simón Gómez Arango. Astro (static) + Tailwind v4, deployed to Cloudflare Workers static assets.

## Adding a Post

1. Create `src/content/posts/<slug>/en.md` with frontmatter:

   ```yaml
   ---
   title: …
   summary: One line.
   kind: project        # project | case-study | role | note
   date: 2026-11-11
   tags: [Go, GCP]
   featured: false      # true → shows under "Selected work" on the home page
   repo: https://github.com/…   # optional, string or list
   demo: https://…      # optional
   video: https://youtu.be/…    # optional (YouTube or Google Drive)
   company: RevAIsor    # optional, roles
   period: { start: 2024-01-15 }  # optional, roles; add `end:` when it ends
   ---
   ```

2. Optionally add `es.md` beside it with only `title` and `summary` in the frontmatter plus the Spanish body. Without it, `/es/` shows the English text with a notice.
3. Images go in the same folder. An image alone on its line becomes a numbered figure, captioned with its alt text.
4. `pnpm dev`, review, merge to `main`. Cloudflare deploys on push.

Vocabulary lives in `GLOSSARY.md`; product context in `PRODUCT.md`.

## Commands

| | |
|---|---|
| `pnpm dev` | local server |
| `pnpm build` | static build to `dist/` |
| `pnpm check` | type-check |
| `pnpm test` | unit tests (`node --test`) |

Requires Node ≥ 22.23 (`.nvmrc` pins 24). Drop `public/cv.pdf` in to show the CV link. Set `PUBLIC_CF_BEACON_TOKEN` in the Cloudflare build environment to enable Web Analytics.
