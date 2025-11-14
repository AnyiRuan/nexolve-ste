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

export default function ServiceCards() {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {serviceSlugs.map(service => (
          <a
            key={service}
            href={`/${locale}/services/${slugMap[service]}`}
            className="card hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{t(`${service}.title`)}</h3>
            <p className="text-gray-600 mt-2">{t(`${service}.desc`)}</p>
            <span className="inline-block mt-4 text-accent font-medium">{tCommon('learnMore')} →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
