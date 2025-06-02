'use client';

import { AssetContainerProps } from '@/types/AssetContainer';
import Image from 'next/image';
import Link from 'next/link';

interface ExtendedAssetContainerProps extends AssetContainerProps {
  fullWidth?: boolean;
  layout?: 'fill' | 'fixed';
  style?: React.CSSProperties;
}

const AssetContainer = ({
  src,
  alt,
  width,
  height,
  className = '',
  onClick,
  href,
  cursor,
  ariaLabel,
  fullWidth = false,
  layout = 'fixed',
  style,
}: ExtendedAssetContainerProps) => {
  const isInteractive =
    typeof onClick === 'function' || typeof href === 'string';
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
  const aspectRatioClass = !isVideo ? `aspect-[${width}/${height}]` : '';
  const interactiveCursor = cursor || (href ? 'pointer' : 'zoom-in');

  const sharedClasses = `
    relative flex justify-center items-center overflow-hidden rounded-3xl border-2 border-border-primary
    transition-all duration-300 box-border
    ${aspectRatioClass} ${className}
    ${isInteractive ? `cursor-${interactiveCursor}` : ''}
    ${
      isInteractive
        ? 'hover:ring-4 hover:ring-border-primary hover:ring-offset-4 hover:ring-offset-offset-primary'
        : ''
    }
    ${
      isInteractive
        ? 'focus-visible:ring-4 focus-visible:ring-focus focus-visible:ring-offset-4 focus-visible:ring-offset-offset-primary'
        : ''
    }
    outline-none
  `;

  const content = isVideo ? (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-label={alt}
      className={`
        w-full object-cover transition-all duration-300 z-[5] relative
        ${isInteractive ? 'hover:scale-[1.06]' : ''}
      `.trim()}
    />
  ) : layout === 'fill' ? (
    <Image
      src={src}
      alt={alt}
      fill
      className={`
        object-cover transition-all duration-300 z-[5]
        ${isInteractive ? 'hover:scale-[1.06]' : ''}
      `.trim()}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`
        object-cover transition-all duration-300 z-[5]
        ${isInteractive ? 'hover:scale-[1.06]' : ''}
      `.trim()}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel || alt}
        className={sharedClasses.trim()}
        style={fullWidth ? undefined : { maxWidth: width }}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      {...(isInteractive && {
        onClick,
        role: 'button',
        tabIndex: 0,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter') onClick?.();
        },
        'aria-label': ariaLabel || alt,
      })}
      className={sharedClasses.trim()}
      style={{
        ...(fullWidth ? undefined : { maxWidth: width }),
        ...style,
      }}
    >
      {content}
    </div>
  );
};

export default AssetContainer;
