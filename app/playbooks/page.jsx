export const metadata={ title:'Implementation Playbooks – Nexolve' };
export default function Page(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Implementation Playbooks</h1>
      <p className="mt-2 text-gray-600">Our step-by-step frameworks for AI, automation, and digital execution.</p>
      <div dangerouslySetInnerHTML={{ __html: `<div class='grid md:grid-cols-2 gap-6 mt-8'><div class='card'><h3 class='font-semibold'>AI Discovery & Design</h3><p class='text-gray-600 mt-2'>Identify ROI candidates, data readiness, model selection.</p><a href='/contact' class='inline-block mt-3 text-accent'>Get the Playbook →</a></div><div class='card'><h3 class='font-semibold'>PoC → Production in 6 Weeks</h3><p class='text-gray-600 mt-2'>Prototype to stable, monitored deployment.</p><a href='/contact' class='inline-block mt-3 text-accent'>Get the Playbook →</a></div><div class='card'><h3 class='font-semibold'>Digital Presence Launch Checklist</h3><p class='text-gray-600 mt-2'>Performant, analytics-ready, SEO-optimized site.</p><a href='/contact' class='inline-block mt-3 text-accent'>Get the Playbook →</a></div><div class='card'><h3 class='font-semibold'>Governance & Compliance for AI</h3><p class='text-gray-600 mt-2'>Privacy, traceability, and security guidelines.</p><a href='/contact' class='inline-block mt-3 text-accent'>Get the Playbook →</a></div></div>` }} />
      <div className="mt-8"><a href="/contact" className="btn btn-primary">Talk to our Implementation Team</a></div>
    </section>
  );
}