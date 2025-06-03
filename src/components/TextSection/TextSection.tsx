import { MediaAsset } from '@/types/MediaAsset';
import { ReactNode } from 'react';
import AssetContainer from '../AssetContainer';
import BodyContent from '../BodyContent';
import Heading from '../Heading';
import ThumbGrid from '../ThumbGrid';

type LayoutOption = 'left' | 'right';

type TextSectionProps = {
  title: string;
  body: string;
  images?: readonly MediaAsset[];
  button?: ReactNode;
  layout?: LayoutOption;
};

const TextSection = ({
  title,
  body,
  images,
  button,
  layout,
}: TextSectionProps) => {
  const renderImages = () => {
    if (!images || images.length === 0) return null;

    const image = (
      <AssetContainer
        src={images[0].src}
        alt={images[0].alt}
        width={427}
        height={288}
        fullWidth
        layout="fill"
        style={images[0].style}
      />
    );

    // === CASE: Single image with 'left' or 'right' layout ===
    // Image and text appear side-by-side on desktop, stacked on mobile
    if (images.length === 1) {
      if (layout === 'left' || layout === 'right') {
        return (
          <div
            className={`flex flex-col-reverse gap-6 md:flex-row mb-6 ${
              layout === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="aspect-[427/288] md:w-1/2">{image}</div>
            <div className="md:w-1/2">
              <div className="mb-2">
                <Heading as="h2">{title}</Heading>
              </div>
              <BodyContent>{body}</BodyContent>
              {button && <div className="mt-5">{button}</div>}
            </div>
          </div>
        );
      }

      // === CASE: Single image, no layout specified ===
      // Full-width image below content, default layout
      return <div className="aspect-[427/288]">{image}</div>;
    }

    // === CASE: Two images ===
    // Render as horizontal (or vertical on small screens) side-by-side media
    if (images.length === 2) {
      return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {images.map((img, i) => (
            <div key={i} className="sm:w-1/2">
              {image}
            </div>
          ))}
        </div>
      );
    }

    // === CASE: Three or more images ===
    // Use ThumbGrid gallery to display many assets
    return (
      <div className="mb-6">
        <ThumbGrid items={images} />
      </div>
    );
  };

  return (
    <div>
      {/* Only show text heading if layout isn't left/right with 1 image */}
      {!(images?.length === 1 && (layout === 'left' || layout === 'right')) && (
        <>
          <div className="mb-2">
            <Heading as="h2">{title}</Heading>
          </div>
          <div className="mb-6">
            <BodyContent>{body}</BodyContent>
          </div>
        </>
      )}

      {renderImages()}

      {/* Button shown only outside of layout=left/right */}
      {!(images?.length === 1 && (layout === 'left' || layout === 'right')) &&
        button && <div className="mt-5 flex justify-center">{button}</div>}
    </div>
  );
};

export default TextSection;
