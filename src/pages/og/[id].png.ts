import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import satori from 'satori';
import sharp from 'sharp';
import { getPosts } from '../../lib/posts';
import { ui } from '../../lib/ui';

// Social preview cards, rendered at build time: the paper's title page at 1200×630.
const font = (w: number) =>
  readFile(`node_modules/@fontsource/source-serif-4/files/source-serif-4-latin-${w}-normal.woff`);

export const getStaticPaths = (async () => {
  const posts = await getPosts('en');
  return [
    { params: { id: 'default' }, props: { title: ui.en.title, kind: ui.en.runningHead } },
    ...posts.map((p) => ({ params: { id: p.id }, props: { title: p.data.title, kind: ui.en.kinds[p.data.kind] } })),
  ];
}) satisfies GetStaticPaths;

const h = (type: string, style: Record<string, unknown>, children: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { title, kind } = props as { title: string; kind: string };
  const [regular, semibold] = await Promise.all([font(400), font(600)]);
  const svg = await satori(
    h('div', { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#fbfbf8', color: '#161a17', padding: '64px 80px', fontFamily: 'Serif' }, [
      h('div', { display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#6a726c', borderBottom: '1px solid #d9ddd8', paddingBottom: 18 }, [
        h('span', {}, ui.en.name),
        h('span', { color: '#2f5d46' }, kind),
      ]),
      h('div', { display: 'flex', flex: 1, alignItems: 'center', fontSize: title.length > 48 ? 64 : 80, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05 }, title),
      h('div', { display: 'flex', borderTop: '2px solid #161a17', paddingTop: 18, fontSize: 24, color: '#4c544e' }, 'Software Engineer · Backend & Infrastructure'),
    ]),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Serif', data: regular, weight: 400, style: 'normal' },
        { name: 'Serif', data: semibold, weight: 600, style: 'normal' },
      ],
    },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
