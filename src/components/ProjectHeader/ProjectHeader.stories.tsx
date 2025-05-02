import { ProjectNames } from '@/types/ProjectNames';
import type { Meta, StoryObj } from '@storybook/react';
import ProjectHeader from './ProjectHeader';

const meta: Meta<typeof ProjectHeader> = {
  title: 'Components/ProjectHeader',
  component: ProjectHeader,
  parameters: {
    docs: {
      description: {
        component:
          'ProjectHeader is used to introduce a project with a circular logo, a title, role, and description text.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectHeader>;

export const Default: Story = {
  args: {
    copy: {
      projectHeader: {
        imageID: 'starbucks' as ProjectNames,
        title: 'Starbucks for Life',
        role: 'Senior Interface Developer',
        description:
          'I contributed to the Starbucks for Life game by building frontend features and enhancing the user experience. It combined animation, reward systems, and interactive design.',
      },
    },
  },
};
