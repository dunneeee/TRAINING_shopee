import { Icons } from '@/constants';
import clsx from 'clsx';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Search = ({
  className,
  placeholder = 'Search',
  ...props
}: Props) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded bg-lightGray',
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
    </div>
  );
};
