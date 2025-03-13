import React from 'react';

interface BlockQuoteProps {
  children: React.ReactNode;
}

const BlockQuote = ({ children }: BlockQuoteProps) => {
  return (
    <p className="text-block-quote-mobile sm:text-block-quote text-body-secondary text-center">
      {children}
    </p>
  );
};

export default BlockQuote;
