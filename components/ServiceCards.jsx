const services=[
  {slug:'ai-automation', title:'AI & Automation Implementation', desc:'Transform repetitive workflows into intelligent, self-learning systems with measurable ROI.'},
  {slug:'website-digital-growth', title:'Website & Digital Growth', desc:'High-performance, SEO-optimized sites with analytics and marketing automation.'},
  {slug:'custom-apps', title:'Custom App Development', desc:'Reusable templates for CRM, expense, inspection and more.'},
  {slug:'blockchain-compliance', title:'Blockchain & Compliance', desc:'Lightweight on-chain traceability and notarization for audits.'},
];
export default function ServiceCards(){
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {services.map(s=>(
          <a key={s.slug} href={`/services/${s.slug}`} className="card hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
            <span className="inline-block mt-4 text-accent font-medium">Learn more →</span>
          </a>
        ))}
      </div>
    </section>
  );
}