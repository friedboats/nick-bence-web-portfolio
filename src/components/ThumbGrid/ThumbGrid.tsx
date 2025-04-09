import AssetContainer from '../AssetContainer';

interface Item {
  src: string;
  alt: string;
  backgroundPosition?: string;
  backgroundSize?: string;
}

interface ThumbGridProps {
  items: Item[];
}

const ThumbGrid = ({ items }: ThumbGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <AssetContainer
            src={item.src}
            alt={item.alt}
            backgroundPosition={item.backgroundPosition}
            backgroundSize={item.backgroundSize}
            size="small"
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbGrid;
