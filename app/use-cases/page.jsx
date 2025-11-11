export const metadata={ title:'Use Case Library – Nexolve' };
export default function Page(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Use Case Library</h1>
      <p className="mt-2 text-gray-600">See how our implementation models apply across industries and workflows.</p>
      <div dangerouslySetInnerHTML={__html:`<div class='grid md:grid-cols-2 gap-6 mt-8'><div class='card'><h3 class='font-semibold'>Email → ERP Automation</h3><p class='text-gray-500 mt-1'>Freight & Logistics • GPT-4 + Python + API</p><p class='kpi mt-2'>80% faster operations</p></div><div class='card'><h3 class='font-semibold'>Knowledge Assistant</h3><p class='text-gray-500 mt-1'>Consulting / Legal • RAG + Vector DB</p><p class='kpi mt-2'>60% fewer support requests</p></div><div class='card'><h3 class='font-semibold'>Expense Tracking App</h3><p class='text-gray-500 mt-1'>SME Finance • React Native + Firebase</p><p class='kpi mt-2'>50% reduced admin time</p></div><div class='card'><h3 class='font-semibold'>Traceability Dashboard</h3><p class='text-gray-500 mt-1'>Manufacturing • Blockchain + REST API</p><p class='kpi mt-2'>Audit transparency</p></div></div>`} />
      <div className="mt-8"><a href="/contact" className="btn btn-primary">Talk to our Implementation Team</a></div>
    </section>
  );
}