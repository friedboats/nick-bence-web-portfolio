'use client';

import Image from 'next/image';
type AssetContainerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const AssetContainer = ({ src, alt, width, height }: AssetContainerProps) => {
  return (
    <div className="relative rounded-3xl border-2 border-border-primary w-full overflow-hidden">
      <Image
        src={src}
        overrideSrc={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default AssetContainer;
