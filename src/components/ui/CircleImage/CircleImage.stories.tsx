import { Meta, StoryObj } from '@storybook/react';
import CircleImage from './CircleImage';

const meta: Meta<typeof CircleImage> = {
  title: 'Components/CircleImage',
  component: CircleImage,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['starbucks', 'dynatrace', 'nathans'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircleImage>;

export const Default: Story = {
  args: { type: 'starbucks' }, // Default selection
};
