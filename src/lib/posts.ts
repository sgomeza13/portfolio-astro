import { existsSync } from 'node:fs';
import { getCollection, type CollectionEntry } from 'astro:content';
import { kinds } from '../content.config';
import { localize, localePrefix, type Locale } from './i18n';

export type Kind = (typeof kinds)[number];
export { kinds };

/** All Posts for a locale, newest first, with Spanish prose merged over English metadata. */
export async function getPosts(locale: Locale) {
  const [posts, translations] = await Promise.all([
    getCollection('posts'),
    locale === 'es' ? getCollection('translations') : Promise.resolve([]),
  ]);
  const byId = new Map(translations.map((t) => [t.id, t]));
  return posts
    .map((post) => {
      const tr = byId.get(post.id);
      return {
        id: post.id,
        // The entry whose body gets rendered: the translation when one exists.
        entry: (tr ?? post) as CollectionEntry<'posts'> | CollectionEntry<'translations'>,
        data: locale === 'en' ? { ...post.data, isFallback: false } : localize(post.data, tr?.data),
      };
    })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export type LocalPost = Awaited<ReturnType<typeof getPosts>>[number];

export const postHref = (locale: Locale, id: string) => `${localePrefix(locale)}/posts/${id}/`;

/** The CV link appears only once the PDF has been dropped into public/. */
export const hasCv = existsSync('public/cv.pdf');
