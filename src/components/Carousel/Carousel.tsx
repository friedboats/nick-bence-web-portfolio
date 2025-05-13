'use client';

import { useState } from 'react';
import AssetContainer from '../AssetContainer';
import Button from '../Button';
import { ArrowLeft, ArrowRight } from '../SVGComponents';
import PaginationDot from './PaginationDot';

type CarouselData = {
  alt: string;
  src: string;
};

type CarouselProps = {
  data: CarouselData[];
};

const Carousel = ({ data }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numSlides = data.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? numSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === numSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <Button
        variant="secondary"
        onClick={goToPrev}
        className="hidden sm:inline-flex"
        iconLeft={<ArrowLeft />}
        isIconOnly={true}
        aria-label="Click the left arrow to show next image"
      ></Button>

      <div className="flex-grow relative overflow-hidden">
        <div className="w-full pt-[67.44%] relative">
          <div
            className="absolute top-0 left-0 h-full w-full flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((slide, index) => (
              <div key={index} className="min-w-full h-full">
                <AssetContainer
                  src={slide.src}
                  alt={slide.alt}
                  width={427}
                  height={288}
                  className="w-full h-full"
                  fullWidth
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          {/* Pagination dots */}
          <div className="flex gap-1">
            {[...Array(numSlides)].map((_, i) => {
              return (
                <PaginationDot
                  key={i}
                  isActive={currentIndex === i}
                  onClick={() => setCurrentIndex(i)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Button
        variant="secondary"
        onClick={goToNext}
        className="hidden sm:inline-flex"
        iconLeft={<ArrowRight />}
        isIconOnly={true}
        aria-label="Click the right arrow to show next image"
      ></Button>
    </div>
  );
};

export default Carousel;
