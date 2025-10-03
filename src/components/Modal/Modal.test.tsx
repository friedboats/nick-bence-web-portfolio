// Modal.test.tsx
import { useModalGalleryStore } from '@/stores/modalGalleryStore';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

jest.mock('focus-trap-react', () => ({
  FocusTrap: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('@/stores/modalGalleryStore', () => ({
  useModalGalleryStore: jest.fn(),
}));

const mockAssets = [
  { src: '/nathans-featured-main.png', alt: 'Image 1', style: {} },
  { src: '/nathans-featured-main.png', alt: 'Image 2', style: {} },
];

const mockUseModalGalleryStore = useModalGalleryStore as unknown as jest.Mock;
const mockCloseModal = jest.fn();

// Optional: a base state to reuse
const baseStoreState = {
  isOpen: true,
  assets: mockAssets,
  initialIndex: 0,
  mode: 'image' as const,
  closeModal: mockCloseModal,
  carouselId: 'test-carousel',
};

describe('Modal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseModalGalleryStore.mockReturnValue({ ...baseStoreState });
  });

  it('renders the image asset when mode is image', () => {
    render(<Modal />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('renders the ImageCarousel when mode is carousel', () => {
    mockUseModalGalleryStore.mockReturnValueOnce({
      ...baseStoreState,
      mode: 'carousel',
    });
    render(<Modal />);
    expect(
      screen.getByRole('button', { name: /click the right arrow/i }),
    ).toBeInTheDocument();
  });

  it('closes on Escape key press', () => {
    render(<Modal />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });

  it('closes when clicking outside the modal', () => {
    const { container } = render(<Modal />);
    const backdrop = container.querySelector('div.fixed')!;
    fireEvent.click(backdrop);
    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });

  it('does not close when clicking inside the modal', () => {
    render(<Modal />);
    const content = screen.getByAltText('Image 1');
    fireEvent.click(content);
    expect(mockCloseModal).not.toHaveBeenCalled();
  });
});
