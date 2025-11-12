export const metadata={ title:'Blockchain & Compliance – Nexolve' };
export default async function Page({ params }){
  const { locale } = await params;
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Blockchain & Compliance</h1>
      <p className="mt-3 text-gray-600">Leverage blockchain for traceability, document integrity, and compliance monitoring — practical, not overbuilt.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h3 className="font-semibold">What you get</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700"><li>Smart Contracts / Notarization APIs</li><li>Traceability Dashboards</li><li>Audit Reports & Chain Explorer</li><li>Compliance Data Layer</li></ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">How it works</h3>
          <ol className="list-decimal ml-5 mt-2 text-gray-700"><li>Use Case Mapping</li><li>Testnet Deployment</li><li>Audit & Optimize</li><li>Mainnet Launch & Monitor</li></ol>
        </div>
      </div>
      <div className="mt-8 card">
        <p className="text-gray-700"><span className="font-semibold">Starting at:</span> $15k–$40k</p>
        <a href={`/${locale}/contact`} className="btn btn-primary mt-4">Schedule a Blockchain Consultation</a>
      </div>
    </section>
  );
}