import { ProjectHeaderCopyProps } from '@/types/ProjectHeaderCopy';
import CircleImage from '../CircleImage';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const ProjectHeader = ({ copy }: ProjectHeaderCopyProps) => {
  return (
    <div className="m-auto text-center flex flex-col items-center">
      <CircleImage
        size="large"
        className="mb-4"
        name={copy.projectHeader.imageID}
      ></CircleImage>
      <Heading className="mb-2" as="h1">
        {copy.projectHeader.title}
      </Heading>
      <Heading
        className="text-header-secondary border-y-2 border-solid border-border-primary py-2 w-full mb-5"
        as="h4"
      >
        {copy.projectHeader.role}
      </Heading>
      <Paragraph>{copy.projectHeader.description}</Paragraph>
    </div>
  );
};

export default ProjectHeader;
