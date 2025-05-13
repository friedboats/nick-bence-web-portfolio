import { Dispatch, SetStateAction } from 'react';
import PaginationDot from './PaginationDot';

type PaginationDotsProps = {
  numSlides: number;
  currentIndex: number;
  onClick: () => Dispatch<SetStateAction<number>>;
};

const PaginationDots = ({ numSlides, currentIndex }: PaginationDotsProps) => {
  return (
    <div className="flex gap-1">
      {[...Array(numSlides)].map((_, i) => {
        return (
          <PaginationDot
            key={i}
            isActive={currentIndex === i}
            onClick={onClick(currentIndex)}
          />
        );
      })}
    </div>
  );
};

export default PaginationDots;
