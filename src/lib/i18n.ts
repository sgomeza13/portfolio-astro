// Pure i18n helpers: no Astro imports, so `node --test src/lib/` can run them.

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

/** Same page in the other locale. English is unprefixed, Spanish lives under /es/. */
export function alternatePath(pathname: string, target: Locale): string {
  const bare = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  return target === 'en' ? bare : `/es${bare}`;
}

/** Spanish overrides title/summary; a missing translation falls back to English. */
export function localize<T extends { title: string; summary: string }>(
  data: T,
  translation: { title: string; summary: string } | undefined,
): T & { isFallback: boolean } {
  return translation
    ? { ...data, title: translation.title, summary: translation.summary, isFallback: false }
    : { ...data, isFallback: true };
}

const present: Record<Locale, string> = { en: 'Present', es: 'actualidad' };

export function formatPeriod(locale: Locale, start: Date, end?: Date): string {
  const fmt = (d: Date) =>
    new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' })
      .format(d)
      .replace(/\./g, '')
      .replace(/ de /, ' ');
  return `${fmt(start)} – ${end ? fmt(end) : present[locale]}`;
}

export function formatDate(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}
