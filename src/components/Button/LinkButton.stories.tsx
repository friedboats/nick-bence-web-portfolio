import type { Meta, StoryObj } from '@storybook/react';
import { ArrowDoubleDown, Instagram } from '../SVGComponents'; // Assuming you have an icon component
import LinkButton from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'link'],
    },
    iconLeft: {
      control: 'object',
      description: 'Left icon for the button',
    },
    iconRight: {
      control: 'object',
      description: 'Right icon for the button',
    },
    className: {
      control: 'text',
      description: 'Custom class name for the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    href: {
      control: 'text',
      description: 'The destination URL for the link',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    children: 'Primary Link',
    variant: 'primary',
    href: 'https://example.com', // External link
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is a primary variant link button that opens an external URL.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Link',
    variant: 'secondary',
    href: 'https://example.com', // External link
  },
  parameters: {
    docs: {
      description: {
        story: 'This is a secondary variant link button with an external URL.',
      },
    },
  },
};

export const InternalLink: Story = {
  args: {
    children: 'Internal Link',
    variant: 'primary',
    href: '/about',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is a link button that routes internally within the app.',
      },
    },
  },
};

export const WithIcons: Story = {
  args: {
    children: 'Button with Icons',
    variant: 'primary',
    iconLeft: <Instagram />,
    iconRight: <ArrowDoubleDown />,
    href: 'https://example.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'This button includes both left and right icons.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Link',
    variant: 'secondary',
    href: 'https://example.com',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This link button is disabled and cannot be clicked.',
      },
    },
  },
};
