import { ProjectNames } from '@/types/ProjectNames';
import Image from 'next/image';
import React from 'react';

interface CircleImageProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ProjectNames;
  size?: 'small' | 'large';
}

const containerSizeMap = {
  small: 192,
  large: 424,
};

const imageSizeMap = {
  small: 192,
  large: 377,
};

const CircleImage = ({
  name,
  size = 'small',
  className = '',
  ...rest
}: CircleImageProps) => {
  const src = `/${name}-circle.png`;
  const alt = `${
    name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ')
  } logo`;
  const isLarge = size === 'large';
  const containerSize = containerSizeMap[size];
  const imageSize = imageSizeMap[size];

  const largeStyles = 'pl-3 pr-3 max-[475px]:pl-[5.3vw] max-[475px]:pr-[5.3vw]';

  return (
    <div
      {...rest}
      className={`relative flex items-center justify-center overflow-hidden aspect-square ${
        isLarge ? largeStyles : ''
      } ${className}`}
      style={{
        width: containerSize,
        borderRadius: '50%',
      }}
    >
      <Image src={src} alt={alt} width={imageSize} height={imageSize} />
      {isLarge && (
        <svg
          viewBox={`0 0 ${containerSize} ${containerSize}`}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute animate-spin-slow"
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="[...]" // Your path stays unchanged
            className="fill-border-primary"
          />
        </svg>
      )}
    </div>
  );
};

export default CircleImage;
