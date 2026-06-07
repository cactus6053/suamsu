import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/PageHeader';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'distribution' });
  return { title: t('title') };
}

export default async function DistributionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DistributionView />;
}

function DistributionView() {
  const t = useTranslations('distribution');
  const phases = t.raw('phases') as Array<{
    phase: string;
    title: string;
    body: string;
  }>;

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
      />

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {t('phasesTitle')}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {phases.map((p, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {p.phase}
                </span>
                <span
                  aria-hidden
                  className="text-3xl font-semibold text-slate-200"
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {t('partnersTitle')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {t('partnersBody')}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {t('logisticsTitle')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {t('logisticsBody')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
