export const metadata={ title:'Digital Marketing – Nexolve' };
export default async function Page({ params }){
  const { locale } = await params;
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Digital Marketing</h1>
      <p className="mt-3 text-gray-600">Grow your digital presence with targeted campaigns across Google, Meta, X, LinkedIn and more. Data-driven strategies that deliver measurable ROI.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h3 className="font-semibold">What you get</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700"><li>Google Ads campaign setup & optimization</li><li>Meta (Facebook/Instagram) advertising</li><li>X (Twitter) & LinkedIn campaigns</li><li>Analytics dashboard & ROI tracking</li><li>A/B testing & conversion optimization</li><li>Monthly performance reports</li></ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">How it works</h3>
          <ol className="list-decimal ml-5 mt-2 text-gray-700"><li>Strategy & Audience Research</li><li>Campaign Setup & Creative Design</li><li>Launch & Monitor</li><li>Optimize & Scale</li></ol>
        </div>
      </div>
      <div className="mt-8 card">
        <p className="text-gray-700"><span className="font-semibold">Starting at:</span> $3k–$8k setup + ad spend + ongoing management</p>
        <a href={`/${locale}/contact`} className="btn btn-primary mt-4">Start Growing</a>
      </div>
    </section>
  );
}
