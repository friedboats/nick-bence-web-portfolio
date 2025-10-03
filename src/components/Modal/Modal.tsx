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
  const isCarousel = mode === 'carousel';

  return (
    <div
      className="fixed inset-0 bg-white/90 dark:bg-black/70 backdrop-blur-sm flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
        <div
          ref={modalRef}
          data-testid="modal-content"
          className={`relative mx-2 sm:mx-4 ${
            isVideo ? 'max-w-[50vh]' : 'max-w-[125vh]'
          } w-full rounded-3xl`}
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
            onClick={closeModal}
            aria-label="Close modal"
            className={`absolute z-10 text-body-inverse w-max ${
              isVideo
                ? 'top-[-45px] right-0'
                : isCarousel
                ? 'top-[-45px] right-0 sm:right-[75px]'
                : 'top-[-45px] right-0'
            }`}
          >
            Close
          </Button>
        </div>
      </FocusTrap>
    </div>
  );
}
