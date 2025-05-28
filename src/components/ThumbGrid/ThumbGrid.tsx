import { MediaAsset } from '@/types/MediaAsset';
import AssetContainer from '../AssetContainer';

type ThumbGridProps = {
  items: readonly MediaAsset[];
};

const ThumbGrid = ({ items }: ThumbGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-none sm:flex sm:flex-wrap lg:justify-center gap-x-[6vw] gap-y-[6vw] sm:gap-x-[44px] sm:gap-y-[44px] w-full">
      {items.map((item, index) => (
        <AssetContainer
          key={index}
          src={item.src}
          alt={item.alt}
          width={192}
          height={192}
          layout="fill"
          fullWidth
          className="w-full aspect-square sm:w-[192px] sm:aspect-[192/192]"
        />
      ))}
    </div>
  );
};

export default ThumbGrid;
