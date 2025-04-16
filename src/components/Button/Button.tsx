'use client';

import { ButtonProps } from '@/types/buttons';
import React from 'react';
import { getButtonClassNames } from './buttonStyles';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  iconLeft,
  iconRight,
  isIconOnly = false,
  className = '',
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
      className={finalClassName}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={props['aria-label']}
      {...props}
    >
      {iconLeft && (
        <span className={`${isIconOnly ? 'mr-0' : 'mr-2'} flex items-center`}>
          {iconLeft}
        </span>
      )}
      {!isIconOnly && <span>{props.children}</span>}
      {iconRight && (
        <span className={`${isIconOnly ? 'ml-0' : 'ml-2'} flex items-center`}>
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;
