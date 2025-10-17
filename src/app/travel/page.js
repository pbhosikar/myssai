export const metadata = {
  title: 'Travel - Company',
  description: 'Travel policies, booking, and reimbursement information.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function TravelPage() {
  const html = await loadLegacyHtml('travel');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Travel</h1>
        <p className="mt-2 text-gray-600">Guidance for business travel.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}