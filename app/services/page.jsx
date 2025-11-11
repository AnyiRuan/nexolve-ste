export const metadata={ title:'Services – Nexolve' };
const rows=[
  {title:'AI & Automation Implementation', deliver:'RAG Q&A, Email/Doc→ERP, AI reports, conversational support', time:'PoC 2w → 6–12w', price:'$25k–$80k + $1k–$3k/mo', link:'/services/ai-automation'},
  {title:'Website & Digital Growth', deliver:'Next.js site, CMS, SEO, analytics, automation', time:'3–4w', price:'$5k–$10k + $800–$2k/mo', link:'/services/website-digital-growth'},
  {title:'Custom App Development', deliver:'RN app, backend, admin, reports & exports', time:'6–8w', price:'$12k–$25k + support', link:'/services/custom-apps'},
  {title:'Blockchain & Compliance', deliver:'Traceability, notarization, audit dashboards', time:'6–8w', price:'$15k–$40k', link:'/services/blockchain-compliance'},
];
export default function Page(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Our Services: From Vision to Implementation</h1>
      <p className="mt-2 text-gray-600">Each engagement starts with a clear business problem and ends with a measurable result.</p>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-3">Service</th><th className="p-3">Deliverables</th>
              <th className="p-3">Timeline</th><th className="p-3">Starting at</th><th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r=> (
              <tr key={r.title} className="border-b border-gray-100">
                <td className="p-3 font-medium">{r.title}</td>
                <td className="p-3">{r.deliver}</td>
                <td className="p-3">{r.time}</td>
                <td className="p-3">{r.price}</td>
                <td className="p-3"><a className="text-accent" href={r.link}>View →</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}