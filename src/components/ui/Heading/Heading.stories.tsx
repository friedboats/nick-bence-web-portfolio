import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'UI/Heading',
  component: Heading,
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display'],
      description: 'Defines the HTML element for the heading (defaults to h2)',
    },
    color: {
      control: 'select',
      options: [
        'text-header-primary',
        'text-header-secondary',
        'text-header-tertiary',
        'text-header-inverse',
      ],
      description: 'Text color for the heading (based on design system)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'This is a default heading',
    as: 'h2',
    color: 'text-header-primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is the default heading component, rendered as h2 by default.',
      },
    },
  },
};

export const Display: Story = {
  args: {
    children: 'This is a display heading',
    as: 'display',
    color: 'text-header-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the display heading component.',
      },
    },
  },
};

export const H1: Story = {
  args: {
    children: 'This is an h1 heading',
    as: 'h1',
    color: 'text-header-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the h1 heading component.',
      },
    },
  },
};

export const H2: Story = {
  args: {
    children: 'This is an h2 heading',
    as: 'h2',
    color: 'text-header-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the h2 heading component.',
      },
    },
  },
};

export const H3: Story = {
  args: {
    children: 'This is an h3 heading',
    as: 'h3',
    color: 'text-header-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the h3 heading component.',
      },
    },
  },
};

export const H4: Story = {
  args: {
    children: 'This is an h4 heading',
    as: 'h4',
    color: 'text-header-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the h4 heading component.',
      },
    },
  },
};

export const H5: Story = {
  args: {
    children: 'This is an h5 heading',
    as: 'h5',
    color: 'text-header-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the h5 heading component.',
      },
    },
  },
};

export const H6: Story = {
  args: {
    children: 'This is an h6 heading',
    as: 'h6',
    color: 'text-header-primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the h6 heading component.',
      },
    },
  },
};
