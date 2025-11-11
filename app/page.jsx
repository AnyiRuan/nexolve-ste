import Hero from '@/components/Hero';
import ValueGrid from '@/components/ValueGrid';
import ServiceCards from '@/components/ServiceCards';
import CTASection from '@/components/CTASection';

export default function Page(){
  return (<>
    <Hero/>
    <ValueGrid/>
    <ServiceCards/>

    {/* Testimonials Section */}
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6"></div>
          <h2 className="heading-lg mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-neutral-600">
            Real results from organizations that transformed their operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="card-elegant animate-fade-in-up">
            <div className="mb-6">
              <svg className="w-10 h-10 text-accent-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-6 italic">
              "Our automation replaced 80% of repetitive work, cut errors by 90%, and paid for itself in under three months."
            </p>
            <div className="border-t border-neutral-200 pt-4">
              <p className="font-semibold text-brand-900">Operations Director</p>
              <p className="text-sm text-neutral-600">Logistics Sector</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="card-elegant animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="mb-6">
              <svg className="w-10 h-10 text-accent-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-6 italic">
              "The custom CRM system streamlined our entire sales process. We saw a 40% increase in conversion rates within the first quarter."
            </p>
            <div className="border-t border-neutral-200 pt-4">
              <p className="font-semibold text-brand-900">Sales Manager</p>
              <p className="text-sm text-neutral-600">B2B Services</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="card-elegant animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="mb-6">
              <svg className="w-10 h-10 text-accent-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-6 italic">
              "Their blockchain solution gave us the audit trail transparency we needed for compliance. Implementation was smooth and professional."
            </p>
            <div className="border-t border-neutral-200 pt-4">
              <p className="font-semibold text-brand-900">Compliance Officer</p>
              <p className="text-sm text-neutral-600">Financial Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="section bg-gradient-subtle">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up">
            <div className="kpi mb-2">80%</div>
            <p className="text-neutral-600">Average time saved</p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="kpi mb-2">24h</div>
            <p className="text-neutral-600">Response time</p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="kpi mb-2">90%</div>
            <p className="text-neutral-600">Error reduction</p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="kpi mb-2">3mo</div>
            <p className="text-neutral-600">Average ROI timeline</p>
          </div>
        </div>
      </div>
    </section>

    <CTASection/>
  </>);
}