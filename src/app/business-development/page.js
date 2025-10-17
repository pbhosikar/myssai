export const metadata = {
  title: 'Business Development - Company',
  description: 'BD initiatives, pipeline, and capture resources.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function BusinessDevelopmentPage() {
  const html = await loadLegacyHtml('business_development');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Business Development</h1>
        <p className="mt-2 text-gray-600">Opportunities and business growth resources.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}