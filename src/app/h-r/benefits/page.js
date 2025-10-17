export const metadata = {
  title: 'Benefits - My HR',
  description: 'Employee benefits information and resources.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function HrBenefitsPage() {
  const html = await loadLegacyHtml('h_r_benefits');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Benefits</h1>
        <p className="mt-2 text-gray-600">Health, dental, retirement, and more.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}