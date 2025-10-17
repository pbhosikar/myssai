export const metadata = {
  title: 'Accounting & Payroll - Company',
  description: 'Accounting processes, payroll details, and financial resources.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function AccountingPayrollPage() {
  const html = await loadLegacyHtml('accounting_payroll');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Accounting &amp; Payroll</h1>
        <p className="mt-2 text-gray-600">Financial operations, payroll information, and guidelines.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}