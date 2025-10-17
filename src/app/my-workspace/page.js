export const metadata = {
  title: 'My Workspace - MySSAI',
  description: 'Project tools, internal apps, and quick links for daily work.',
};
import { loadLegacyHtml } from '@/lib/legacy';

export default async function MyWorkspacePage() {
  const html = await loadLegacyHtml('my_workspace');
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">My Workspace</h1>
        <p className="mt-2 text-gray-600">Central hub for tools and applications.</p>
      </header>
      <div className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}