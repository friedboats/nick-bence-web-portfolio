import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'text-center text-small-bold-mobile sm:text-small-bold duration-200';
  const variantStyles = {
    primary:
      'px-4 py-1 h-7 rounded-xl text-button-primary-default hover:text-button-primary-hover active:text-button-primary-active bg-surface-button-primary-default hover:bg-surface-button-primary-hover active:bg-surface-button-primary-active',
    secondary:
      'px-4 py-1 h-7 rounded-xl text-button-secondary-default hover:text-button-secondary-hover active:text-button-secondary-active bg-surface-button-secondary-default hover:bg-surface-button-secondary-hover active:bg-surface-button-secondary-active border-2 border-solid border-btn-border-secondary-default hover:border-btn-border-secondary-hover active:border-btn-border-secondary-active',
    link: 'px-0 py-1 h-5 text-button-link-default hover:text-button-link-hover active:text-button-link-active hover:underline',
  };
  const disabledStyles = 'cursor-not-allowed opacity-50';

  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? disabledStyles : ''
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
