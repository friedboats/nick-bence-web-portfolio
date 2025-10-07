'use client';

import { Element as DomHandlerElement } from 'domhandler';
import parse, { DOMNode, domToReact } from 'html-react-parser';
import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof typeof variantStyles;
  color?:
    | 'text-header-primary'
    | 'text-header-secondary'
    | 'text-header-tertiary'
    | 'text-header-inverse';
  children: React.ReactNode;
}

export const variantStyles = {
  display: 'font-heading text-display-size-mobile sm:text-display-size',
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
  className = '',
  children,
  ...rest
}: HeadingProps) => {
  const Component = Tag === 'display' ? 'h2' : Tag;

  // Check if user provided a color class manually
  const colorToken = /\btext-header-(primary|secondary|tertiary|inverse)\b/;
  const hasCustomColor =
    typeof className === 'string' && colorToken.test(className);

  const headingClasses = [
    variantStyles[Tag] || '',
    hasCustomColor ? '' : color,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderChildren = (content: React.ReactNode) => {
    if (typeof content !== 'string') return content;

    const replace = (node: DOMNode): React.ReactElement | null => {
      if (node.type === 'tag' && 'name' in node && 'children' in node) {
        const el = node as DomHandlerElement;

        if (el.name === 'span') {
          const spanClass = el.attribs?.class || '';
          return (
            <span className={spanClass}>
              {domToReact(el.children as DOMNode[], { replace })}
            </span>
          );
        }
      }
      return null;
    };

    return parse(content, { replace });
  };

  return (
    <Component className={headingClasses} {...rest}>
      {renderChildren(children)}
    </Component>
  );
};

export default Heading;
