export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/bg-gradient.svg" alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="container py-16 md:py-24 relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Implementation. Automation. Results.</h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          We don’t just build technology — we implement measurable transformation.
          From AI automation to custom digital systems, Nexolve helps organizations replace manual work with intelligent workflows that scale.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/contact" className="btn btn-primary">Get a Quote</a>
          <a href="/stories" className="btn btn-secondary">Explore Stories</a>
        </div>
      </div>
    </section>
  );
}