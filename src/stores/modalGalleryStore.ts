import { MediaAsset } from '@/types/MediaAsset';
import { create } from 'zustand';

type GalleryMode = 'single' | 'carousel';

type ModalGalleryState = {
  isOpen: boolean;
  assets: MediaAsset[] | null;
  initialIndex: number;
  mode: GalleryMode;
  openModal: (assets: MediaAsset[], mode: GalleryMode, index?: number) => void;
  closeModal: () => void;
};

const useModalGalleryStore = create<ModalGalleryState>((set) => ({
  isOpen: false,
  assets: null,
  initialIndex: 0,
  mode: 'single',
  openModal: (assets, mode, index = 0) =>
    set({ isOpen: true, assets, initialIndex: index, mode }),
  closeModal: () =>
    set({ isOpen: false, assets: null, initialIndex: 0, mode: 'single' }),
}));

export default useModalGalleryStore;
