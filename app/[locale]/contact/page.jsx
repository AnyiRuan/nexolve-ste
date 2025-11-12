'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch('/api/lead', { method: 'POST', body: JSON.stringify(payload) });
    setStatus(res.ok ? t('form.successMessage') : t('form.errorMessage'));
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-2 text-gray-600">{t('subtitle')}</p>
      <form onSubmit={onSubmit} className="card mt-6 grid md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder={t('form.name')}
          className="border p-3 rounded-xl"
          required
        />
        <input
          name="company"
          placeholder={t('form.company')}
          className="border p-3 rounded-xl"
          required
        />
        <input
          name="email"
          type="email"
          placeholder={t('form.email')}
          className="border p-3 rounded-xl md:col-span-2"
          required
        />
        <select name="projectType" className="border p-3 rounded-xl">
          {[0, 1, 2, 3].map(i => (
            <option key={i}>{t(`projectTypes.${i}`)}</option>
          ))}
        </select>
        <select name="budget" className="border p-3 rounded-xl">
          {[0, 1, 2, 3].map(i => (
            <option key={i}>{t(`budgetOptions.${i}`)}</option>
          ))}
        </select>
        <textarea
          name="message"
          placeholder={t('form.message')}
          className="border p-3 rounded-xl md:col-span-2"
          rows={5}
        />
        <button className="btn btn-primary md:col-span-2" type="submit">
          {t('form.submit')}
        </button>
        {status && <p className="text-green-600 md:col-span-2">{status}</p>}
      </form>
    </section>
  );
}
