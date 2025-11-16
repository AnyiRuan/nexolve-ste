'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const serviceSlugs = [
  'aiAutomation',
  'websiteDigitalGrowth',
  'customApps',
  'blockchainCompliance',
  'digitalMarketing',
  'wechatMiniProgram'
];

const slugMap = {
  'aiAutomation': 'ai-automation',
  'websiteDigitalGrowth': 'website-digital-growth',
  'customApps': 'custom-apps',
  'blockchainCompliance': 'blockchain-compliance',
  'digitalMarketing': 'digital-marketing',
  'wechatMiniProgram': 'wechat-mini-program'
};

const serviceIcons = {
  'aiAutomation': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'websiteDigitalGrowth': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  'customApps': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  'blockchainCompliance': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'digitalMarketing': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
  'wechatMiniProgram': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  )
};

export default function ServiceCards() {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>

      <div className="container relative">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand decorative-line inline-block pb-4">
            {t('title') || 'Our Services'}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('subtitle') || 'Comprehensive digital solutions tailored to your business needs'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceSlugs.map((service, index) => (
            <a
              key={service}
              href={`/${locale}/services/${slugMap[service]}`}
              className="card group hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 装饰性色块 */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${index % 2 === 0 ? 'from-accent/10 to-transparent' : 'from-brand/10 to-transparent'} rounded-bl-full transition-all duration-300 group-hover:scale-110`}></div>

              {/* 装饰性数字 */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-accent/20 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* 图标 */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? 'from-accent/20 to-accent/5' : 'from-brand/20 to-brand/5'} flex items-center justify-center ${index % 2 === 0 ? 'text-accent' : 'text-brand'} mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                {serviceIcons[service]}
              </div>

              <h3 className="text-xl font-semibold text-brand mb-3 relative z-10 group-hover:text-accent transition-colors duration-300">
                {t(`${service}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 relative z-10">
                {t(`${service}.desc`)}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium relative z-10 group-hover:gap-3 transition-all duration-300">
                {tCommon('learnMore')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
