export const metadata = {
  title: 'Strategy - Company',
  description: 'Corporate strategy and planning documents.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function StrategyPage() {
  const html = await loadLegacyHtml('strategy');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Strategy</h1>
        <p className="mt-2 text-gray-600">Strategic goals and initiatives.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}