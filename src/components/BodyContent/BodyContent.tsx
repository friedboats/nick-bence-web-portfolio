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
  const base = [variantStyles[variant], color].filter(Boolean).join(' ');
  return className ? `${base} ${className}` : base;
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

    const replace = (
      node: DOMNode,
    ): string | boolean | void | object | React.ReactElement | null => {
      if (node.type === 'tag' && 'name' in node && 'children' in node) {
        const el = node as DomHandlerElement;

        if (el.name === 'b' || el.name === 'strong') {
          return (
            <span className="text-body-secondary font-bold">
              {domToReact(el.children as DOMNode[], { replace })}
            </span>
          );
        }

        if (el.name === 'ul') {
          return (
            <ul className="list-disc pl-5 my-4">
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
