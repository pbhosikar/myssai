export const metadata = {
  title: 'Knowledge & Training - My HR',
  description: 'Training materials and knowledge resources.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function HrKnowledgeTrainingPage() {
  const html = await loadLegacyHtml('h_r_knowledge_training');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Knowledge &amp; Training</h1>
        <p className="mt-2 text-gray-600">Learn and grow with these resources.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}