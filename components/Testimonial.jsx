'use client';

import { useTranslations } from 'next-intl';

export default function Testimonial() {
  const t = useTranslations('testimonial');

  return (
    <section className="relative py-16 md:py-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-brand/5"></div>
      <div className="absolute inset-0 pattern-dots opacity-20"></div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <blockquote className="card relative bg-white/80 backdrop-blur-sm border-l-4 border-accent shadow-xl">
            {/* 装饰性引号 */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white text-4xl font-serif shadow-lg rotate-6">
              "
            </div>

            {/* 装饰性色块 */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl"></div>

            <div className="relative pt-4">
              <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                "{t('quote')}"
              </p>

              {/* 分隔线 */}
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-brand rounded-full mb-4"></div>

              <div className="flex items-center gap-4">
                {/* 头像占位符 */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-brand flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {t('author').charAt(0)}
                </div>

                <div className="not-italic">
                  <div className="font-semibold text-brand">{t('author')}</div>
                  <div className="text-sm text-gray-500">{t('role') || 'Client'}</div>
                </div>
              </div>
            </div>

            {/* 星级评价装饰 */}
            <div className="flex gap-1 mt-4 justify-end">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
