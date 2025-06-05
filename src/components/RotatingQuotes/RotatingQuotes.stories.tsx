import { Meta, StoryObj } from '@storybook/react';
import RotatingQuotes from './RotatingQuotes';

const meta: Meta<typeof RotatingQuotes> = {
  title: 'Components/RotatingQuotes',
  component: RotatingQuotes,
};

export default meta;

type Story = StoryObj<typeof RotatingQuotes>;

const sampleQuotes = [
  {
    quote: 'This platform changed everything for me.',
    author: 'Jane Doe',
    title: 'Patient',
  },
  {
    quote: 'Fast, empathetic, and effective — I finally feel heard.',
    author: 'John Smith',
    title: 'Patient',
  },
];

export const Default: Story = {
  args: {
    quotes: sampleQuotes,
    duration: 5,
  },
};
