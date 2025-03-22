import React from 'react';
import Image from 'next/image';

interface CircleImageProps {
  type: 'starbucks' | 'dynatrace' | 'nathans';
}

const CircleImage = ({ type }: CircleImageProps) => {
  const src = `/circle-${type}.png`; // Reference the image without the 'public' part
  const alt = `${type.charAt(0).toUpperCase() + type.slice(1)} logo`;
  return (
    <div className="w-[192px] h-[192px]">
      <Image src={src} overrideSrc={src} alt={alt} width={192} height={192} />
    </div>
  );
};

export default CircleImage;
