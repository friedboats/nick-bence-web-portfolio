'use client';

import AssetContainer from '@/components/AssetContainer';
import ProjectHeader from '@/components/ProjectHeader';
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
    </>
  );
}
