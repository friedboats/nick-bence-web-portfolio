'use client';

import React, { ReactNode } from 'react';
import { getButtonClassNames, ButtonVariants } from './buttonStyles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  iconLeft,
  iconRight,
  className = '',
  type = 'button',
  ...rest
}) => {
  const finalClassName = getButtonClassNames({
    variant,
    disabled,
    className,
  });

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={finalClassName}
      {...rest}
    >
      {iconLeft && <span className="mr-2 flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="ml-2 flex items-center">{iconRight}</span>}
    </button>
  );
};

export default Button;
