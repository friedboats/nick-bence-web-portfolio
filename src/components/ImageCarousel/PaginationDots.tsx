import { Dispatch, SetStateAction } from 'react';
import PaginationDot from './PaginationDot';

type PaginationDotsProps = {
  numSlides: number;
  currentIndex: number;
  onClick: Dispatch<SetStateAction<number>>;
};

const PaginationDots = ({
  numSlides,
  currentIndex,
  onClick,
}: PaginationDotsProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: numSlides }).map((_, i) => (
        <PaginationDot
          key={i}
          isActive={currentIndex === i}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
