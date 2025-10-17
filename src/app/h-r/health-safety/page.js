export const metadata = {
  title: 'Safety Corner - My HR',
  description: 'Health and safety updates and resources.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function HrHealthSafetyPage() {
  const html = await loadLegacyHtml('h_r_health_safety');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Safety Corner</h1>
        <p className="mt-2 text-gray-600">Safety guidelines and updates.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}