export const metadata={ title:'Implementation Stories – Nexolve' };
export default function Page(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Implementation Stories</h1>
      <p className="mt-2 text-gray-600">Real-world problems. Practical solutions. Proven results.</p>
      <div dangerouslySetInnerHTML={__html:`<div class='grid md:grid-cols-2 gap-6 mt-8'><div class='card'><h3 class='font-semibold'>AI Email Parser for Operations</h3><p class='kpi mt-1'>80% faster data entry</p><p class='text-gray-600 mt-2'>Automated document classification and data entry into ERP</p></div><div class='card'><h3 class='font-semibold'>Knowledge Assistant for Internal Teams</h3><p class='kpi mt-1'>60% fewer internal queries</p><p class='text-gray-600 mt-2'>LLM-powered Q&A integrated with knowledge base</p></div><div class='card'><h3 class='font-semibold'>AI-Driven Report Automation</h3><p class='kpi mt-1'>Reports in 10 minutes</p><p class='text-gray-600 mt-2'>Scheduled analytics + AI summarization</p></div></div>`} />
      <div className="mt-8"><a href="/contact" className="btn btn-primary">Talk to our Implementation Team</a></div>
    </section>
  );
}