export const metadata = {
  title: 'Employee FAQs - Company',
  description: 'Frequently asked questions for employees.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function EmployeeFaqsPage() {
  const html = await loadLegacyHtml('employee_faqs');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Employee FAQs</h1>
        <p className="mt-2 text-gray-600">Answers to common questions.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}