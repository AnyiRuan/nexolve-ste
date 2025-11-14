export const metadata={ title:'Website & Digital Growth – Nexolve' };
export default function Page(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Website & Digital Growth</h1>
      <p className="mt-3 text-gray-600">Your website is your first automation system. We design, develop, and optimize it for measurable results.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h3 className="font-semibold">What you get</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Next.js site with integrated CMS</li>
            <li>SEO + Core Web Vitals optimization</li>
            <li>Analytics and marketing automation</li>
            <li>AI-powered intelligent chatbot solutions:
              <ul className="list-circle ml-5 mt-1">
                <li>Custom Customer Service Chatbot – 24/7 automated support with contextual responses</li>
                <li>Sales Intelligence Chatbot – Lead qualification, product recommendations & conversion optimization</li>
                <li>Technical Support Chatbot – Troubleshooting assistance, documentation navigation & ticket routing</li>
                <li>HR Assistant Chatbot – Employee onboarding, policy guidance & benefits information</li>
              </ul>
            </li>
            <li>Continuous maintenance & updates</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold">How it works</h3>
          <ol className="list-decimal ml-5 mt-2 text-gray-700"><li>Brief & Wireframe</li><li>Build & Integrate</li><li>Optimize & Launch</li><li>Measure & Iterate</li></ol>
        </div>
      </div>
      <div className="mt-8 card">
        <p className="text-gray-700"><span className="font-semibold">Starting at:</span> $5k–$10k + $800–$2k/month</p>
        <a href="/contact" className="btn btn-primary mt-4">Launch My Site</a>
      </div>
    </section>
  );
}