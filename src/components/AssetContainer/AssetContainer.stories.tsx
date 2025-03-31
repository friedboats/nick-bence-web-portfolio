import type { Meta, StoryObj } from '@storybook/react';
import AssetContainer from './AssetContainer';

const meta: Meta<typeof AssetContainer> = {
  title: 'Components/AssetContainer',
  component: AssetContainer,
  decorators: [
    (Story, { args }) => (
      <div style={{ maxWidth: args.size === 'small' ? '190px' : '427px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: { control: 'select', options: ['small', 'large'] },
    backgroundPosition: { control: 'text' },
    backgroundSize: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AssetContainer>;

export const Default: Story = {
  args: {
    src: '/me.jpg',
    alt: 'Nick Bence',
    size: 'large',
  },
};
