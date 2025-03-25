import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ThemeToggle from './ThemeToggle';

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
} as Meta;

// Template with background color applied
const Template: StoryFn = () => <ThemeToggle />;

export const Default = Template.bind({});
