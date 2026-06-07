import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeView />;
}

function HomeView() {
  const t = useTranslations('home');
  const cards = [
    {
      href: '/about' as const,
      title: t('sectionAboutTitle'),
      body: t('sectionAboutBody'),
    },
    {
      href: '/product' as const,
      title: t('sectionProductTitle'),
      body: t('sectionProductBody'),
    },
    {
      href: '/distribution' as const,
      title: t('sectionDistributionTitle'),
      body: t('sectionDistributionBody'),
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-white"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-[420px] wave-mask"
          style={{
            backgroundImage:
              'radial-gradient(60% 60% at 50% 0%, rgba(14, 165, 233, 0.18), transparent 70%)',
          }}
        />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            {t('heroEyebrow')}
          </p>
          <h1 className="max-w-3xl whitespace-pre-line text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600 md:text-lg">
            {t('heroSubtitle')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/product"
              className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700"
            >
              {t('heroCtaPrimary')}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400"
            >
              {t('heroCtaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex h-full flex-col">
                <h2 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {card.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                  {t('readMore')}
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
