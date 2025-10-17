export const metadata = {
  title: 'Company Forms - Company',
  description: 'Common forms and templates for employees.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function CompanyFormsPage() {
  const html = await loadLegacyHtml('company_forms');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Company Forms</h1>
        <p className="mt-2 text-gray-600">Find and download company forms.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}