'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-accent/5 to-transparent"></div>

      {/* 装饰性网格图案 */}
      <div className="absolute inset-0 pattern-grid opacity-40"></div>

      {/* 装饰性色块 - 左上 */}
      <div className="decorative-blob w-96 h-96 bg-accent -top-48 -left-48"
           style={{filter: 'blur(80px)', opacity: '0.1'}}></div>

      {/* 装饰性色块 - 右下 */}
      <div className="decorative-blob w-96 h-96 bg-brand -bottom-48 -right-48"
           style={{filter: 'blur(80px)', opacity: '0.08'}}></div>

      {/* 装饰性几何形状 */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-accent/20 rounded-lg rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-brand/20 rounded-full hidden lg:block"></div>

      <div className="container py-20 md:py-32 relative">
        <div className="max-w-4xl">
          {/* 装饰性小标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-slide-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-brand">Professional Digital Solutions</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight decorative-line pb-4 animate-fade-in">
            {t('title')}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed animate-slide-up">
            {t('subtitle')}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-slide-up">
            <a href={`/${locale}/contact`} className="btn btn-primary">
              {t('ctaPrimary')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href={`/${locale}/stories`} className="btn btn-secondary">
              {t('ctaSecondary')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 底部装饰性波浪 */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
