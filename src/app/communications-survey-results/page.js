export const metadata = {
  title: 'Communications Survey Results - Company',
  description: 'Results and insights from employee communications surveys.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function CommunicationsSurveyResultsPage() {
  const html = await loadLegacyHtml('communications_survey_results');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Communications Survey Results</h1>
        <p className="mt-2 text-gray-600">Survey outcomes and action items.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}