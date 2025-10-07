import { ProjectNames } from '@/types/ProjectNames';

export type ProjectHeaderCopyProps = {
  copy: {
    projectHeader: {
      imageID: ProjectNames;
      title: string;
      role: string;
    };
  };
};
