export type ButtonVariants = 'primary' | 'secondary' | 'link';

interface ButtonStyleOptions {
  variant: ButtonVariants;
  disabled?: boolean;
  className?: string;
  isIconOnly?: boolean;
}

export const baseStyles =
  'inline-flex items-center justify-center text-center text-small-bold d-mobile sm:text-small-bold duration-200';

export const iconBtnOnlyStyles: Record<ButtonVariants, string> = {
  primary: '!px-2',
  secondary: '!px-2',
  link: '!px-2',
};

export const variantStyles: Record<ButtonVariants, string> = {
  primary:
    'px-4 py-1 h-7 rounded-xl text-button-primary-default hover:text-button-primary-hover active:text-button-primary-active bg-surface-button-primary-default hover:bg-surface-button-primary-hover active:bg-surface-button-primary-active',
  secondary:
    'px-4 py-1 h-7 rounded-xl text-button-secondary-default hover:text-button-secondary-hover active:text-button-secondary-active bg-surface-button-secondary-default hover:bg-surface-button-secondary-hover active:bg-surface-button-secondary-active border-2 border-solid border-btn-border-secondary-default hover:border-btn-border-secondary-hover active:border-btn-border-secondary-active',
  link: 'px-0 py-1 h-5 flex items-center text-button-link-default hover:text-button-link-hover active:text-button-link-active hover:underline',
};

export const disabledStyles = 'cursor-not-allowed opacity-50';

export function getButtonClassNames({
  variant,
  disabled,
  className = '',
  isIconOnly = false,
}: ButtonStyleOptions): string {
  return [
    baseStyles,
    variantStyles[variant],
    disabled ? disabledStyles : '',
    className,
    isIconOnly ? iconBtnOnlyStyles[variant] : '',
  ]
    .filter(Boolean)
    .join(' ');
}
