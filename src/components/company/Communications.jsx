'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const COMM_CAROUSEL_HEIGHT = 450;

const CommunicationsAnnouncement = () => (
  <div className="mb-6">
    <p className="text-base text-gray-700 mb-4 font-sans max-w-5xl">
      Welcome to SSAI's Communications Department. We want to work with you to build strong relationships and foster a collaborative environment. This page acts as a central hub for SSAI's all-company communications, including the latest updates, opportunities, and more. Please contact us with any questions or comments at 
      <a href="mailto:connect@ssaihq.com" className="font-bold text-[#1246ea] hover:underline">connect@ssaihq.com.</a>
    </p>
    <div className="mt-6 text-center">
      <h2 className="text-blue-600 text-xl sm:text-2xl font-extrabold leading-snug">
        Discover more! Watch all of our latest Podcast videos on YouTube for exclusive content, tips, and behind-the-scenes insights. Click below to join our community!
      </h2>
    </div>
  </div>
);

const carouselHeadings = [
  "Exploring the PACE Mission: Advancing Earth Science Through Innovation",
  "Unveiling Earth's Wonders: Weather and Planetary Phenomena",
  "Inspiring Minds: Science Education on Planet Earth",
  "Delivering mission-driven solutions for Coast Guard"
];

const carousels = [
  [
    {
      image: '/company/communications/slider1image1.png',
      alt: 'PACE Podcast Episode (part 1)',
      centerText: 'PACE Podcast Episode (part 1)',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider1image2.png',
      alt: 'Slide 2',
      centerText: 'PACE Podcast Episode (part 2)',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider1image3.png',
      alt: 'Slide 1',
      centerText: 'PACE Podcast Episode (part 3)',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider1image4.png',
      alt: 'Slide 2',
      centerText: 'International Day for Biological Diversity Podcast Episode',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider1image5.png',
      alt: 'Slide 1',
      centerText: 'International Microorganism Day Podcast Episode',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
  ],
  [
    {
      image: '/company/communications/Slider2_1.png',
      alt: 'Slide 3',
      centerText: 'World Meteorological Day Podcast',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_2.png',
      alt: 'Slide 4',
      centerText: 'GLOBE Observer/Solar Eclipse Podcast',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_3.png',
      alt: 'Slide 3',
      centerText: 'Solar Eclipse Experience Highlights (Part 1)',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_4.png',
      alt: 'Slide 4',
      centerText: 'Solar Eclipse Reflection Highlights (Part 2)',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_5.png',
      alt: 'Slide 3',
      centerText: 'GIS Day Podcast Episode',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_6.png',
      alt: 'Slide 4',
      centerText: 'WH2yMSIE Mission: Advancing Climate Science',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_7.png',
      alt: 'Slide 3',
      centerText: 'California Wildfires Podcast',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_8.png',
      alt: 'Slide 4',
      centerText: 'World Meteorological Day: Advancing Earth Modeling',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_9.png',
      alt: 'Slide 3',
      centerText: "NASA's Black Marble Impact Podcast",
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_10.png',
      alt: 'Slide 4',
      centerText: 'Marine Heat Wave Forecasts & Ocean Science',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_11.png',
      alt: 'Slide 3',
      centerText: "Sun, Science & NO₂: Serguei's SSAI Solstice Story",
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/Slider2_12.png',
      alt: 'Slide 4',
      centerText: 'Asteroid Named After NASA Scientist: Nick Gorkavyi',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
  ],
  [
    {
      image: '/company/communications/slider3image1.png',
      alt: 'Slide 5',
      centerText: 'GLOBE Goes to Camp Project Podcast',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image2.png',
      alt: 'Slide 6',
      centerText: "ARSET's Impact on Oceanic Health Podcast (Part 1)",
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image3.png',
      alt: 'UN World Peace Day Podcast',
      centerText: 'Remote Sensing Insights with NASA',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image4.png',
      alt: 'Slide 6',
      centerText: 'ARSET Training in Bhutan Podcast',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image5.png',
      alt: 'Slide 5',
      centerText: 'SSAI Celebrates Podcast Power on Int’l Podcast Day',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image6.png',
      alt: 'Slide 6',
      centerText: 'Your Name In Landsat',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image7.png',
      alt: 'Slide 5',
      centerText: "Exploring NASA Landsat's Spectral Band Tool",
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image8.png',
      alt: 'Slide 6',
      centerText: 'World Water Day: Advancing Clean Water Solutions',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image9.png',
      alt: 'Slide 5',
      centerText: 'Citizen Science Month: Visualizing Science',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image10.png',
      alt: 'Slide 6',
      centerText: 'National Space Day: NASA Snap It! Eclipse Adventure',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image11.png',
      alt: 'Slide 5',
      centerText: 'International Astronomy Day: Gal Sarid on NASA MODIS & VIIRS Data',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image12.png',
      alt: 'Slide 6',
      centerText: 'World Environment Day: DIY Earth Science Tools | STELLA in Action',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image13.png',
      alt: 'Slide 5',
      centerText: "Designing for Earth: Heather's NASA GLOBE Impact",
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image14.jpeg',
      alt: 'Slide 6',
      centerText: "Remote Sensing Insights with NASA's Brock Blevins",
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image15.png',
      alt: 'Slide 5',
      centerText: 'Orbit Modeling at NASA with Tim Rebold',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image16.png',
      alt: 'Slide 6',
      centerText: 'AI-Powered Earth Science: SSAI Leads the Way (Part 1)',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image17.jpg',
      alt: 'Slide 5',
      centerText: 'AI Explores Space & Health: SSAI Podcast (Part 2)',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image18.png',
      alt: 'Slide 6',
      centerText: 'Remote Sensing Applications in Earth Science Today',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
       {
      image: '/company/communications/slider3image19.jpeg',
      alt: 'Slide 5',
      centerText: 'Inside the Mind Shaping Mars, Earth & Space Science',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider3image20.jpeg',
      alt: 'Slide 6',
      centerText: 'World Space Week: Inspiring Humanity Beyond Earth',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
  ],
  [
    {
      image: '/company/communications/slider4image1.png',
      alt: 'Slide 7',
      centerText: 'Air Force Birthday | SSAI Honors Service & STEM',
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    },
    {
      image: '/company/communications/slider4image2.png',
      alt: 'Slide 7',
      centerText: "From Coast Guard to COO: Dave McBride's Journey",
      ytUrl: 'https://www.youtube.com/watch?v=N14Cz1YF2Xw&t=1170s'
    }
  ]
];

const CarouselBlock = ({ slides, variableHeight }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideHeight, setSlideHeight] = useState(COMM_CAROUSEL_HEIGHT);
  const imgRefs = React.useRef([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(index => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // Measure height of currently visible image and update carousel height accordingly
  useEffect(() => {
    if (!variableHeight) return;

    const imgEl = imgRefs.current[selectedIndex];
    if (imgEl) {
      const naturalHeight = imgEl.naturalHeight || COMM_CAROUSEL_HEIGHT;
      setSlideHeight(naturalHeight);
    }
  }, [selectedIndex, variableHeight]);

  return (
    <div
      className="relative mb-8"
      style={{ height: variableHeight ? slideHeight : COMM_CAROUSEL_HEIGHT, transition: 'height 0.3s ease' }}
    >
      <div
        className="overflow-hidden"
        ref={emblaRef}
        style={{ height: variableHeight ? slideHeight : COMM_CAROUSEL_HEIGHT }}
      >
        <div className="flex" style={{ height: variableHeight ? slideHeight : COMM_CAROUSEL_HEIGHT }}>
          {slides.map((s, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] min-w-0 relative"
              style={{ height: variableHeight ? slideHeight : COMM_CAROUSEL_HEIGHT }}
            >
              <div
                className="relative w-full"
                style={{ height: variableHeight ? slideHeight : COMM_CAROUSEL_HEIGHT }}
              >
                {variableHeight ? (
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={800}  // adjust as appropriate
                    height={600}
                    className="object-contain"
                    priority={idx === 0}
                    ref={el => (imgRefs.current[idx] = el)}
                    sizes="100vw"
                  />
                ) : (
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={idx === 0}
                  />
                )}
                <button
                  type="button"
                  onClick={() => window.open(s.ytUrl, '_blank', 'noopener noreferrer')}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded bg-[#0b5fff] text-white text-sm font-semibold select-none pointer-events-auto cursor-pointer border-none focus:outline-none"
                  style={{ zIndex: 2 }}
                >
                  {s.centerText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 z-10"
        aria-label="Previous"
        onClick={scrollPrev}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 z-10"
        aria-label="Next"
        onClick={scrollNext}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === selectedIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};




const MeetTeamSidebar = () => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-4">Meet the Team</h2>
    <div className="space-y-5">
      {[
        { img: '/company/communications/DawnAlexander.jpg', name: 'Dawn Alexander', role: 'Marketing and Communications Director', phone: '201-798-1303', email: 'dawn.alexander@ssaihq.com' },
        { img: '/company/communications/json.jpg', name: 'Jason Dietrich', role: 'Communications Specialist', phone: '301-867-3230', email: 'jason.dietrich@ssaihq.com' },
        { img: '/company/communications/eunice.jpeg', name: 'Eunice Kim', role: 'Communications Specialist', phone: '', email: 'eunice.kim@ssaihq.com' },
        { img: '/company/communications/sanjana.jpg', name: 'Sanjana Kottapalli', role: 'Communications Intern', phone: '', email: 'sanjana.kottapalli@ssaihq.com' }
      ].map((t, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <div className="w-28 h-28 rounded-full overflow-hidden relative">
            <Image src={t.img} alt={t.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
            <p className="text-xs text-gray-600">{t.role}</p>
            {t.phone && <p className="text-xs text-gray-700">{t.phone}</p>}
            <a href={`mailto:${t.email}`} className="text-xs text-blue-600 hover:underline">{t.email}</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SidebarRight = () => (
  <div className="w-full flex flex-col items-start mt-2 space-y-0 font-sans">
  <div className='text-2xl flex justify-center font-bold w-full !items-center text-[#2e5aac]'>
    Follow SSAI 
  </div>
    <div className="flex justify-center items-center w-full gap-2 mb-3">
      <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F166110%2Fadmin%2Ffeed%2Fposts%2F" aria-label="LinkedIn"><Image src="/img/linkedin.png" width={46} height={46} alt="LinkedIn" /></a>
      <a href="https://www.instagram.com/ssaihq/" aria-label="Instagram"><Image src="/img/instagram.png" width={46} height={46} alt="Instagram" /></a>
      <a href="https://www.facebook.com/SciSysApp/" aria-label="Facebook"><Image src="/img/facebook.png" width={46} height={46} alt="Facebook" /></a>
      <a href="https://twitter.com/ssaihq" aria-label="X"><Image src="/img/twitter.png" width={46} height={46} alt="X" /></a>
      <a href="https://www.youtube.com/channel/UCKEH6wLPRh9di7BxiwtpjVw" aria-label="YouTube"><Image src="/img/youtube.png" width={46} height={46} alt="YouTube" /></a>
    </div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-3">On Demand Information</h2>
    <div className="flex flex-col gap-3 mb-2">
      <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fxlvl91l8jjy6u4b2bqekari6o3f3r4eu" className="text-[#2d5cf6] font-semibold text-sm hover:underline">Network Status</a>
      <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fxlvl91l8jjy6u4b2bqekari6o3f3r4eu" className="text-[#2d5cf6] font-semibold text-sm hover:underline">Communication Resources & Best Practices for SSAI Employees</a>
      <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fxlvl91l8jjy6u4b2bqekari6o3f3r4eu" className="text-[#2d5cf6] font-semibold text-sm hover:underline">Messages from the CEO</a>
      <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fxlvl91l8jjy6u4b2bqekari6o3f3r4eu" className="text-[#2d5cf6] font-semibold text-sm hover:underline">Weekly Company Newsletters</a>
      <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fxlvl91l8jjy6u4b2bqekari6o3f3r4eu" className="text-[#2d5cf6] font-semibold text-sm hover:underline">Tuesday Tag-Ups</a>
      <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fxlvl91l8jjy6u4b2bqekari6o3f3r4eu" className="text-[#2d5cf6] font-semibold text-sm hover:underline">IT</a>
      <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fxlvl91l8jjy6u4b2bqekari6o3f3r4eu" className="text-[#2d5cf6] font-semibold text-sm hover:underline">Archived Communications</a>
      <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fxlvl91l8jjy6u4b2bqekari6o3f3r4eu" className="text-[#2d5cf6] font-semibold text-sm hover:underline">Recent Events</a>
    </div>
    <div className="text-base text-gray-800 mb-5 mt-2">
      If you have trouble accessing any of these Box documents, please email IT Support at <a href="mailto:it_help@ssaihq.com" className="text-[#1246ea] hover:underline">it_help@ssaihq.com</a>.
    </div>
    <div className="mt-6 mb-1 text-start w-full">
      <h3 className="text-[#3356a1] font-bold text-xl mb-2">Contact us with your questions or inquiries</h3>
      <p className="!text-xl !font-light text-gray-700 !mb-5">
        We're here to help! Send your questions, comments, concerns, or ideas to <a href="mailto:connect@ssaihq.com" className="text-[#1246ea] !font-light hover:underline">connect@ssaihq.com</a>.
      </p>
      <p className="!text-xl !font-light text-gray-700 mt-1">Together, we can continue to make SSAI a success!</p>
    </div>
  </div>
);

const Communications = () => (
  <section className="min-h-screen bg-white">
    <div className="w-full relative h-52 flex items-center bg-white">
  <div className="absolute inset-0 z-0">
    <Image src="/company/communications/communicationsback.webp" alt="Header BG" fill className="object-cover" />
  </div>
  {/* Overlay text block */}
  <div className="absolute left-8 top-8 md:left-36 md:top-14 z-10">
    <h1 className="text-white text-xl md:!text-2xl font-bold mb-5 drop-shadow-lg">Communications</h1>
    <p className="text-white text-base md:!text-lg font-medium drop-shadow">
      We share SSAI's latest accomplishments, successes, and more with you and the world.
    </p>
  </div>
</div>

    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CommunicationsAnnouncement />
          {carousels.map((slides, idx) => (
            <div key={idx}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">{carouselHeadings[idx]}</h2>
              <CarouselBlock slides={slides} variableHeight={idx === 3} />
            </div>
          ))}
        </div>
        <div className="lg:col-span-1 space-y-8">
          <MeetTeamSidebar />
          <SidebarRight />
        </div>
      </div>
    </div>
  </section>
);

export default Communications;
