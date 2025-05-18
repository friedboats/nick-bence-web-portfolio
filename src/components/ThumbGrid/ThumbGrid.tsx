import { MediaAsset } from '@/types/MediaAsset';
import AssetContainer from '../AssetContainer';

type ThumbGridProps = {
  items: readonly MediaAsset[];
};

const ThumbGrid = ({ items }: ThumbGridProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-[44px] mx-auto w-fit">
      {items.map((item, index) => (
        <AssetContainer
          key={index}
          src={item.src}
          alt={item.alt}
          width={192}
          height={192}
        />
      ))}
    </div>
  );
};

export default ThumbGrid;
