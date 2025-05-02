import { ButtonProps } from '@/types/Buttons';
import Link from 'next/link';
import { getButtonClassNames } from './buttonStyles';

export type LinkButtonProps = ButtonProps & {
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  variant = 'primary',
  disabled = false,
  iconLeft,
  iconRight,
  isIconOnly = false,
  className = '',
  onClick,
  'aria-label': ariaLabel,
  ...props
}) => {
  const finalClassName = getButtonClassNames({
    variant,
    disabled,
    className,
    isIconOnly,
  });

  const content = (
    <>
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
    </>
  );

  const sharedProps = {
    className: finalClassName,
    'aria-disabled': disabled,
    onClick: disabled
      ? (e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
        }
      : onClick,
    'aria-label': ariaLabel,
    ...props,
  };

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} {...sharedProps}>
      {content}
    </Link>
  );
};

export default LinkButton;
