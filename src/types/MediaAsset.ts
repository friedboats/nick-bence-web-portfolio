import { CSSProperties } from 'react';

export type MediaAsset = {
  readonly alt: string;
  readonly src: string;
  readonly width?: number;
  readonly height?: number;
  style?: CSSProperties;
};
