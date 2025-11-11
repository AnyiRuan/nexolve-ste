export const metadata = { title: 'Services – Nexolve' };

const services = [
  {
    title: 'AI & Automation Implementation',
    deliver: 'RAG Q&A, Email/Doc→ERP, AI reports, conversational support',
    time: 'PoC 2w → 6–12w',
    price: '$25k–$80k',
    recurring: '$1k–$3k/mo',
    link: '/services/ai-automation',
    icon: '⚡',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Website & Digital Growth',
    deliver: 'Next.js site, CMS, SEO, analytics, automation',
    time: '3–4w',
    price: '$5k–$10k',
    recurring: '$800–$2k/mo',
    link: '/services/website-digital-growth',
    icon: '🚀',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Custom App Development',
    deliver: 'RN app, backend, admin, reports & exports',
    time: '6–8w',
    price: '$12k–$25k',
    recurring: 'Support available',
    link: '/services/custom-apps',
    icon: '📱',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Blockchain & Compliance',
    deliver: 'Traceability, notarization, audit dashboards',
    time: '6–8w',
    price: '$15k–$40k',
    recurring: 'One-time',
    link: '/services/blockchain-compliance',
    icon: '🔐',
    gradient: 'from-orange-500 to-red-500'
  },
];

export default function Page() {
  return (
    <section className="section bg-gradient-mesh">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="accent-line mx-auto mb-6"></div>
          <h1 className="heading-lg mb-4">From Vision to Implementation</h1>
          <p className="text-xl text-neutral-600">
            Each engagement starts with a clear business problem and ends with a measurable result.
          </p>
        </div>

        {/* Services Grid - Mobile Friendly */}
        <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {services.map((service, index) => (
            <div key={service.title} className="card-feature group">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Icon & Title */}
                <div className="md:col-span-4">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="heading-sm mb-2 group-hover:text-brand-700 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="md:col-span-4">
                  <p className="text-sm font-semibold text-brand-900 mb-2">Deliverables</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{service.deliver}</p>
                </div>

                {/* Timeline & Price */}
                <div className="md:col-span-3">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-brand-900 mb-1">Timeline</p>
                      <p className="text-neutral-600 text-sm">{service.time}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-900 mb-1">Investment</p>
                      <p className="text-neutral-600 text-sm font-medium">{service.price}</p>
                      <p className="text-neutral-500 text-xs">{service.recurring}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="md:col-span-1 flex md:justify-end">
                  <a
                    href={service.link}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-900 text-white hover:bg-accent-500 transition-colors group-hover:scale-110 transform duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View (Hidden on Mobile) */}
        <div className="hidden xl:block mt-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="card-elegant overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left p-4 font-display font-semibold text-brand-900">Service</th>
                    <th className="text-left p-4 font-display font-semibold text-brand-900">Deliverables</th>
                    <th className="text-left p-4 font-display font-semibold text-brand-900">Timeline</th>
                    <th className="text-left p-4 font-display font-semibold text-brand-900">Investment</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.title} className="border-b border-neutral-100 hover:bg-brand-50/50 transition-colors">
                      <td className="p-4 font-semibold text-brand-900">{service.title}</td>
                      <td className="p-4 text-neutral-600 text-sm">{service.deliver}</td>
                      <td className="p-4 text-neutral-600 text-sm">{service.time}</td>
                      <td className="p-4">
                        <p className="font-semibold text-brand-900 text-sm">{service.price}</p>
                        <p className="text-neutral-500 text-xs">{service.recurring}</p>
                      </td>
                      <td className="p-4">
                        <a href={service.link} className="link-arrow text-sm">
                          View details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <p className="text-lg text-neutral-600 mb-6">
            Not sure which service is right for you?
          </p>
          <a href="/contact" className="btn btn-primary">
            Get a Custom Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}