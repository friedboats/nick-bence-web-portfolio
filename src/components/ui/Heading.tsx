import { JSX } from 'react';

interface HeadingProps {
  as?: keyof typeof variantStyles;
  color?: string;
  children: React.ReactNode;
}

const variantStyles = {
  h1: 'font-heading text-h1-mobile sm:text-h1',
  h2: 'font-heading text-h2-mobile sm:text-h2',
  h3: 'font-heading text-h3-mobile sm:text-h3',
  h4: 'font-primary text-h4-mobile sm:text-h4',
  h5: 'font-primary text-h5-mobile sm:text-h5',
  h6: 'font-primary text-h6-mobile sm:text-h6',
};

const Heading = ({
  as: Tag = 'h1',
  color = 'text-header-primary',
  children,
}: HeadingProps) => {
  return (
    <Tag className={`${variantStyles[Tag] || ''} ${color}`}>{children}</Tag>
  );
};

export default Heading;
