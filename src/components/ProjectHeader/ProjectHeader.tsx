import { ProjectHeaderCopyProps } from '@/types/ProjectHeaderCopy';
import CircleImage from '../CircleImage';
import Heading from '../Heading';

const ProjectHeader = ({ copy }: ProjectHeaderCopyProps) => {
  return (
    <div className="m-auto text-center flex flex-col items-center">
      <div className="mb-4">
        <CircleImage name={copy.projectHeader.imageID}></CircleImage>
      </div>
      <div className="mb-2 border-solid border-border-primary border-b-2">
        <Heading as="h1">{copy.projectHeader.title}</Heading>
      </div>
      <div className="pb-12 w-full">
        <Heading className="text-header-secondary" as="h5">
          {copy.projectHeader.role}
        </Heading>
      </div>
    </div>
  );
};

export default ProjectHeader;
