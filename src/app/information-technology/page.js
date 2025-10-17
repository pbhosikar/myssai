export const metadata = {
  title: 'Information Technology - Company',
  description: 'IT support, policies, and technology resources.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function InformationTechnologyPage() {
  const html = await loadLegacyHtml('information_technology');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Information Technology</h1>
        <p className="mt-2 text-gray-600">Support and resources for IT.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}