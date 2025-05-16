import Paragraph from '../Paragraph';
import { QuotationMark } from '../SVGComponents';

interface BlockQuoteProps {
  quote: string;
}

const BlockQuote = ({ quote }: BlockQuoteProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center h-7 pb-1">
        <QuotationMark className="text-body-secondary w-[32px] h-[26px]" />
      </div>
      <Paragraph
        variant="quote"
        className="text-center"
        color="text-body-secondary"
      >{`${quote}`}</Paragraph>
    </div>
  );
};

export default BlockQuote;
