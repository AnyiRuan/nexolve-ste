'use client';

import { useTranslations } from 'next-intl';

const items = [
  { key: 'implementationFirst', icon: '⚡', color: 'accent' },
  { key: 'aiNative', icon: '🤖', color: 'brand' },
  { key: 'dataDriven', icon: '📊', color: 'accent' },
  { key: 'secure', icon: '🔒', color: 'brand' }
];

export default function ValueGrid() {
  const t = useTranslations('valueGrid');

  return (
    <section className="relative py-16 md:py-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>

      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.key}
              className="card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 装饰性色块 */}
              <div className={`absolute -top-3 -right-3 w-16 h-16 bg-${item.color}/10 rounded-full blur-xl transition-all duration-300 group-hover:scale-150 group-hover:blur-2xl`}></div>

              {/* 图标容器 */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color === 'accent' ? 'from-accent/20 to-accent/5' : 'from-brand/20 to-brand/5'} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* 装饰性竖线 */}
              <div className={`absolute left-0 top-6 w-1 h-12 bg-gradient-to-b ${item.color === 'accent' ? 'from-accent to-transparent' : 'from-brand to-transparent'} rounded-full`}></div>

              <h3 className="font-semibold text-lg text-brand relative">
                {t(`${item.key}.title`)}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {t(`${item.key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
