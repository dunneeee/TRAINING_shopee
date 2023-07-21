import clsx from 'clsx';

interface Props {
  count?: number;
  className?: string;
}

const CartDot = ({ count = 0, className }: Props) => {
  return (
    <div
      className={clsx(
        'right-0 top-0 h-3 w-3 -translate-y-1 translate-x-1 rounded-full border bg-white text-center text-[7px] leading-3',
        className
      )}
    >
      {count}
    </div>
  );
};

export default CartDot;
