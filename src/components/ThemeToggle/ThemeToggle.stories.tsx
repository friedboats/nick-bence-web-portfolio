import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThemeToggle from './ThemeToggle';

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
} as Meta;

// Template with background color applied
const Template: Story = () => (
  <div className="p-2 bg-surface-background-primary inline-flex w-fit h-fit">
    <ThemeToggle />
  </div>
);

export const Default = Template.bind({});
