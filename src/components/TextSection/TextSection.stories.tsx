// TextSection.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TextSection from './TextSection';

const meta: Meta<typeof TextSection> = {
  title: 'Components/TextSection',
  component: TextSection,
  decorators: [
    (Story) => (
      <div className="w-full max-w-[902px] mx-auto">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    layout: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextSection>;

const mockImages = [
  {
    src: '/starbucks-featured-main.png',
    alt: 'Test image 1',
  },
  {
    src: '/dynatrace-platform-featured-main.png',
    alt: 'Test image 2',
  },
];

export const Default: Story = {
  args: {
    title: 'Default TextSection',
    body: `<p>This section has a <strong>highlighted</strong> word and a line break.</p>`,
    images: [mockImages[0]],
  },
};

export const LayoutRight: Story = {
  args: {
    title: 'Right Aligned',
    body: `<p>This image is right aligned next to the text.</p>`,
    images: [mockImages[0]],
    layout: 'right',
  },
};

export const TwoImages: Story = {
  args: {
    title: 'Two Images',
    body: `
      <p>Images are shown side by side below the text.</p>
      <ul>
        <li><strong>Bold text:</strong> Item text.</li>
        <li><strong>Bold text:</strong> Item text.</li>
        <li><strong>Bold text:</strong> Item text.</li>
      </ul>
    `,
    images: mockImages,
  },
};
