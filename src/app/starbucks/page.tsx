'use client';

import AssetContainer from '@/components/AssetContainer';
import BlockQuote from '@/components/BlockQuote';
import ProjectHeader from '@/components/ProjectHeader';
import GlobalCopy from '@/copydeck/GlobalCopy';
import StarbucksCopy from '@/copydeck/StarbucksCopy';

export default function Starbucks() {
  return (
    <>
      <ProjectHeader copy={StarbucksCopy} />
      <AssetContainer
        alt="video"
        width={427}
        height={760}
        src="/starbucks_app_video.mp4"
      />
      <BlockQuote quote={GlobalCopy.quotes.whatHesAccomplished} />
    </>
  );
}
