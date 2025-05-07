import React from 'react';

interface ParagraphProps {
  variant?:
    | 'p'
    | 'p-bold'
    | 'small'
    | 'small-bold'
    | 'x-small'
    | 'x-small-bold'
    | 'quote';
  color?: 'text-body-primary' | 'text-body-secondary' | 'text-body-inverse';
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<Required<ParagraphProps>['variant'], string> = {
  p: 'text-p-mobile sm:text-p',
  'p-bold': 'text-p-bold-mobile sm:text-p-bold',
  small: 'text-small-mobile sm:text-small',
  'small-bold': 'text-small-bold-mobile sm:text-small-bold',
  'x-small': 'text-x-small-mobile sm:text-x-small',
  'x-small-bold': 'text-x-small-bold-mobile sm:text-x-small-bold',
  quote: 'text-block-quote-mobile sm:text-block-quote',
};

function getParagraphClassNames({
  variant = 'p',
  color = 'text-body-primary',
  className = '',
}: Omit<ParagraphProps, 'children'>): string {
  const base = [variantStyles[variant], color].filter(Boolean).join(' ');
  return className ? `${base} ${className}` : base;
}

// className is intended only for layout tweaks (e.g., margin, text alignment).
// Avoid overriding core text styles (like font size or weight) through className.
const Paragraph = ({
  variant = 'p',
  color = 'text-body-primary',
  className = '',
  children,
}: ParagraphProps) => {
  const paragraphClassNames = getParagraphClassNames({
    variant,
    color,
    className,
  });

  const renderContent = (content: React.ReactNode) => {
    if (typeof content === 'string') {
      return content.split('\n').map((line, idx, arr) => (
        <React.Fragment key={idx}>
          {line}
          {idx !== arr.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return content;
  };

  return <p className={paragraphClassNames}>{renderContent(children)}</p>;
};

export default Paragraph;
