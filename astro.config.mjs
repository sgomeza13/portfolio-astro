// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { figures } from './src/lib/rehype-figures.mjs';

export default defineConfig({
  // ponytail: workers.dev until sgomeza.com is bought; change this one line then.
  site: 'https://portfolio-astro.sgomeza13.workers.dev',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      weights: ['200 900'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
  markdown: {
    // ponytail: legacy unified pipeline only for the figure-caption rehype plugin; port to a Sätteri hast plugin if it ever matters.
    processor: unified({ rehypePlugins: [figures] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark-dimmed' } },
  },
  vite: { plugins: [tailwindcss()] },
});
