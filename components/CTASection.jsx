'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* 背景装饰层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-brand-dark"></div>

      {/* 装饰性图案 */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>

      {/* 装饰性色块 */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-light rounded-full blur-3xl opacity-20"></div>

      {/* 装饰性线条 */}
      <div className="absolute top-10 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

      {/* 装饰性几何图形 */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent/30 rounded-lg rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-accent/30 rounded-full hidden lg:block"></div>

      <div className="container relative text-center">
        <div className="max-w-3xl mx-auto">
          {/* 装饰性图标 */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm mb-6 animate-float">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            {t('title')}
          </h3>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-slide-up">
            {t('subtitle')}
          </p>

          {/* 装饰性分隔线 */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>

          <div className="flex flex-wrap gap-4 justify-center animate-slide-up">
            <a
              href={`/${locale}/contact`}
              className="btn btn-primary shadow-glow hover:shadow-2xl"
            >
              {t('primaryBtn')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href={`/${locale}/contact`}
              className="btn glass text-white hover:bg-white/20 border-2 border-white/30"
            >
              {t('secondaryBtn')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>

          {/* 底部装饰性元素 */}
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
