import { Filter } from '@/constants/Icons';
import clsx from 'clsx';

interface FilterButtonProps {
  onClick?: () => void;
  className?: string;
}

const FilterButton = ({ onClick, className }: FilterButtonProps) => {
  return (
    <button onClick={onClick} className={clsx('flex text-primary', className)}>
      <Filter className="mr-2 h-[18px] w-[18px]" />{' '}
      <span className="font-body-small">Filter</span>
    </button>
  );
};

export default FilterButton;
