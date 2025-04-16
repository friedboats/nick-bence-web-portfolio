import { Quotation } from '../SVGComponents';

interface BlockQuoteProps {
  quote: string;
}

const BlockQuote = ({ quote }: BlockQuoteProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center h-7 pb-1">
        <Quotation className="text-body-secondary pb-0 w-[32px] h-[26px]" />
      </div>
      <p className="text-block-quote-mobile sm:text-block-quote text-body-secondary text-center">
        {`${quote}`}
      </p>
    </div>
  );
};

export default BlockQuote;
