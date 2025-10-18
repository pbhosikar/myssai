'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; 


const KnowledgeTraining = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Carousel slides data
  const carouselSlides = [
    {
      image: '/img/knowladgetraining/1_SSAIU_Pillars.jpg',
      alt: 'SSAI Mentorship Program Slide 1'
    },
    {
      image: '/img/knowladgetraining/SSAI-Mentorship-Program.png',
      alt: 'SSAI Mentorship Program Slide 2'
    },
    {
      image: '/img/knowladgetraining/3.png',
      alt: 'SSAI Mentorship Program Slide 3'
    },
    {
      image: '/img/knowladgetraining/3_Live_At_SSAI_Logo.png',
      alt: 'SSAI Mentorship Program Slide 4'
    },
    {
      image: '/img/knowladgetraining/2_PMP-Logo.png',
      alt: 'SSAI Mentorship Program Slide 5'
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <section className="min-h-screen bg-gray-50">
        {/* Hero Header */}
        <div
          className="relative h-32 sm:h-38 md:h-38 lg:h-38"
          style={{
            backgroundImage: 'url("/img/knowladgetraining/knowladge-background.webp")',
             backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80"></div> */}
          <div className="absolute top-4 left-4 sm:left-32 sm:top-12">
            <h1 className="text-white text-3xl sm:text-4xl font-bold drop-shadow-lg">
              Knowledge & Training

            </h1>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Main Content (Carousel + Text) */}
            <div className="lg:col-span-2">
              {/* Carousel Section */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden mb-8">
                <div className="relative">
                  {/* Embla Carousel Container */}
                  {/* <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                      {carouselSlides.map((slide, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                          <div className="relative aspect-video bg-gray-900">
                            <Image
                              src={slide.image}
                              alt={slide.alt}
                              fill
                              className="object-contain"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}

                  <div className="overflow-hidden" ref={emblaRef}>
  <div className="flex">
    {carouselSlides.map((slide, index) => (
      <div key={index} className="flex-[0_0_100%] min-w-0">
        <a 
          href="mailto:mailto:SSAIUhelp@SSAIHQ.com" 
          className="block relative aspect-video bg-gray-900 cursor-pointer"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-contain"
            priority={index === 0}
          />
        </a>
      </div>
    ))}
  </div>
</div>


                  {/* Previous Button */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                    aria-label="Previous slide"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                    aria-label="Next slide"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dots Navigation */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {carouselSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === selectedIndex
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Description Text */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                 At SSAI, our talented employees are our greatest resource. Our goal is to create a culture of learning and prepare our employees to meet the changing workforce needs of both today and tomorrow.


                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Investing in our employees’ success is at the center of our organization’s strategic goals. This led to the creation of Science Systems and Applications, Inc. University (SSAIU), which serves as the centralized strategic umbrella for the education and development of our workforce.  SSAIU is the link between developing employees and building leadership teams that will continue to meet the organization’s strategic goals, now and into the future.


                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                 Comprised of three centers, SSAIU provides unique learning opportunities and ways for employees to grow and diversify their skills. SSAIU's three centers focus on developing employees’ professional, leadership, and specialized technical abilities through offerings such as a robust learning portal, customized development plans, knowledge-sharing sessions, workshops, mentoring programs, and custom programs for high-potential employees and leaders.


                </p>
              </div>

              {/* Center For Cards */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Center for:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Leadership Development */}
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-36">
                      <Image
                        src="/img/knowladgetraining/leadership.jpg"
                        alt="Leadership Development"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership Development
</h3>
                      <p className="text-sm text-gray-600">Grow and Diversify
</p>
                    </div>
                  </div>

                  {/* Professional Development */}
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-36">
                      <Image
                        src="/img/knowladgetraining/Professional-Development.jpg"
                        alt="Professional Development"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Development
</h3>
                      <p className="text-sm text-gray-600">Invest in Our People and Our Brand

</p>
                    </div>
                  </div>

                  {/* Technical Excellence */}
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-36">
                      <Image
                        src="/img/knowladgetraining/8-steps-to-technical-excellence.png"
                        alt="Technical Excellence"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Technical
Excellence</h3>
                      <p className="text-sm text-gray-600">Optimize Creativity and Productivity

</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Josie Pearson Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/img/knowladgetraining/josie-pearson.jpg"
                      alt="Josie Pearson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Josie Pearson</h3>
                    <p className="text-xs text-gray-600 mb-2">
                     Director of Organizational Development

                    </p>
                    <p className="text-xs text-gray-700 mb-1">Phone: 757-951-1607
</p>
                    <a 
                      href="mailto:josie.pearson@ssaihq.com" 
                      className="text-xs text-blue-600 hover:underline"
                    >
                      josie.pearson@ssaihq.com

                    </a>
                  </div>
                </div>
              </div>

              {/* Other Resources */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Other Resources</h3>
                
                {/* SSAI University Logo */}
                <div className=" rounded  mb-6">
                  <div className="relative h-16">
                    <Image
                      src="/img/knowladgetraining/SSAIUniversityLogo.png"
                      alt="SSAI University"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Education Reimbursement */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Education Reimbursement
</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Application for Educational Assistance must be submitted for approval within two weeks prior to beginning the(se) course(s). Approval will not be granted without a recommendation by the employee’s supervisor.

                  </p>
                </div>

                {/* Training Requests */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Training Requests
</h4>
                  <p className="text-xs text-gray-700 leading-relaxed mb-3">
                    Application for Training must be submitted for approval prior to the beginning of the training. Approval will not be granted without the approval of the employee’s Program Manager.

                  </p>
                  <a href="https://ssaihq.app.box.com/file/1506333433849" target='_blank' className="text-xs text-blue-600 hover:underline">
To learn more HRM-003                 </a>
                </div>

                {/* Professional Publications */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Professional Publications and Memberships

</h4>
                  <p className="text-xs text-gray-700 leading-relaxed mb-2">
                    SSAI reimburses employees for subscribing to professional publications or membership in professional societies. To learn more, email us at
                  </p>
                  <a 
                    href="mailto:SSAIUhelp@SSAIHQ.com." 
                    className="text-xs text-blue-600 hover:underline"
                  >
                   SSAIUhelp@SSAIHQ.com.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledgeTraining;
