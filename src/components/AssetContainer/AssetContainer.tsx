import React from 'react';
import { ImageProps } from 'next/image';

interface AssetContainerProps extends ImageProps {
  src: string;
  alt: string;
  size: 'small' | 'large';
}

const sizeMap = {
  small: { width: 190, height: 192, aspectRatio: 190 / 192 },
  large: { maxWidth: 'none', aspectRatio: 427 / 288 },
};

const AssetContainer = ({ src, alt, size = 'large' }: AssetContainerProps) => {
  const { aspectRatio } = sizeMap[size] ?? sizeMap['large'];

  return (
    <div
      className="relative rounded-3xl border-2 border-border-primary w-fill"
      style={{
        width: size === 'small' ? '100%' : '100%',
        height: size === 'small' ? 'auto' : 'unset',
        paddingTop: `${100 / aspectRatio}%`,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
      role="img"
      aria-label={alt}
    />
  );
};

export default AssetContainer;
