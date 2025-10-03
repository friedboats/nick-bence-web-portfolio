import { useModalGalleryStore } from '@/stores/modalGalleryStore';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div className="relative w-screen h-screen bg-gray-100 p-10">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Modal>;

const mockAssets = [
  {
    src: '/starbucks-featured-main.png',
    alt: 'Starbucks for life project',
    style: {},
  },
  {
    src: '/dynatrace-navigation-featured-main.png',
    alt: 'Dynatrace navigation upgrade',
    style: {},
  },
];

const mockUseModalGalleryStore = useModalGalleryStore as unknown as jest.Mock;

export const Default: Story = {
  render: () => {
    // Pretend store state for Storybook
    mockUseModalGalleryStore.mockReturnValue({
      isOpen: true,
      assets: mockAssets,
      initialIndex: 0,
      mode: 'single',
      closeModal: () => alert('Modal closed'),
      carouselId: 'storybook-carousel',
    });

    return <Modal />;
  },
};
