import { Meta, StoryObj } from '@storybook/react';
import CircleImage from './CircleImage';

const meta: Meta<typeof CircleImage> = {
  title: 'Components/CircleImage',
  component: CircleImage,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['nick-bence', 'starbucks', 'dynatrace', 'nathans'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircleImage>;

export const Default: Story = {
  args: { name: 'starbucks', size: 'small' }, // Default selection
};
