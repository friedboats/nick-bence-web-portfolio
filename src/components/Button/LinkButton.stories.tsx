import type { Meta, StoryObj } from '@storybook/react';
import { ArrowDoubleDown, Instagram } from '../SVGComponents';
import LinkButton from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton,
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
    href: {
      control: 'text',
      description: 'The destination URL for the link',
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

type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    children: 'Primary Link',
    variant: 'primary',
    href: 'https://example.com',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Link',
    variant: 'secondary',
    href: 'https://example.com',
  },
};

export const InternalLink: Story = {
  args: {
    children: 'Internal Link',
    variant: 'link',
    href: '/about',
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
};

export const IconOnly: Story = {
  args: {
    isIconOnly: true,
    'aria-label': 'Open Instagram',
    iconLeft: <Instagram />,
    href: 'https://instagram.com',
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
    children: 'Disabled Link',
    variant: 'secondary',
    href: 'https://example.com',
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
