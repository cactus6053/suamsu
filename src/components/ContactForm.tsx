'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function ContactForm() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-800">
        ✓ {t('formSubmit')} — OK
      </div>
    );
  }

  return (
    <form className="mt-5 space-y-4" onSubmit={onSubmit}>
      <div>
        <label className="text-xs font-medium text-slate-700">
          {t('formName')}
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-slate-700">
          {t('formCompany')}
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-slate-700">
          {t('formEmail')}
        </label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-slate-700">
          {t('formMessage')}
        </label>
        <textarea
          required
          rows={5}
          className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700"
      >
        {t('formSubmit')}
      </button>
    </form>
  );
}
