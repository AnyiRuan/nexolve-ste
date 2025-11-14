'use client';

import { useTranslations } from 'next-intl';

export default function Testimonial() {
  const t = useTranslations('testimonial');

  return (
    <section className="container py-8">
      <blockquote className="card italic text-gray-700">
        "{t('quote')}"
        <span className="block not-italic mt-2 text-sm text-gray-500">— {t('author')}</span>
      </blockquote>
    </section>
  );
}
