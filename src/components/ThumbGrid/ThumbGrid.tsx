import AssetContainer from '../AssetContainer';

interface Item {
  src: string;
  alt: string;
}

interface ThumbGridProps {
  items: Item[];
}

const ThumbGrid = ({ items }: ThumbGridProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-[44px] mx-auto w-fit">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center w-auto md:w-[192px]"
        >
          <AssetContainer
            src={item.src}
            alt={item.alt}
            width={192}
            height={192}
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbGrid;
