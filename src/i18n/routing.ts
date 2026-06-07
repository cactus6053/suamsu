import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ko', 'en', 'ar'],
  defaultLocale: 'ko',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

export const localeLabels: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  ar: 'العربية',
};

export const rtlLocales: Locale[] = ['ar'];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
