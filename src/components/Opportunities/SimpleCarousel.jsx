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
    '/img/sample/image1.jpg',
    '/img/sample/image2.jpg',
    '/img/sample/image3.jpg',
    '/img/sample/image4.jpg',
    '/img/sample/image5.jpg',
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
    <div className="w-[30rem] overflow-hidden rounded-lg shadow-lg mt-4">
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
                className="object-cover rounded-lg"
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