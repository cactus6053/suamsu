'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing, localeLabels, type Locale } from '@/i18n/routing';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onChange(next: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 text-xs backdrop-blur"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => onChange(l)}
            disabled={isPending || active}
            aria-current={active ? 'true' : undefined}
            className={`rounded-full px-3 py-1 transition-colors ${
              active
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {localeLabels[l]}
          </button>
        );
      })}
    </div>
  );
}
