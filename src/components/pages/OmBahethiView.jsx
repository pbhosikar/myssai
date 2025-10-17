'use client';
import { useState, useEffect, useRef } from 'react';

export default function OmBahethiView() {
  const memorialImages = [
    '/img/1+(1).jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/ommemorialdave.png',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % memorialImages.length);
  const prev = () => setCurrent((c) => (c - 1 + memorialImages.length) % memorialImages.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    touchStartX.current = null;
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-6xl px-4 py-8">
        {/* Banner */}
        <div className="overflow-hidden rounded-lg">
          <img src="/img/OmBahethiBanner.png" alt="" className="w-full h-auto" />
        </div>

        {/* Fruits of His Labor layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-9">
            <img
              src="/img/Family+collage+template+-+Made+with+PosterMyWall.jpg"
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:col-span-3 space-y-4">
            <h1 className="text-2xl font-semibold">Fruits of His Labor</h1>
            <a
              href="https://www.ssaihq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img src="/img/ssai_logo+(2).jpg" alt="SSAI" className="w-full h-auto rounded-md" />
            </a>
            <a
              href="https://bahethifoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/img/bff.jpg"
                alt="Bahethi Family Foundation"
                className="w-full h-auto rounded-md"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Intro text */}
          <div className="md:col-span-9">
            <h1 className="text-3xl font-semibold text-gray-900">Dr. Om Bahethi</h1>
            <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
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
                Om was more than a brilliant and visionary leader—he was a kind soul who believed
                deeply in the power of knowledge to transform lives. For nearly 48 years, he built
                SSAI into a beacon of excellence in Earth and space science, helping shape our
                understanding of the world and the universe. His work with NASA and NOAA embodied
                his passion for discovery and his dedication to advancing humanity’s collective
                knowledge.
              </p>
              <p>
                Through philanthropy, scholarships, and the Bahethi Family Foundation, Om extended
                this vision into communities that needed it most. He was a fierce advocate for
                equity in STEM education, ensuring that underserved students could access the
                opportunities they deserved. His mission was not just about creating
                opportunities—it was about empowering others to create their own paths and to pay it
                forward, just as he always did.
              </p>
              <p>
                Om’s legacy is woven into the lives he touched, the futures he helped build, and the
                spirit of curiosity and generosity he left behind. While words cannot capture the
                full impact of his life, we hope to honor his memory by continuing the work he cared
                so deeply about.
              </p>
            </div>
          </div>

          {/* Tribute video */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Watch This Tribute</h2>
            <video
              controls
              controlsList="nodownload"
              poster="https://my.ssai.app/documents/32054/0/MOV02715+1.mp4/73e7715d-0c02-1d01-edc1-f19ccd5acfc4?version=1.0&t=1734647716864&videoThumbnail=1"
              className="w-full rounded-md border border-gray-200"
            >
              <source
                src="https://my.ssai.app/documents/32054/0/MOV02715+1.mp4/73e7715d-0c02-1d01-edc1-f19ccd5acfc4?version=1.0&t=1734647716864&videoPreview=1&type=mp4"
                type="video/mp4"
              />
              <source
                src="https://my.ssai.app/documents/32054/0/MOV02715+1.mp4/73e7715d-0c02-1d01-edc1-f19ccd5acfc4?version=1.0&t=1734647716864&videoPreview=1&type=ogv"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Memorial slider */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-9">
            <h2 className="text-2xl font-semibold text-gray-900">Om's Memorial Service</h2>
            <div className="mt-4 relative">
              <div
                className="rounded-lg overflow-hidden border border-gray-200"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img src={memorialImages[current]} alt="" className="w-full h-auto" />
              </div>
              <button
                type="button"
                aria-label="Previous"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow"
              >
                &lt;
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow"
              >
                &gt;
              </button>
              <div className="mt-3 flex justify-center gap-2">
                {memorialImages.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 w-2.5 rounded-full ${
                      i === current ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-2xl font-semibold text-gray-900">Celebrating Om</h2>
            <div className="mt-4  p-4">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-9 9a9 9 0 1118 0H3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Matthew Eady</div>
                  <div className="text-sm text-gray-500">9 Months Ago</div>
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-md">
                <img src="/img/3.jpg" alt="Celebrating Om" className="w-full h-auto object-cover" />
              </div>
              <p className="mt-4 text-gray-700">
                Om has made so many contributions to better our lives and the lives of the world.
              </p>
              <div className="mt-4 flex items-center gap-6 text-gray-600">
                <a href="#" className="inline-flex items-center gap-2 hover:text-gray-900">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M2 4h20v14H6l-4 4V4z" />
                  </svg>
                  <span>Comment (1)</span>
                </a>
                <div className="inline-flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded border border-gray-300 px-2 py-1 hover:bg-gray-50"
                  >
                    <span>👍</span>
                    <span>5</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded border border-gray-300 px-2 py-1 hover:bg-gray-50"
                  >
                    <span>👎</span>
                    <span>0</span>
                  </button>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <a
                    title="Twitter"
                    href="https://twitter.com/intent/tweet?text=Celebrating%20Om&tw_p=tweetbutton&url=https://my.ssai.app/om-bahethi/-/blogs/celebrating-om"
                    className="inline-flex items-center justify-center rounded border border-gray-300 px-2 py-1 hover:bg-gray-50"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.5 3H21L13.4 10.6 21.2 21H15.7L10.7 14.6 5.1 21H2L9.8 13.1 2.3 3H7.9L12.5 9.1 17.5 3z" />
                    </svg>
                  </a>
                  <a
                    title="Facebook"
                    href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fmy.ssai.app%2Fom-bahethi%2F-%2Fblogs%2Fcelebrating-om"
                    className="inline-flex items-center justify-center rounded border border-gray-300 px-2 py-1 hover:bg-gray-50"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M15 3h-3a5 5 0 00-5 5v3H5v4h2v6h4v-6h3l1-4h-4V8a1 1 0 011-1h3V3z" />
                    </svg>
                  </a>
                  <a
                    title="LinkedIn"
                    href="http://www.linkedin.com/shareArticle?title=Celebrating%20Om&mini=true&url=https%3A%2F%2Fmy.ssai.app%2Fom-bahethi%2F-%2Fblogs%2Fcelebrating-om"
                    className="inline-flex items-center justify-center rounded border border-gray-300 px-2 py-1 hover:bg-gray-50"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 5.9 3.3 5.9 7.6V24h-5V16.2c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 3.9V24h-5V8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
