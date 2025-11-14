export const metadata={ title:'AI & Automation Implementation – Nexolve' };
export default async function Page({ params }){
  const { locale } = await params;
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">AI & Automation Implementation</h1>
      <p className="mt-3 text-gray-600">We identify and automate the workflows that slow you down — from document processing and reporting to customer support.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h3 className="font-semibold">What you get</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700"><li>AI Knowledge Assistant (RAG-based Q&A)</li><li>Document / Email Automation to ERP / CRM</li><li>Report Generation & KPI Forecasting</li><li>Conversational AI Support Desk</li></ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">How it works</h3>
          <ol className="list-decimal ml-5 mt-2 text-gray-700"><li>Discovery</li><li>PoC (2 weeks)</li><li>Full Deployment</li><li>Monitoring & ROI Reporting</li></ol>
        </div>
      </div>
      <div className="mt-8 card">
        <p className="text-gray-700"><span className="font-semibold">Starting at:</span> $25k–$80k + $1k–$3k/month</p>
        <a href={`/${locale}/contact`} className="btn btn-primary mt-4">Book AI Discovery Call</a>
      </div>
    </section>
  );
}