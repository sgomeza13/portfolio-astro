import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, postHref } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts('en');
  return rss({
    title: 'Simón Gómez Arango',
    description: 'Posts on backend systems, infrastructure and engineering leadership.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: postHref('en', p.id),
      categories: [p.data.kind, ...p.data.tags],
    })),
  });
}
