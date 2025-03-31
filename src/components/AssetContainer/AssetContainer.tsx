'use client';

import React from 'react';
import { ImageProps } from 'next/image';

interface AssetContainerProps extends ImageProps {
  src: string;
  alt: string;
  size: 'small' | 'large';
  backgroundPosition?: string;
  backgroundSize?: string;
}

const sizeMap = {
  small: {
    width: '190px',
    height: '192px',
    aspectRatio: 190 / 192,
  },
  large: {
    width: '100%',
    height: 'auto',
    aspectRatio: 427 / 288,
  },
};

const AssetContainer = ({
  src,
  alt,
  size = 'large',
  backgroundPosition = 'center center',
  backgroundSize = 'cover',
  ...props
}: AssetContainerProps) => {
  const { aspectRatio } = sizeMap[size] ?? sizeMap['large'];

  return (
    <div
      className="relative rounded-3xl border-2 border-border-primary w-full"
      style={{
        paddingTop: `${100 / aspectRatio}%`,
        backgroundImage: `url(${src})`,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: 'no-repeat',
      }}
      role="img"
      aria-label={alt}
      {...props}
    />
  );
};

export default AssetContainer;
