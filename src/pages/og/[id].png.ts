import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import satori from 'satori';
import sharp from 'sharp';
import { getPosts } from '../../lib/posts';
import { ui } from '../../lib/ui';

// Social preview cards, rendered at build time: the sign band, a Kind bullet and the title at 1200×630.
const font = (w: number) =>
  readFile(`node_modules/@fontsource/host-grotesk/files/host-grotesk-latin-${w}-normal.woff`);
const kindColor: Record<string, string> = { project: '#9a412b', role: '#356890', 'case-study': '#834d7e', note: '#b47c2e' };

export const getStaticPaths = (async () => {
  const posts = await getPosts('en');
  return [
    { params: { id: 'default' }, props: { title: ui.en.title, label: ui.en.tagline, color: '#12201b' } },
    ...posts.map((p) => ({ params: { id: p.id }, props: { title: p.data.title, label: ui.en.kinds[p.data.kind], color: kindColor[p.data.kind] } })),
  ];
}) satisfies GetStaticPaths;

const h = (type: string, style: Record<string, unknown>, children: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { title, label, color } = props as { title: string; label: string; color: string };
  const [regular, semibold] = await Promise.all([font(400), font(600)]);
  const svg = await satori(
    h('div', { width: 1200, height: 630, display: 'flex', flexDirection: 'column', background: '#f5f2e9', color: '#12201b', fontFamily: 'Grotesk' }, [
      h('div', { display: 'flex', height: 88, alignItems: 'center', padding: '0 72px', background: '#0e4a3a', color: '#f5f2e9', fontSize: 28, fontWeight: 600 }, ui.en.name),
      h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, padding: '56px 72px 64px' }, [
        h('div', { display: 'flex', alignItems: 'center', fontSize: 28, color: '#474746' }, [
          h('div', { width: 22, height: 22, borderRadius: 11, background: color, marginRight: 16 }, ''),
          h('span', {}, label),
        ]),
        h('div', { display: 'flex', width: 1000, fontSize: title.length > 48 ? 68 : 84, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1.0 }, title),
      ]),
    ]),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Grotesk', data: regular, weight: 400, style: 'normal' },
        { name: 'Grotesk', data: semibold, weight: 600, style: 'normal' },
      ],
    },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
