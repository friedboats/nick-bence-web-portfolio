'use client';

import AssetContainer from '@/components/AssetContainer';
import CircleImage from '@/components/CircleImage';
import ThumbGrid from '@/components/ThumbGrid';

export default function Starbucks() {
  const thumbTestData = [
    { src: '/test-thumb.png', alt: 'Test thumb image' },
    { src: '/test-thumb.png', alt: 'Test thumb image' },
    { src: '/test-thumb.png', alt: 'Test thumb image' },
    { src: '/test-thumb.png', alt: 'Test thumb image' },
    { src: '/test-thumb.png', alt: 'Test thumb image' },
    { src: '/test-thumb.png', alt: 'Test thumb image' },
    { src: '/test-thumb.png', alt: 'Test thumb image' },
  ];

  const testFunc = () => {
    console.log('click test');
  };

  return (
    <main className="fade-in text-center w-full max-w-[1120px] mx-auto">
      <AssetContainer
        alt="test"
        src="/starbucks-featured-main.png"
        width={427}
        height={288}
        onClick={testFunc}
      />
      <div className="flex justify-center">
        <CircleImage name="starbucks"></CircleImage>
      </div>
      <div className="flex justify-center my-8">
        <AssetContainer
          alt="test"
          src="/starbucks-featured-main.png"
          width={427}
          height={288}
          onClick={testFunc}
        />
      </div>
      <ThumbGrid items={thumbTestData} />
    </main>
  );
}
