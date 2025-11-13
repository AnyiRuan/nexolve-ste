export const metadata={ title:'Custom App Development – Nexolve' };
export default async function Page({ params }){
  const { locale } = await params;
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Custom App Development</h1>
      <p className="mt-3 text-gray-600">Deliver apps that work across web and mobile with speed and precision. Ideal for expense tracking, CRM, and operational tools.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h3 className="font-semibold">What you get</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700"><li>Cross-platform React Native app</li><li>Backend + Admin Panel</li><li>Reports & Export Functions</li><li>Data Sync & Role Permissions</li></ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">How it works</h3>
          <ol className="list-decimal ml-5 mt-2 text-gray-700"><li>Discovery & Scope</li><li>Template-based Build</li><li>Testing & UAT</li><li>Go-Live & Support</li></ol>
        </div>
      </div>
      <div className="mt-8 card">
        <p className="text-gray-700"><span className="font-semibold">Starting at:</span> $12k–$25k + support plan</p>
        <a href={`/${locale}/contact`} className="btn btn-primary mt-4">Get an App Quote</a>
      </div>
    </section>
  );
}