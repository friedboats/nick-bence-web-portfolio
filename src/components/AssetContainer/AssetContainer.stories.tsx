import type { Meta, StoryObj } from '@storybook/react';
import AssetContainer from './AssetContainer';

const meta: Meta<typeof AssetContainer> = {
  title: 'Components/AssetContainer',
  component: AssetContainer,
  parameters: {
    docs: {
      description: {
        component:
          'AssetContainer is a flexible, interactive image container. It supports links, onClick actions, accessibility labels, hover animations, and aspect-ratio-based layouts. Size is determined by width and height props. Cursor style can be customized if interactive.',
      },
    },
  },
  argTypes: {
    src: { control: 'text', description: 'Image source path (required).' },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility (required).',
    },
    width: { control: 'number', description: 'Width of the container.' },
    height: { control: 'number', description: 'Height of the container.' },
    href: {
      control: 'text',
      description: 'Optional link destination (makes AssetContainer a link).',
    },
    cursor: {
      control: 'select',
      options: [
        'auto',
        'default',
        'pointer',
        'wait',
        'text',
        'move',
        'help',
        'not-allowed',
        'none',
        'context-menu',
        'progress',
        'cell',
        'crosshair',
        'vertical-text',
        'alias',
        'copy',
        'grab',
        'grabbing',
        'zoom-in',
        'zoom-out',
      ],
      defaultValue: 'zoom-in',
      description: 'Cursor style when interactive.',
    },
    onClick: {
      action: 'clicked',
      if: { arg: 'onClick' }, // ✅ Only create action if onClick is actually passed!
    },
    className: { table: { disable: true } },
    ariaLabel: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof AssetContainer>;

export const Thumb: Story = {
  args: {
    src: '/dynatrace-navigation-featured-thumb.png',
    alt: 'Dynatrace Nav Project',
    width: 192,
    height: 192,
    ariaLabel: 'Dynatrace Nav Project',
    onClick: undefined,
  },
};

export const ClickableThumb: Story = {
  args: {
    src: '/dynatrace-navigation-featured-thumb.png',
    alt: 'Clickable Dynatrace Nav Project',
    width: 192,
    height: 192,
    cursor: 'pointer',
    onClick: () => alert('Thumbnail clicked!'),
    ariaLabel: 'Clickable Dynatrace Nav Project',
  },
};

export const LinkableFeaturedCard: Story = {
  args: {
    src: '/starbucks-featured-main.png',
    alt: 'Starbucks Featured Card',
    width: 427,
    height: 288,
    href: '/about',
    cursor: 'pointer',
    ariaLabel: 'Go to Starbucks Feature',
  },
};
