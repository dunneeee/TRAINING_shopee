import { Icons } from '@/constants';
import clsx from 'clsx';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
};

export const Search = ({
  className,
  placeholder = 'Search',
  children,
  ...props
}: Props) => {
  return (
    <div
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
      <div className="absolute left-0 top-full z-[10] w-full bg-black">
        {children}
      </div>
    </div>
  );
};
