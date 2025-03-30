import type { Meta, StoryObj } from '@storybook/react';
import AssetContainer from './AssetContainer';

const meta: Meta<typeof AssetContainer> = {
  title: 'Components/AssetContainer',
  component: AssetContainer,
};

export default meta;
type Story = StoryObj<typeof AssetContainer>;

export const Default: Story = {};
