import { Meta, StoryObj } from '@storybook/react';
import FeaturedSection from './FeaturedSection';

const meta: Meta<typeof FeaturedSection> = {
  title: 'Components/FeaturedSection',
  component: FeaturedSection,
  argTypes: {
    heading: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedSection>;

const mockData = [
  {
    alt: 'Starbucks for life project',
    imgSrc: '/starbucks-featured.png',
    href: '/starbucks',
  },
  {
    alt: 'Dynatrace navigation upgrade project',
    imgSrc: '/dynatrace-navigation-featured.png',
    href: '/dynatrace-navigation',
  },
  {
    alt: 'Dynatrace platform page project',
    imgSrc: '/dynatrace-platform-featured.png',
    href: '/dynatrace-platform',
  },
  {
    alt: 'Nathans hot dogs project',
    imgSrc: '/nathans-hotdogs-featured.png',
    href: '/nathans',
  },
];

export const Default: Story = {
  args: {
    heading: 'Featured Work',
    data: mockData,
  },
};
