import { ProjectHeaderCopyProps } from '@/types/ProjectHeaderCopy';
import CircleImage from '../CircleImage';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const ProjectHeader = ({ copy }: ProjectHeaderCopyProps) => {
  return (
    <div className="m-auto text-center flex flex-col items-center">
      <div className="mb-4">
        <CircleImage name={copy.projectHeader.imageID}></CircleImage>
      </div>
      <div className="mb-2">
        <Heading as="h1">{copy.projectHeader.title}</Heading>
      </div>
      <div className="py-2 mb-5 border-y-2 border-solid border-border-primary w-full">
        <Heading className="text-header-secondary" as="h4">
          {copy.projectHeader.role}
        </Heading>
      </div>
      <Paragraph>{copy.projectHeader.description}</Paragraph>
    </div>
  );
};

export default ProjectHeader;
