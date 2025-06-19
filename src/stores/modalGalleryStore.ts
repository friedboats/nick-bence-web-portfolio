import { MediaAsset } from '@/types/MediaAsset';
import { create } from 'zustand';

type GalleryMode = 'single' | 'carousel';

type ModalGalleryState = {
  isOpen: boolean;
  assets: MediaAsset[] | null;
  initialIndex: number;
  mode: GalleryMode;
  carouselId?: string;
  carouselIndexMap: Record<string, number>;
  openModal: (
    assets: MediaAsset[],
    mode: GalleryMode,
    index: number,
    carouselId?: string,
  ) => void;
  closeModal: () => void;
  setCarouselIndex: (carouselId: string, index: number) => void;
};

export const useModalGalleryStore = create<ModalGalleryState>((set) => ({
  isOpen: false,
  assets: null,
  initialIndex: 0,
  mode: 'single',
  carouselId: undefined,
  carouselIndexMap: {},
  openModal: (assets, mode, index, carouselId) =>
    set((state) => ({
      isOpen: true,
      assets,
      initialIndex: index,
      mode,
      carouselId,
      carouselIndexMap: {
        ...state.carouselIndexMap,
        [carouselId ?? 'default']: index,
      },
    })),
  closeModal: () =>
    set((state) => ({
      isOpen: false,
      assets: null,
      initialIndex: 0,
      mode: 'single',
      carouselId: undefined,
      carouselIndexMap: { ...state.carouselIndexMap },
    })),
  setCarouselIndex: (carouselId, index) =>
    set((state) => ({
      carouselIndexMap: {
        ...state.carouselIndexMap,
        [carouselId]: index,
      },
    })),
}));
