import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A Post is a folder: src/content/posts/<slug>/en.md (required) + es.md (optional).
// The entry id is the folder name, so both locales share one slug.
export const kinds = ['project', 'case-study', 'role', 'note'] as const;

const slugFromPath = ({ entry }: { entry: string }) => entry.split('/')[0];

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '*/en.md', generateId: slugFromPath }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(kinds),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    repo: z
      .union([z.url(), z.array(z.url())])
      .optional()
      .transform((v) => (v === undefined ? [] : [v].flat())),
    demo: z.url().optional(),
    video: z.url().optional(),
    // Role-only, but optional on any Post.
    company: z.string().optional(),
    period: z
      .object({ start: z.coerce.date(), end: z.coerce.date().optional() })
      .optional(),
  }),
});

// Spanish overrides only the prose; everything else comes from en.md.
const translations = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '*/es.md', generateId: slugFromPath }),
  schema: z.object({ title: z.string(), summary: z.string() }),
});

export const collections = { posts, translations };
