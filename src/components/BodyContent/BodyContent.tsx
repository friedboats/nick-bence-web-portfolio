'use client';

import { Element as DomHandlerElement } from 'domhandler';
import parse, { DOMNode, domToReact } from 'html-react-parser';
import React from 'react';

interface BodyContentProps {
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

const variantStyles: Record<Required<BodyContentProps>['variant'], string> = {
  p: 'text-p-mobile sm:text-p',
  'p-bold': 'text-p-bold-mobile sm:text-p-bold',
  small: 'text-small-mobile sm:text-small',
  'small-bold': 'text-small-bold-mobile sm:text-small-bold',
  'x-small': 'text-x-small-mobile sm:text-x-small',
  'x-small-bold': 'text-x-small-bold-mobile sm:text-x-small-bold',
  quote: 'text-block-quote-mobile sm:text-block-quote',
};

function getBodyContentClassNames({
  variant = 'p',
  color = 'text-body-primary',
  className = '',
}: Omit<BodyContentProps, 'children'>): string {
  // detect if user already provided a text-body-* class
  const colorToken = /\btext-body-(primary|secondary|inverse)\b/;
  const hasCustomColor =
    typeof className === 'string' && colorToken.test(className);

  return [variantStyles[variant], hasCustomColor ? '' : color, className]
    .filter(Boolean)
    .join(' ');
}

const BodyContent = ({
  variant = 'p',
  color = 'text-body-primary',
  className = '',
  children,
}: BodyContentProps) => {
  const contentClass = getBodyContentClassNames({ variant, color, className });

  const renderContent = (content: React.ReactNode) => {
    if (typeof content !== 'string') return content;

    const replace = (node: DOMNode): React.ReactElement | null => {
      if (node.type === 'tag' && 'name' in node && 'children' in node) {
        const el = node as DomHandlerElement;

        const isBold = el.name === 'b' || el.name === 'strong';
        if (isBold) {
          let colorUtilityClass = '';

          if (el.name === 'b') {
            colorUtilityClass = 'text-body-secondary';
          } else if (el.name === 'strong') {
            colorUtilityClass = 'text-body-tertiary';
          }
          return (
            <span className={`${colorUtilityClass} font-bold`}>
              {domToReact(el.children as DOMNode[], { replace })}
            </span>
          );
        }

        if (el.name === 'ul') {
          return (
            <ul className="list-disc pl-5 mb-4">
              {domToReact(el.children as DOMNode[], { replace })}
            </ul>
          );
        }

        if (el.name === 'li') {
          return <li>{domToReact(el.children as DOMNode[], { replace })}</li>;
        }

        if (el.name === 'p') {
          return (
            <p className="mb-4 last:mb-0">
              {domToReact(el.children as DOMNode[], { replace })}
            </p>
          );
        }

        if (el.name === 'br') {
          return <br />;
        }
      }

      return null;
    };

    return parse(content, { replace });
  };

  return <div className={contentClass}>{renderContent(children)}</div>;
};

export default BodyContent;
