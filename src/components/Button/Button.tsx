'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonVariants = 'primary' | 'secondary' | 'link';

interface BaseProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  href?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

type ButtonProps = BaseProps &
  (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
  );

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  disabled = false,
  onClick,
  className = '',
  iconLeft,
  iconRight,
  ...rest
}) => {
  const baseStyles =
    'inline-flex items-center justify-center text-center text-small-bole  d-mobile sm:text-small-bold duration-200';
  const variantStyles = {
    primary:
      'px-4 py-1 h-7 rounded-xl text-button-primary-default hover:text-button-primary-hover active:text-button-primary-active bg-surface-button-primary-default hover:bg-surface-button-primary-hover active:bg-surface-button-primary-active',
    secondary:
      'px-4 py-1 h-7 rounded-xl text-button-secondary-default hover:text-button-secondary-hover active:text-button-secondary-active bg-surface-button-secondary-default hover:bg-surface-button-secondary-hover active:bg-surface-button-secondary-active border-2 border-solid border-btn-border-secondary-default hover:border-btn-border-secondary-hover active:border-btn-border-secondary-active',
    link: 'px-0 py-1 h-5 flex items-center text-button-link-default hover:text-button-link-hover active:text-button-link-active hover:underline',
  };
  const disabledStyles = 'cursor-not-allowed opacity-50';

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${
    disabled ? disabledStyles : ''
  } ${className}`;

  const isExternal = href?.startsWith('http');

  const content = (
    <>
      {iconLeft && <span className="mr-2 flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="ml-2 flex items-center">{iconRight}</span>}
    </>
  );

  if (href && isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={finalClassName}
        aria-disabled={disabled}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={finalClassName}
        aria-disabled={disabled}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={finalClassName}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
