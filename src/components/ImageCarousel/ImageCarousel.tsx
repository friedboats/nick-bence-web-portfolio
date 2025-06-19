'use client';

import { useModalGalleryStore } from '@/stores';
import { MediaAsset } from '@/types/MediaAsset';
import { useState } from 'react';
import AssetContainer from '../AssetContainer';
import { Button } from '../Button';
import { ArrowLeft, ArrowRight } from '../SVGComponents';
import PaginationDot from './PaginationDot';

type CarouselProps = {
  data: readonly MediaAsset[];
  initialIndex?: number;
  isInModal?: boolean;
};

const ImageCarousel = ({
  data,
  initialIndex = 0,
  isInModal = false,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const openModal = useModalGalleryStore((state) => state.openModal);
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
        isIconOnly
        aria-label="Click the left arrow to show previous image"
      />
      <div className="flex-grow">
        <div
          className={`flex-grow relative overflow-hidden rounded-3xl ${
            !isInModal
              ? 'hover:ring-4 hover:ring-border-primary hover:ring-offset-4 hover:ring-offset-offset-primary focus-visible:ring-4 focus-visible:ring-focus focus-visible:ring-offset-4 focus-visible:ring-offset-offset-primary'
              : ''
          }`}
          tabIndex={isInModal ? -1 : 0}
          onClick={() =>
            !isInModal && openModal([...data], 'carousel', currentIndex)
          }
          onKeyDown={(e) => {
            if (!isInModal && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              openModal([...data], 'carousel', currentIndex);
            }
          }}
          role="button"
          aria-label="Open image gallery carousel"
        >
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
        </div>
        <div className="flex justify-center my-2">
          <div className="flex gap-1">
            {data.map((_, i) => (
              <PaginationDot
                key={i}
                isActive={currentIndex === i}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <Button
        variant="secondary"
        onClick={goToNext}
        className="hidden sm:inline-flex"
        iconLeft={<ArrowRight />}
        isIconOnly
        aria-label="Click the right arrow to show next image"
      />
    </div>
  );
};

export default ImageCarousel;
