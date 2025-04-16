import { ButtonVariants } from '@/components/Button/buttonStyles';
import { ReactNode } from 'react';

export type BaseButtonProps = {
  variant?: ButtonVariants;
  disabled?: boolean;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export type IconOnlyProps = {
  isIconOnly: true;
  children?: undefined;
  'aria-label': string;
};

export type WithLabelProps = {
  isIconOnly?: false;
  children: ReactNode;
  'aria-label'?: string;
};

export type ButtonProps = BaseButtonProps & (IconOnlyProps | WithLabelProps);
