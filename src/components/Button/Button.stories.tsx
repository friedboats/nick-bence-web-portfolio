import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'link'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the primary button variant.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click Me',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the secondary button variant.',
      },
    },
  },
};

export const Link: Story = {
  args: {
    children: 'Click Me',
    variant: 'link',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the link button variant.',
      },
    },
  },
};
