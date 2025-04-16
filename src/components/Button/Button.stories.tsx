import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Instagram } from '../SVGComponents';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'link'],
    },
    className: {
      control: 'text',
      description: 'Custom class name for the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    isIconOnly: {
      control: 'boolean',
      description: 'Only show icon, no text (requires aria-label)',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessibility label (required for icon-only buttons)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
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
    children: 'Secondary',
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
    children: 'Link',
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

export const WithIcons: Story = {
  args: {
    children: 'Button with Icons',
    variant: 'primary',
    iconLeft: <Instagram />,
    iconRight: <ArrowRight />,
  },
  parameters: {
    docs: {
      description: {
        story: 'This button has both left and right icons.',
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    isIconOnly: true,
    'aria-label': 'Open Instagram',
    iconLeft: <Instagram />,
    variant: 'primary',
    className: 'p-2',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is an icon-only button. Ensure `aria-label` is provided for accessibility.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This is a disabled button.',
      },
    },
  },
};
