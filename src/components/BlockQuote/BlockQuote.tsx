import React from 'react';

interface BlockQuoteProps {
  quote: string;
}

const BlockQuote = ({ quote }: BlockQuoteProps) => {
  return (
    <p className="text-block-quote-mobile sm:text-block-quote text-body-secondary text-center">
      {`"${quote}"`}
    </p>
  );
};

export default BlockQuote;
