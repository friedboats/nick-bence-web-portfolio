import type { Meta, StoryObj } from '@storybook/react';
import PersonalLogo from './PersonalLogo';

const meta: Meta<typeof PersonalLogo> = {
  title: 'Components/PersonalLogo',
  component: PersonalLogo,
};

export default meta;
type Story = StoryObj<typeof PersonalLogo>;

export const Default: Story = {
  args: {},
};
