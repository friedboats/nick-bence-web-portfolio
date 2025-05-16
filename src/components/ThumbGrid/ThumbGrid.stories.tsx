import type { Meta, StoryObj } from '@storybook/react';
import ThumbGrid from './ThumbGrid';

const meta: Meta<typeof ThumbGrid> = {
  title: 'Components/ThumbGrid',
  component: ThumbGrid,
  decorators: [
    (Story) => (
      <div className="w-full max-w-[902px] mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThumbGrid>;

export const Default: Story = {
  args: {
    items: [
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Dynatrace',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Dynatrace',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Dynatrace',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Dynatrace',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Dynatrace',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Dynatrace',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Dynatrace',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Dynatrace',
      },
    ],
  },
};
