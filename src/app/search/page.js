export const metadata = {
  title: 'Search - MySSAI',
  description: 'Search across MySSAI resources and pages.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function SearchPage() {
  const html = await loadLegacyHtml('search');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Search</h1>
        <p className="mt-2 text-gray-600">Use the header search bar to find content.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}