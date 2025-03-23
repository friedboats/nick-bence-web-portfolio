import type { Meta, StoryObj } from '@storybook/react';
import BlockQuote from './BlockQuote';

const meta: Meta<typeof BlockQuote> = {
  title: 'Components/BlockQuote',
  component: BlockQuote,
};

export default meta;
type Story = StoryObj<typeof BlockQuote>;

export const Default: Story = {
  args: {
    quote:
      'Design is not just what it looks like and feels like. Design is how it works.',
  },
};
