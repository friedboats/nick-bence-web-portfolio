import { CursorType } from './CursorType';

export type AssetContainerProps = {
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
