import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'About – Nexolve' };

export default async function Page() {
  const t = await getTranslations('about');

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-2 text-gray-600 max-w-3xl">
        {t('intro')}
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card">
          <h3 className="font-semibold">{t('mission.title')}</h3>
          <p className="mt-2 text-gray-600">{t('mission.text')}</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">{t('vision.title')}</h3>
          <p className="mt-2 text-gray-600">{t('vision.text')}</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">{t('values.title')}</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>{t('values.items.0')}</li>
            <li>{t('values.items.1')}</li>
            <li>{t('values.items.2')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
