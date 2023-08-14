import { Icons } from '@/constants';
import { DOT_VALUE, usePagination } from '@/hooks';
import clsx from 'clsx';

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

export const Pagination = ({
  className,
  onPageChange,
  ...paginationProps
}: PaginationProps) => {
  const paginationRange = usePagination(paginationProps);
  if (paginationProps.currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(paginationProps.currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(paginationProps.currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={clsx('flex items-center justify-center gap-1', className)}>
      <li
        className={clsx(
          'flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-gray',
          {
            hidden: paginationProps.currentPage === 1,
          }
        )}
        onClick={onPrevious}
      >
        <Icons.AngleArrowRight className="-rotate-180" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOT_VALUE) {
          return (
            <li
              className=" flex h-10 w-10  items-center justify-center rounded border border-gray"
              key={index}
            >
              ...
            </li>
          );
        }

        return (
          <li
            className={clsx(
              'flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-gray',
              {
                'bg-black text-white':
                  paginationProps.currentPage === pageNumber,
              }
            )}
            key={index}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={clsx(
          'flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-gray',
          {
            hidden: paginationProps.currentPage === lastPage,
          }
        )}
        onClick={onNext}
      >
        <Icons.AngleArrowRight />
      </li>
    </ul>
  );
};
