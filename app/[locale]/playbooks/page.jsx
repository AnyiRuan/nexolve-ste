export const metadata={ title:'Implementation Playbooks – Nexolve' };
export default async function Page({ params }){
  const { locale } = await params;
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Implementation Playbooks</h1>
      <p className="mt-2 text-gray-600">Our step-by-step frameworks for AI, automation, and digital execution.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card">
          <h3 className="font-semibold">AI Discovery & Design</h3>
          <p className="text-gray-600 mt-2">Identify ROI candidates, data readiness, model selection.</p>
          <a href={`/${locale}/contact`} className="inline-block mt-3 text-accent">Get the Playbook →</a>
        </div>
        <div className="card">
          <h3 className="font-semibold">PoC → Production in 6 Weeks</h3>
          <p className="text-gray-600 mt-2">Prototype to stable, monitored deployment.</p>
          <a href={`/${locale}/contact`} className="inline-block mt-3 text-accent">Get the Playbook →</a>
        </div>
        <div className="card">
          <h3 className="font-semibold">Digital Presence Launch Checklist</h3>
          <p className="text-gray-600 mt-2">Performant, analytics-ready, SEO-optimized site.</p>
          <a href={`/${locale}/contact`} className="inline-block mt-3 text-accent">Get the Playbook →</a>
        </div>
        <div className="card">
          <h3 className="font-semibold">Governance & Compliance for AI</h3>
          <p className="text-gray-600 mt-2">Privacy, traceability, and security guidelines.</p>
          <a href={`/${locale}/contact`} className="inline-block mt-3 text-accent">Get the Playbook →</a>
        </div>
      </div>
      <div className="mt-8"><a href={`/${locale}/contact`} className="btn btn-primary">Talk to our Implementation Team</a></div>
    </section>
  );
}