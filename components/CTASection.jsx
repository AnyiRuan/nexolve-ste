'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="container my-16 text-center">
      <div className="card">
        <h3 className="text-2xl font-semibold">{t('title')}</h3>
        <p className="text-gray-600 mt-2">{t('subtitle')}</p>
        <div className="mt-6 flex gap-4 justify-center">
          <a href={`/${locale}/contact`} className="btn btn-primary">{t('primaryBtn')}</a>
          <a href={`/${locale}/contact`} className="btn btn-secondary">{t('secondaryBtn')}</a>
        </div>
      </div>
    </section>
  );
}
