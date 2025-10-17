export const metadata = {
  title: 'Om Bahethi - MySSAI',
  description: 'Honoring Dr. Om P. Bahethi and his impact on SSAI and STEM.',
};

export default function OmBahethiPage() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Dr. Om P. Bahethi</h1>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Dr. Om Bahethi, founder of the{' '}
          <a
            href="https://www.linkedin.com/in/bahethi-family-foundation-8a613325b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Bahethi Family Foundation
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/company/ssai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Science Systems and Applications, Inc (SSAI)
          </a>
          .
        </p>

        <p>
          Om was more than a brilliant and visionary leader—he was a kind soul who believed deeply
          in the power of knowledge to transform lives. For nearly 48 years, he built SSAI into a
          beacon of excellence in Earth and space science, helping shape our understanding of the
          world and the universe. His work with NASA and NOAA embodied his passion for discovery and
          his dedication to advancing humanity’s collective knowledge.
        </p>

        <p>
          Through philanthropy, scholarships, and the Bahethi Family Foundation, Om extended this
          vision into communities that needed it most. He was a fierce advocate for equity in STEM
          education, ensuring that underserved students could access the opportunities they
          deserved. His mission was not just about creating opportunities—it was about empowering
          others to create their own paths and to pay it forward, just as he always did.
        </p>

        <p>
          Om’s legacy is woven into the lives he touched, the futures he helped build, and the
          spirit of curiosity and generosity he left behind. While words cannot capture the full
          impact of his life, we hope to honor his memory by continuing the work he cared so deeply
          about.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800">Fruits of His Labor</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://www.ssaihq.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition"
          >
            <div className="font-medium">Science Systems and Applications, Inc (SSAI)</div>
            <div className="text-sm text-gray-600">Visit ssaihq.com</div>
          </a>

          <a
            href="https://bahethifoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition"
          >
            <div className="font-medium">Bahethi Family Foundation</div>
            <div className="text-sm text-gray-600">Visit bahethifoundation.org</div>
          </a>
        </div>
      </div>
    </section>
  );
}