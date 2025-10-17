export const metadata = {
  title: 'SSAI Roundup - Company',
  description: 'Company news and updates in SSAI Roundup.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function SsaiRoundupPage() {
  const html = await loadLegacyHtml('ssai_roundup');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">SSAI Roundup</h1>
        <p className="mt-2 text-gray-600">Latest company highlights and stories.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}