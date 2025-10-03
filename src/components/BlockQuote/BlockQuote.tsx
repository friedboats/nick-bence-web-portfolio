import BodyContent from '../BodyContent';
import { QuotationMark } from '../SVGComponents';

interface BlockQuoteProps {
  quote: string;
}

const BlockQuote = ({ quote }: BlockQuoteProps) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[902px] mx-auto">
      <div className="flex items-center h-7 pb-1">
        <QuotationMark className="text-body-secondary w-[32px] h-[26px]" />
      </div>
      <BodyContent
        variant="quote"
        className="text-center"
        color="text-body-secondary"
      >{`${quote}`}</BodyContent>
    </div>
  );
};

export default BlockQuote;
