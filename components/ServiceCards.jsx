const services=[
  {
    slug:'ai-automation',
    title:'AI & Automation Implementation',
    desc:'Transform repetitive workflows into intelligent, self-learning systems with measurable ROI.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    slug:'website-digital-growth',
    title:'Website & Digital Growth',
    desc:'High-performance, SEO-optimized sites with analytics and marketing automation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    slug:'custom-apps',
    title:'Custom App Development',
    desc:'Reusable templates for CRM, expense, inspection and more.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    slug:'blockchain-compliance',
    title:'Blockchain & Compliance',
    desc:'Lightweight on-chain traceability and notarization for audits.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500'
  },
];

export default function ServiceCards(){
  return (
    <section className="section bg-gradient-subtle">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6"></div>
          <h2 className="heading-lg mb-4">Comprehensive Services</h2>
          <p className="text-lg text-neutral-600">
            End-to-end solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, index)=>(
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card-feature group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} p-0.5 mb-6 relative z-10`}>
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-brand-900">
                  {s.icon}
                </div>
              </div>

              <h3 className="heading-sm mb-3 relative z-10 group-hover:text-brand-700 transition-colors">
                {s.title}
              </h3>

              <p className="text-neutral-600 mb-6 leading-relaxed relative z-10">
                {s.desc}
              </p>

              <span className="link-arrow font-semibold text-brand-600 relative z-10">
                Learn more
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}