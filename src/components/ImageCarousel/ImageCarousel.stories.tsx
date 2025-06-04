import { Meta, StoryObj } from '@storybook/react';
import ImageCarousel from './ImageCarousel';

const meta: Meta<typeof ImageCarousel> = {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
  decorators: [
    (Story) => (
      <div className="w-full max-w-[902px] mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

const mockData = [
  {
    alt: 'Starbucks for life project',
    src: '/starbucks-featured-main.png',
    href: '/starbucks',
  },
  {
    alt: 'Dynatrace navigation upgrade project',
    src: '/dynatrace-navigation-featured-main.png',
    href: '/dynatrace-navigation',
  },
  {
    alt: 'Dynatrace platform page project',
    src: '/dynatrace-platform-featured-main.png',
    href: '/dynatrace-platform',
  },
  {
    alt: 'Nathans hot dogs project',
    src: '/nathans-featured-main.png',
    href: '/nathans',
  },
];

export const Default: Story = {
  args: {
    data: mockData,
  },
};
