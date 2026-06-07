import { useTranslations } from 'next-intl';

export function Logo({ className = '' }: { className?: string }) {
  const t = useTranslations('meta');
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-300 to-brand-600 text-white shadow-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3c3.5 4.5 6 8 6 11a6 6 0 1 1-12 0c0-3 2.5-6.5 6-11z"
            fill="white"
            opacity="0.9"
          />
        </svg>
      </span>
      <span className="text-base font-semibold tracking-tight">
        {t('siteName')}
      </span>
    </div>
  );
}
