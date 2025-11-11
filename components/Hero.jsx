export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-gradient-mesh min-h-[90vh] flex items-center">
      {/* Elegant background with patterns */}
      <div className="absolute inset-0 opacity-40">
        <img src="/bg-gradient.svg" alt="" className="w-full h-full object-cover"/>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container py-20 md:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Accent line */}
          <div className="accent-line mb-6 animate-slide-in"></div>

          <h1 className="heading-xl animate-fade-in-up text-balance">
            Implementation. Automation. Results.
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-neutral-600 max-w-3xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We don't just build technology — we implement <span className="text-brand-600 font-semibold">measurable transformation</span>.
            From AI automation to custom digital systems, Nexolve helps organizations replace manual work with intelligent workflows that scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a href="/contact" className="btn btn-primary">
              Get a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/stories" className="btn btn-outline">Explore Stories</a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-8 items-center opacity-70 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">Measurable ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">48hr Response</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 opacity-30">
        <img src="/pattern-wave.svg" alt="" className="w-full"/>
      </div>
    </section>
  );
}