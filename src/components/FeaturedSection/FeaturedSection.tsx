import { usePageNavigatorStore } from '@/stores';
import { MediaAsset } from '@/types/MediaAsset';
import { forwardRef } from 'react';
import AssetContainer from '../AssetContainer';
import Heading from '../Heading';

type FeaturedSectionData = {
  href: string;
} & MediaAsset;

type FeaturedSectionProps = {
  heading: string;
  data: FeaturedSectionData[];
};

const FeaturedSection = forwardRef<HTMLDivElement, FeaturedSectionProps>(
  ({ heading, data }, ref) => {
    return (
      <div ref={ref}>
        <div className=" flex gap-2 justify-center items-center mb-6">
          <div className="w-full bg-border-primary h-1"></div>
          <Heading as="h2" className="w-full text-center whitespace-nowrap">
            {heading || 'Featured Work'}
          </Heading>
          <div className="w-full bg-border-primary h-1"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 place-items-center">
          {data.map(({ alt, href, src }, idx) => (
            <AssetContainer
              key={idx}
              alt={alt}
              src={src}
              href={href}
              width={427}
              height={288}
              cursor="pointer"
              onClick={() => {
                usePageNavigatorStore.getState().setPageIndex(idx);
              }}
            />
          ))}
        </div>
      </div>
    );
  },
);

FeaturedSection.displayName = 'FeaturedSection';

export default FeaturedSection;
