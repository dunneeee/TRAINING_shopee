import { forwardRef } from 'react';
import { Icons } from '@/constants';
import clsx from 'clsx';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
  showResult?: boolean;
};

export const Search = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      placeholder = 'Search',
      children,
      showResult = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'relative inline-flex items-center rounded bg-lightGray',
          className
        )}
      >
        <div className="pl-[10px]">
          <Icons.Search className="text-darkGray" />
        </div>
        <input
          placeholder={placeholder}
          className="h-full w-full bg-transparent px-2 py-[7px]"
          {...props}
        />
        <div
          className={clsx(
            'absolute top-full z-[10] w-full',
            !showResult && 'hidden'
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);
