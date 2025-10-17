export const metadata = {
  title: 'Opportunities - Company',
  description: 'Job postings and internal growth opportunities.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function OpportunitiesPage() {
  const html = await loadLegacyHtml('opportunities');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Opportunities</h1>
        <p className="mt-2 text-gray-600">Explore open roles and opportunities.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}