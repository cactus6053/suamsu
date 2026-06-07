import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';

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

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t('emailLabel')}
              </p>
              <p className="mt-1 text-base font-medium text-slate-900">
                {t('emailValue')}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t('phoneLabel')}
              </p>
              <p className="mt-1 text-base font-medium text-slate-900">
                {t('phoneValue')}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t('addressLabel')}
              </p>
              <p className="mt-1 text-base text-slate-700">
                {t('addressValue')}
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                {t('formTitle')}
              </h2>
              <ContactForm />
              <p className="mt-3 text-xs text-slate-500">{t('formNote')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
