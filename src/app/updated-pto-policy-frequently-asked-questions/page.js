export const metadata = {
  title: 'Updated PTO Policy FAQs - Company',
  description: 'Frequently asked questions about the updated PTO policy.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function UpdatedPtoPolicyFaqsPage() {
  const html = await loadLegacyHtml('updated_pto_policy_frequently_asked_questions');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Updated PTO Policy FAQs</h1>
        <p className="mt-2 text-gray-600">Clarifications on the PTO changes.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}