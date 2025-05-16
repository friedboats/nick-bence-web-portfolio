'use client';

import BlockQuote from '@/components/BlockQuote';
import { Carousel } from '@/components/Carousel';
import ProjectHeader from '@/components/ProjectHeader';
import GlobalCopy from '@/copydeck/GlobalCopy';
import StarbucksCopy from '@/copydeck/StarbucksCopy';

const testCarousel = [
  {
    alt: 'Starbucks for life project',
    src: '/starbucks-featured-main.png',
  },
  {
    alt: 'Dynatrace navigation upgrade project',
    src: '/dynatrace-navigation-featured-main.png',
  },
  {
    alt: 'Dynatrace platform page project',
    src: '/dynatrace-platform-featured-main.png',
  },
  {
    alt: 'Nathans hot dogs project',
    src: '/nathans-featured-main.png',
  },
];

export default function Starbucks() {
  return (
    <>
      <ProjectHeader copy={StarbucksCopy} />
      <div className="mt-5">
        <Carousel data={testCarousel} />
      </div>

      {/* <AssetContainer
        alt="video"
        width={427}
        height={760}
        src="/starbucks_app_video.mp4"
      /> */}
      <div className="my-16">
        <BlockQuote quote={GlobalCopy.quotes.whatHesAccomplished} />
      </div>
    </>
  );
}
