import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/PageHeader';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title') };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactView />;
}

function ContactView() {
  const t = useTranslations('contact');

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
      />

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t('emailLabel')}
            </p>
            <p className="mt-1 text-base font-medium text-slate-900">
              {t('emailValue')}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t('phoneLabel')}
            </p>
            <p className="mt-1 text-base font-medium text-slate-900">
              {t('phoneValue')}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t('addressLabel')}
            </p>
            <p className="mt-1 text-base text-slate-700">
              {t('addressValue')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
