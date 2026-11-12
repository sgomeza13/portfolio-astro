// Pure i18n helpers: no Astro imports, so `node --test src/lib/` can run them.

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

/** '' for English, '/es' for Spanish: prepend to any site path. */
export const localePrefix = (locale: Locale) => (locale === 'es' ? '/es' : '');

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

/** "Jan 2024" / "ene 2024"; month: 'long' gives "January 2024" / "enero 2024". */
export function monthYear(locale: Locale, d: Date, month: 'short' | 'long' = 'short'): string {
  return new Intl.DateTimeFormat(locale, { month, year: 'numeric', timeZone: 'UTC' })
    .format(d)
    .replace(/\./g, '')
    .replace(/ de /, ' ');
}

export function formatPeriod(locale: Locale, start: Date, end?: Date): string {
  return `${monthYear(locale, start)} – ${end ? monthYear(locale, end) : present[locale]}`;
}

export function formatDate(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}
