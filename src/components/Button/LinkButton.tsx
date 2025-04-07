import Link from 'next/link';
import { ReactNode } from 'react';
import { getButtonClassNames, ButtonVariants } from './buttonStyles';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariants;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  variant = 'primary',
  disabled = false,
  iconLeft,
  iconRight,
  className = '',
  onClick,
}) => {
  const finalClassName = getButtonClassNames({
    variant,
    disabled,
    className,
  });

  const content = (
    <>
      {iconLeft && <span className="mr-2 flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="ml-2 flex items-center">{iconRight}</span>}
    </>
  );

  const sharedProps = {
    className: finalClassName,
    'aria-disabled': disabled,
    onClick,
  };

  // External link
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...sharedProps}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {content}
      </a>
    );
  }

  // Internal link (Next.js routing)
  return (
    <Link href={href} {...sharedProps}>
      {content}
    </Link>
  );
};

export default LinkButton;
