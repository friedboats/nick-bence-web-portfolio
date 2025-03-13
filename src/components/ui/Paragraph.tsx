import React from 'react';

interface ParagraphProps {
  variant?:
    | 'p'
    | 'p-bold'
    | 'small'
    | 'small-bold'
    | 'x-small'
    | 'x-small-bold';
  color?: string;
  children: React.ReactNode;
}

const variantStyles: Record<
  'p' | 'p-bold' | 'small' | 'small-bold' | 'x-small' | 'x-small-bold',
  string
> = {
  p: 'text-p-mobile sm:text-p',
  'p-bold': 'text-p-bold-mobile sm:text-p-bold',
  small: 'text-small-mobile sm:text-small',
  'small-bold': 'text-small-bold-mobile sm:text-small-bold',
  'x-small': 'text-x-small-mobile sm:text-x-small',
  'x-small-bold': 'text-x-small-bold-mobile sm:text-x-small-bold',
};

const Paragraph = ({
  variant = 'p', // default variant if not provided
  color = 'text-body-primary',
  children,
}: ParagraphProps) => {
  return (
    <p className={`${variantStyles[variant] || ''} ${color}`}>{children}</p>
  );
};

export default Paragraph;
