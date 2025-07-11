'use client';

import { useModalGalleryStore } from '@/stores/modalGalleryStore';
import { FocusTrap } from 'focus-trap-react';
import { useEffect, useRef } from 'react';
import AssetContainer from '../AssetContainer';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { Close } from '../SVGComponents';

export default function Modal() {
  const { isOpen, assets, initialIndex, mode, closeModal, carouselId } =
    useModalGalleryStore();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  if (!isOpen || !assets) return null;

  const asset = assets[initialIndex];
  const isVideo = asset.src.endsWith('.mp4') || asset.src.endsWith('.webm');

  return (
    <div
      className="fixed inset-0 bg-white/90 dark:bg-black/70 backdrop-blur-sm flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
        <div
          ref={modalRef}
          className={`relative ${
            isVideo ? 'max-w-[50vh]' : 'max-w-[150vh]'
          } w-full mx-4 rounded-3xl`}
        >
          {mode === 'carousel' ? (
            <ImageCarousel
              data={assets}
              initialIndex={initialIndex}
              isInModal
              id={carouselId}
            />
          ) : isVideo ? (
            <div
              className="w-full max-w-[50vh] mx-auto"
              style={{ aspectRatio: '427 / 725' }}
            >
              <AssetContainer
                src={asset.src}
                alt={asset.alt}
                width={427}
                height={725}
                fullWidth
                layout="fill"
                style={asset.style}
              />
            </div>
          ) : (
            <AssetContainer
              src={asset.src}
              alt={asset.alt}
              width={427}
              height={288}
              fullWidth
              layout="fill"
              style={asset.style}
            />
          )}

          <Button
            variant="link"
            iconRight={<Close />}
            isIconOnly
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-[-45px] sm:top-[-7px] right-[-15px] z-10 text-body-inverse w-max"
          />
        </div>
      </FocusTrap>
    </div>
  );
}
