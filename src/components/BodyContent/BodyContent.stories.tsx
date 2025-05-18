import type { Meta, StoryObj } from '@storybook/react';
import BodyContent from './BodyContent';

const meta: Meta<typeof BodyContent> = {
  title: 'Components/BodyContent',
  component: BodyContent,
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
        'quote',
      ],
    },
    color: {
      control: 'select',
      options: [
        'text-body-primary',
        'text-body-secondary',
        'text-body-inverse',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof BodyContent>;

export const Default: Story = {
  args: {
    children: `<p>This is a default paragraph with <strong>bold text</strong> and a <br /> line break.</p>`,
    variant: 'p',
    color: 'text-body-primary',
  },
};

export const WithList: Story = {
  args: {
    children: `
      <p>Here are some key highlights:</p>
      <ul>
        <li><strong>Speed:</strong> Fast rendering with HTML parsing.</li>
        <li><strong>Flexibility:</strong> Supports tags like <strong>strong</strong>, <em>ul</em>, and <em>li</em>.</li>
      </ul>
    `,
    variant: 'p',
    color: 'text-body-primary',
  },
};

export const MultiParagraphs: Story = {
  args: {
    children: `
      <p>This project was a major step forward for the team.</p>
      <p>It emphasized collaboration and innovation across all disciplines.</p>
      <ul>
        <li><strong>30% increase in efficiency</strong> after launch</li>
        <li><strong>Great feedback</strong> from stakeholders</li>
      </ul>
    `,
    variant: 'p',
    color: 'text-body-primary',
  },
};

export const AllCapsSmallBold: Story = {
  args: {
    children: '<p>Small bold variant for captions or metadata.</p>',
    variant: 'small-bold',
    color: 'text-body-secondary',
  },
};
