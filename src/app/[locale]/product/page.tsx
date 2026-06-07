import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/PageHeader';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'product' });
  return { title: t('title') };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductView />;
}

function ProductView() {
  const t = useTranslations('product');
  const quality = t.raw('quality') as Array<{
    label: string;
    value: string;
    note: string;
  }>;
  const process = t.raw('process') as Array<{
    step: string;
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
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {t('sourceTitle')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {t('sourceBody')}
            </p>
          </div>
          <div className="md:col-span-3">
            <div
              aria-hidden
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-100 via-brand-200 to-brand-400"
            >
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    'radial-gradient(120% 80% at 30% 10%, rgba(255,255,255,0.7) 0%, transparent 60%), radial-gradient(80% 80% at 80% 90%, rgba(8, 47, 73, 0.45) 0%, transparent 60%)',
                }}
              />
              <div className="absolute bottom-4 start-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-brand-800 backdrop-blur">
                Gangwon, Korea · 200m+ aquifer
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {t('qualityTitle')}
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-100">
                {quality.map((q, i) => (
                  <tr key={i}>
                    <th
                      scope="row"
                      className="w-1/3 px-5 py-4 text-start font-medium text-slate-700"
                    >
                      {q.label}
                    </th>
                    <td className="px-5 py-4 font-semibold text-slate-900">
                      {q.value}
                    </td>
                    <td className="px-5 py-4 text-slate-500">{q.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">{t('qualityNotes')}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {t('processTitle')}
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {process.map((p, i) => (
            <li
              key={i}
              className="relative rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-xs font-semibold tracking-wider text-brand-600">
                {p.step}
              </span>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
