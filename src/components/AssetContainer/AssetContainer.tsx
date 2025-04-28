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
  cursor = 'zoom-in',
  ariaLabel,
}: AssetContainerProps) => {
  const isInteractive =
    typeof onClick === 'function' || typeof href === 'string';
  const aspectRatioClass = `aspect-[${width}/${height}]`;
  const maxWidth = width;

  const containerClasses = `
    relative flex justify-center items-center overflow-hidden rounded-3xl box-border
    ${aspectRatioClass} ${className}
    ${isInteractive ? `cursor-${cursor}` : ''}
    ${
      isInteractive
        ? 'group focus-visible:ring-4 focus-visible:ring-border-secondary'
        : ''
    }
    outline-none
  `;

  const borderClasses = `
    absolute inset-0 rounded-3xl border-2 border-border-primary transition-all duration-300
    ${
      isInteractive
        ? 'group-hover:border-8 group-hover:border-border-secondary group-focus-visible:border-8 group-focus-visible:border-border-secondary'
        : ''
    }
    z-10 pointer-events-none
  `;

  const imageClasses = `
    transition-all duration-300 z-[5] relative
    ${isInteractive ? 'hover:scale-[1.06]' : ''}
  `;

  const sharedProps = {
    style: { maxWidth },
    className: containerClasses.trim(),
  };

  const content = (
    <div
      {...sharedProps}
      {...(!href && isInteractive
        ? {
            onClick,
            role: 'button',
            tabIndex: 0,
            onKeyDown: (e) => {
              if (e.key === 'Enter') onClick?.();
            },
            'aria-label': ariaLabel || alt,
          }
        : {})}
    >
      <div className={borderClasses.trim()} />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses.trim()}
      />
    </div>
  );

  return href ? (
    <Link href={href} aria-label={ariaLabel || alt}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default AssetContainer;
