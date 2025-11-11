export const metadata={ title:'About – Nexolve' };
export default function Page(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Who We Are</h1>
      <p className="mt-2 text-gray-600 max-w-3xl">
        Nexolve is a technology implementation company focused on AI, automation, and digital operations.
        Our mission is to move organizations from manual work to measurable results through implementation-first engineering.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card"><h3 className="font-semibold">Mission</h3><p className="mt-2 text-gray-600">Implementation that compounds into assets and products.</p></div>
        <div className="card"><h3 className="font-semibold">Vision</h3><p className="mt-2 text-gray-600">A world where 80% of routine work is automated.</p></div>
        <div className="card"><h3 className="font-semibold">Values</h3><ul className="list-disc ml-5 mt-2 text-gray-600"><li>Clarity before code</li><li>Results before releases</li><li>Transparency in every step</li></ul></div>
      </div>
    </section>
  );
}