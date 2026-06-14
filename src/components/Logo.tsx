import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Logo({ className = '' }: { className?: string }) {
  const t = useTranslations('meta');
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-100"
      >
        <Image src="/images/mascot.png" alt="" width={32} height={32} className="object-cover" />
      </span>
      <span className="text-base font-semibold tracking-tight">
        {t('siteName')}
      </span>
    </div>
  );
}
