import type { Meta, StoryObj } from '@storybook/react';
import ThumbGrid from './ThumbGrid';

const meta: Meta<typeof ThumbGrid> = {
  title: 'Components/ThumbGrid',
  component: ThumbGrid,
};

export default meta;
type Story = StoryObj<typeof ThumbGrid>;

export const Default: Story = {
  args: {
    items: [
      {
        src: '/dt-nav-home-screen.jpg',
        alt: 'Dynatrace',
        backgroundPosition: '-40px top',
        backgroundSize: '250%',
      },
      {
        src: '/dt-nav-home-screen.jpg',
        alt: 'Dynatrace',
        backgroundPosition: '-40px top',
        backgroundSize: '250%',
      },
      {
        src: '/dt-nav-home-screen.jpg',
        alt: 'Dynatrace',
        backgroundPosition: '-40px top',
        backgroundSize: '250%',
      },
      {
        src: '/dt-nav-home-screen.jpg',
        alt: 'Dynatrace',
        backgroundPosition: '-40px top',
        backgroundSize: '250%',
      },
      {
        src: '/dt-nav-home-screen.jpg',
        alt: 'Dynatrace',
        backgroundPosition: '-40px top',
        backgroundSize: '250%',
      },
      {
        src: '/dt-nav-home-screen.jpg',
        alt: 'Dynatrace',
        backgroundPosition: '-40px top',
        backgroundSize: '250%',
      },
      {
        src: '/dt-nav-home-screen.jpg',
        alt: 'Dynatrace',
        backgroundPosition: '-40px top',
        backgroundSize: '250%',
      },
      {
        src: '/dt-nav-home-screen.jpg',
        alt: 'Dynatrace',
        backgroundPosition: '-40px top',
        backgroundSize: '250%',
      },
    ],
  },
};
