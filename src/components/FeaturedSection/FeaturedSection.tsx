import Link from 'next/link';
import { forwardRef } from 'react';
import AssetContainer from '../AssetContainer';
import Heading from '../Heading';

interface FeaturedSectionData {
  alt: string;
  imgSrc: string;
  href: string;
}

interface FeaturedSectionProps {
  heading: string;
  data: FeaturedSectionData[];
}

const FeaturedSection = forwardRef<HTMLDivElement, FeaturedSectionProps>(
  ({ heading, data }, ref) => {
    return (
      <div ref={ref}>
        <div className=" flex gap-2 justify-center items-center h-6 mt-16 mb-6">
          <div className="w-full bg-border-primary h-1"></div>
          <Heading as="h2" className="w-full text-center whitespace-nowrap">
            {heading || 'Featured Work'}
          </Heading>
          <div className="w-full bg-border-primary h-1"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map(({ alt, href, imgSrc }, idx) => (
            <Link href={href} key={idx}>
              <AssetContainer alt={alt} src={imgSrc} size="large" />
            </Link>
          ))}
        </div>
      </div>
    );
  },
);

FeaturedSection.displayName = 'FeaturedSection';

export default FeaturedSection;
