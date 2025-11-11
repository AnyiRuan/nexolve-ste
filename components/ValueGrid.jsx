const items=[
  {title:'Implementation-first', text:'Results, not just code.'},
  {title:'AI-native Expertise', text:'Custom workflows powered by LLMs and ML.'},
  {title:'Data-driven ROI', text:'Every project measured by impact, not effort.'},
  {title:'Secure & Compliant', text:'Privacy and audit readiness by design.'},
];
export default function ValueGrid(){
  return (
    <section className="container py-12 grid md:grid-cols-4 gap-6">
      {items.map(it=>(
        <div key={it.title} className="card">
          <h3 className="font-semibold">{it.title}</h3>
          <p className="text-gray-600 mt-2">{it.text}</p>
        </div>
      ))}
    </section>
  );
}