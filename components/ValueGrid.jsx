'use client';

import { useTranslations } from 'next-intl';

const items = [
  'implementationFirst',
  'aiNative',
  'dataDriven',
  'secure'
];

export default function ValueGrid() {
  const t = useTranslations('valueGrid');

  return (
    <section className="container py-12 grid md:grid-cols-4 gap-6">
      {items.map(item => (
        <div key={item} className="card">
          <h3 className="font-semibold">{t(`${item}.title`)}</h3>
          <p className="text-gray-600 mt-2">{t(`${item}.text`)}</p>
        </div>
      ))}
    </section>
  );
}
