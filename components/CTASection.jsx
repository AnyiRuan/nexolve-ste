export default function CTASection(){
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 rounded-3xl"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-500 rounded-full blur-3xl opacity-10"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-8 py-16 md:py-20">
            <div className="accent-line mx-auto mb-6 bg-gradient-to-r from-accent-400 to-white"></div>

            <h3 className="heading-lg text-white mb-4 max-w-3xl mx-auto">
              Let's turn your operations into your next competitive advantage.
            </h3>

            <p className="text-xl text-brand-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a discovery call and receive a tailored implementation plan within 48 hours.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn btn-primary">
                Get My Custom Plan
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/contact" className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-brand-900 backdrop-blur-sm">
                Book Consultation
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center items-center text-brand-100 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span>Fast implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Proven ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}