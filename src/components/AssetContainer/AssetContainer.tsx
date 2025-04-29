'use client';

import Image from 'next/image';
import Link from 'next/link';

type CursorType =
  | 'auto'
  | 'default'
  | 'pointer'
  | 'wait'
  | 'text'
  | 'move'
  | 'help'
  | 'not-allowed'
  | 'none'
  | 'context-menu'
  | 'progress'
  | 'cell'
  | 'crosshair'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'grab'
  | 'grabbing'
  | 'zoom-in'
  | 'zoom-out';

type AssetContainerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
  href?: string;
  cursor?: CursorType;
  ariaLabel?: string;
};

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
}: AssetContainerProps) => {
  const isInteractive =
    typeof onClick === 'function' || typeof href === 'string';
  const aspectRatioClass = `aspect-[${width}/${height}]`;
  const interactiveCursor = cursor || (href ? 'pointer' : 'zoom-in');

  const sharedClasses = `
  relative flex justify-center items-center overflow-hidden rounded-3xl border-2 border-border-primary
  transition-all duration-300 box-border
  ${aspectRatioClass} ${className}
  ${isInteractive ? `cursor-${interactiveCursor}` : ''}
  ${
    isInteractive
      ? 'hover:ring-4 hover:ring-border-primary hover:ring-offset-2 hover:ring-offset-transparent'
      : ''
  }
  ${
    isInteractive
      ? 'focus-visible:ring-4 focus-visible:ring-border-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
      : ''
  }
  outline-none
`;

  const content = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`
        transition-all duration-300 z-[5] relative
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
        style={{ maxWidth: width }}
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
      style={{ maxWidth: width }}
    >
      {content}
    </div>
  );
};

export default AssetContainer;
