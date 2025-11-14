export const metadata={ title:'Before & After Gallery – Nexolve' };
export default async function Page({ params }){
  const { locale } = await params;
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Before & After Gallery</h1>
      <p className="mt-2 text-gray-600">From complexity to clarity — see measurable transformation in action.</p>
      <div dangerouslySetInnerHTML={{ __html: `<div class='grid md:grid-cols-2 gap-6 mt-8'><div class='card'><p class='text-gray-600'>• Email Processing: 25 min → 3 min<br/>• Expense Approval: Sheets → Mobile + Audit<br/>• Daily Reports: Manual → Automated digest</p></div></div>` }} />
      <div className="mt-8"><a href={`/${locale}/contact`} className="btn btn-primary">Talk to our Implementation Team</a></div>
    </section>
  );
}