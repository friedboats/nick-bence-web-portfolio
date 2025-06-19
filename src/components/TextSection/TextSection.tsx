'use client';

import { useModalGalleryStore } from '@/stores/modalGalleryStore';
import { MediaAsset } from '@/types/MediaAsset';
import { ReactNode } from 'react';
import AssetContainer from '../AssetContainer';
import BodyContent from '../BodyContent';
import Heading from '../Heading';
import ThumbGrid from '../ThumbGrid';

type TextSectionProps = {
  title: string;
  body: string;
  images?: readonly MediaAsset[];
  button?: ReactNode;
  layout?: 'left' | 'right';
};

export default function TextSection({
  title,
  body,
  images,
  button,
  layout,
}: TextSectionProps) {
  const isSideBySide =
    images?.length === 1 && (layout === 'left' || layout === 'right');
  const isSingleImage = images?.length === 1 && !layout;
  const isDoubleImage = images?.length === 2;
  const isGallery = images && images.length > 2;
  const openModal = useModalGalleryStore((state) => state.openModal);

  return (
    <div>
      {/* Show text block above image, unless it's a side-by-side layout */}
      {!isSideBySide && (
        <>
          <div className="mb-2">
            <Heading as="h2">{title}</Heading>
          </div>
          <div className="mb-6">
            <BodyContent>{body}</BodyContent>
          </div>
        </>
      )}

      {/* Side-by-side layout for one image */}
      {isSideBySide && images && (
        <div
          className={`flex flex-col-reverse gap-6 md:flex-row mb-6 ${
            layout === 'right' ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="aspect-[427/288] md:w-1/2">
            <AssetContainer
              src={images[0].src}
              alt={images[0].alt}
              width={427}
              height={288}
              fullWidth
              layout="fill"
              style={images[0].style}
              onClick={() => openModal([...images], 'single', 0)}
            />
          </div>
          <div className="md:w-1/2">
            <div className="mb-2">
              <Heading as="h2">{title}</Heading>
            </div>
            <BodyContent>{body}</BodyContent>
            {button && <div className="mt-5">{button}</div>}
          </div>
        </div>
      )}

      {/* Single image full-width */}
      {isSingleImage && images && (
        <div className="aspect-[427/288]">
          <AssetContainer
            src={images[0].src}
            alt={images[0].alt}
            width={427}
            height={288}
            fullWidth
            layout="fill"
            style={images[0].style}
            onClick={() => openModal([...images], 'single', 0)}
          />
        </div>
      )}

      {/* Two images side-by-side */}
      {isDoubleImage && images && (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {images.map((img, i) => (
            <div key={i} className="sm:w-1/2 aspect-[427/288]">
              <AssetContainer
                src={img.src}
                alt={img.alt}
                width={427}
                height={288}
                fullWidth
                layout="fill"
                style={img.style}
                onClick={() => openModal([...images], 'single', i)}
              />
            </div>
          ))}
        </div>
      )}

      {/* 3+ images in a gallery */}
      {isGallery && (
        <div className="mb-6">
          <ThumbGrid items={images} />
        </div>
      )}

      {/* CTA button outside image layouts */}
      {!isSideBySide && button && (
        <div className="mt-5 flex justify-center">{button}</div>
      )}
    </div>
  );
}
