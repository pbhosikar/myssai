export const metadata = {
  title: 'Communications - Company',
  description: 'Internal and external communications resources and updates.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function CommunicationsPage() {
  const html = await loadLegacyHtml('communications');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Communications</h1>
        <p className="mt-2 text-gray-600">Guidelines and announcements.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}