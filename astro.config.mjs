// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { figures } from './src/lib/rehype-figures.mjs';

/** @param {'light' | 'dark'} type @param {string} ink @param {string} ink2 @param {string} ink3 */
const inkTheme = (type, ink, ink2, ink3) => ({
  name: `ink-${type}`,
  type,
  colors: { 'editor.foreground': ink, 'editor.background': '#00000000' },
  tokenColors: [
    { settings: { foreground: ink } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: ink3, fontStyle: 'italic' } },
    { scope: ['string', 'constant.numeric', 'constant.language'], settings: { foreground: ink2 } },
    { scope: ['keyword', 'storage', 'support.function', 'entity.name.function'], settings: { fontStyle: 'bold' } },
  ],
});

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
      name: 'Host Grotesk',
      cssVariable: '--font-grotesk',
      weights: ['300 800'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-code',
      weights: [400, 700],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
  markdown: {
    // ponytail: legacy unified pipeline only for the figure-caption rehype plugin; port to a Sätteri hast plugin if it ever matters.
    processor: unified({ rehypePlugins: [figures] }),
    // Color means Kind, so code is set in ink: keywords bold, comments and strings in grey steps.
    shikiConfig: { themes: { light: inkTheme('light', '#141414', '#474746', '#686866'), dark: inkTheme('dark', '#ecece8', '#b6b6b1', '#8f8f8a') } },
  },
  vite: { plugins: [tailwindcss()] },
});
