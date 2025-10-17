export const metadata = {
  title: 'Employee Rights - My HR',
  description: 'Information on employee rights and policies.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function HrEmployeeRightsPage() {
  const html = await loadLegacyHtml('h_r_employee_rights');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Employee Rights</h1>
        <p className="mt-2 text-gray-600">Know your rights and responsibilities.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}