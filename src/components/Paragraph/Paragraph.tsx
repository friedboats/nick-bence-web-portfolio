import React from 'react';

interface ParagraphProps {
  variant?:
    | 'p'
    | 'p-bold'
    | 'small'
    | 'small-bold'
    | 'x-small'
    | 'x-small-bold';
  color?: 'text-body-primary' | 'text-body-secondary' | 'text-body-inverse';
  className?: string;
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

function getParagraphClassNames({
  variant = 'p',
  color = 'text-body-primary',
  className = '',
}: Omit<ParagraphProps, 'children'>): string {
  return [variantStyles[variant], color, className].filter(Boolean).join(' ');
}

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
      const lines = content.split('\n');
      return lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx !== lines.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return content;
  };

  return <p className={paragraphClassNames}>{renderContent(children)}</p>;
};

export default Paragraph;
