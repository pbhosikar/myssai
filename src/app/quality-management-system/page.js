export const metadata = {
  title: 'Quality Management System - Company',
  description: 'QMS policies, processes, and documentation.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function QualityManagementSystemPage() {
  const html = await loadLegacyHtml('quality_management_system');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Quality Management System</h1>
        <p className="mt-2 text-gray-600">Quality policies and processes.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}