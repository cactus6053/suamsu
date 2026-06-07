import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/PageHeader';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title') };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutView />;
}

function AboutView() {
  const t = useTranslations('about');
  const values = t.raw('values') as Array<{ title: string; body: string }>;
  const history = t.raw('history') as Array<{ year: string; body: string }>;

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
      />

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t('missionTitle')}
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              {t('missionBody')}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
              {t('visionTitle')}
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-200">
              {t('visionBody')}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {t('valuesTitle')}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {t('historyTitle')}
        </h2>
        <ol className="mt-8 border-s-2 border-brand-200 ps-6 space-y-6">
          {history.map((h, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden
                className="absolute -start-[33px] top-1.5 inline-block h-3 w-3 rounded-full bg-brand-500 ring-4 ring-white"
              />
              <p className="text-sm font-semibold text-brand-700">{h.year}</p>
              <p className="mt-1 text-base text-slate-700">{h.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
