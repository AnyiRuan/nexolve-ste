export default function CTASection(){
  return (
    <section className="container my-16 text-center">
      <div className="card">
        <h3 className="text-2xl font-semibold">Let’s turn your operations into your next competitive advantage.</h3>
        <p className="text-gray-600 mt-2">Book a discovery call and receive a tailored implementation plan within 48 hours.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="/contact" className="btn btn-primary">Get My Custom Plan</a>
          <a href="/contact" className="btn btn-secondary">Book Consultation</a>
        </div>
      </div>
    </section>
  );
}