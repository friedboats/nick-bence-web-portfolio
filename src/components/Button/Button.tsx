'use client';

import { ButtonProps } from '@/types/Buttons';
import React from 'react';
import { getButtonClassNames } from './buttonStyles';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  iconLeft,
  iconRight,
  isIconOnly = false,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const finalClassName = getButtonClassNames({
    variant,
    disabled,
    isIconOnly,
    className,
  });

  return (
    <button
      type="button"
      className={finalClassName}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {iconLeft && (
        <span className={`${isIconOnly ? 'mr-0' : 'mr-2'} flex items-center`}>
          {iconLeft}
        </span>
      )}
      {!isIconOnly && <>{children}</>}
      {iconRight && (
        <span className={`${isIconOnly ? 'ml-0' : 'ml-2'} flex items-center`}>
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;
