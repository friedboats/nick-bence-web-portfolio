type PaginationDotProps = {
  isActive: boolean;
  onClick: () => void;
};

const PaginationDot = ({ isActive, onClick }: PaginationDotProps) => {
  return (
    <button
      className={`hover:bg-surface-dot-primary-hover active:bg-surface-dot-primary-active rounded-full w-1 h-1 ${
        isActive
          ? 'bg-surface-dot-primary-active'
          : 'bg-surface-dot-primary-default'
      }`}
      onClick={onClick}
    ></button>
  );
};

export default PaginationDot;
