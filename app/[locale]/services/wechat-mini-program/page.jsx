export const metadata={ title:'WeChat Mini Program – Nexolve' };
export default async function Page({ params }){
  const { locale } = await params;
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">WeChat Mini Program</h1>
      <p className="mt-3 text-gray-600">Build engaging WeChat Mini Programs to reach and engage Chinese audiences. Seamless integration with WeChat ecosystem for maximum user retention.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h3 className="font-semibold">What you get</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700"><li>Custom Mini Program development</li><li>WeChat Pay integration</li><li>User authentication & profiles</li><li>Content management system</li><li>Analytics & user behavior tracking</li><li>Backend API & database setup</li><li>App submission & deployment</li></ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">How it works</h3>
          <ol className="list-decimal ml-5 mt-2 text-gray-700"><li>Requirements & Design</li><li>Development & Integration</li><li>Testing & WeChat Review</li><li>Launch & Support</li></ol>
        </div>
      </div>
      <div className="mt-8 card">
        <p className="text-gray-700"><span className="font-semibold">Starting at:</span> $8k–$20k + maintenance</p>
        <a href={`/${locale}/contact`} className="btn btn-primary mt-4">Build My Mini Program</a>
      </div>
    </section>
  );
}
