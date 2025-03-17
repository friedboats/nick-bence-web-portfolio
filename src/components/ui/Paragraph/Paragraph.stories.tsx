import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'UI/Paragraph',
  component: Paragraph,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'p',
        'p-bold',
        'small',
        'small-bold',
        'x-small',
        'x-small-bold',
      ],
      description:
        'Defines the text size and weight variant for the paragraph (defaults to p)',
    },
    color: {
      control: 'select',
      options: [
        'text-body-primary',
        'text-body-secondary',
        'text-header-inverse',
      ],
      description: 'Text color for the paragraph (based on design system)',
    },
  },
  decorators: [
    (Story, context) => {
      const isInverse = context.args.color === 'text-header-inverse';
      return (
        <div
          className={`${
            isInverse ? 'bg-black' : 'bg-transparent'
          } p-2 rounded-lg`}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is the default paragraph.',
    variant: 'p',
    color: 'text-body-primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is the default paragraph component, rendered as a regular paragraph (p).',
      },
    },
  },
};

export const Bold: Story = {
  args: {
    children: 'This is a bold paragraph.',
    variant: 'p-bold',
    color: 'text-body-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is a bold paragraph, rendered using the p-bold variant.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    children: 'This is a small paragraph.',
    variant: 'small',
    color: 'text-body-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is a small paragraph, rendered using the small variant.',
      },
    },
  },
};

export const SmallBold: Story = {
  args: {
    children: 'This is a small bold paragraph.',
    variant: 'small-bold',
    color: 'text-body-primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is a small bold paragraph, rendered using the small-bold variant.',
      },
    },
  },
};

export const ExtraSmall: Story = {
  args: {
    children: 'This is an extra-small paragraph.',
    variant: 'x-small',
    color: 'text-body-primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is an extra-small paragraph, rendered using the x-small variant.',
      },
    },
  },
};

export const ExtraSmallBold: Story = {
  args: {
    children: 'This is an extra-small bold paragraph.',
    variant: 'x-small-bold',
    color: 'text-body-primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is an extra-small bold paragraph, rendered using the x-small-bold variant.',
      },
    },
  },
};
