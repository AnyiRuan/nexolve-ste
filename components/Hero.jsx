'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/bg-gradient.svg" alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="container py-16 md:py-24 relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          {t('subtitle')}
        </p>
        <div className="mt-8 flex gap-4">
          <a href={`/${locale}/contact`} className="btn btn-primary">{t('ctaPrimary')}</a>
          <a href={`/${locale}/stories`} className="btn btn-secondary">{t('ctaSecondary')}</a>
        </div>
      </div>
    </section>
  );
}
