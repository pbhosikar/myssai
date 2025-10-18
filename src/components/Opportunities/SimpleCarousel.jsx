'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const SimpleCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide2.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide3.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide4.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide5.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide6.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide7.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide8.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide9.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide10.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide11.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide12.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide13.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide14.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide15.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide16.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide17.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide18.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide19.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide20.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide21.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide22.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide23.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide24.png',
    '/img/company/opportunities/OpportunitiesMySSAI_files/ProposalSlide25.png',
 

  ];

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

  return (
    <div className="w-[30rem] overflow-hidden mt-4">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] relative h-[18rem]"
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;

<style>
{`.embla {
  overflow: hidden;
  width: 100%;
}

.embla__container {
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: 0;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
}

.embla__slide {
  position: relative;
  min-width: 100%;
  padding-left: 0;
  /* Adjust based on desired spacing */
}
`}

</style>