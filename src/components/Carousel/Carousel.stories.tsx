import { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  decorators: [
    (Story) => (
      <div className="w-full max-w-[902px] mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

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
