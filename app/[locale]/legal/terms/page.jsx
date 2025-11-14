export const metadata={ title:'Terms' };
export default async function Page({ params }){
  const { locale } = await params;
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Terms</h1>
      <p className="mt-4 text-gray-600">Placeholder policy text. Replace with your legal content.</p>
    </section>
  );
}