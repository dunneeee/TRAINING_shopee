import { Icons } from '@/constants';
import { CartTypes } from '@/types';
import { moneyUtils } from '@/utils';
import clsx from 'clsx';

interface QuantityCounterProps {
  className?: string;
  count?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

interface CartItemProps {
  cartItem: CartTypes.Item;
  className?: string;
  onRemove?: (item: CartTypes.Item) => void;
  onDecrement?: (item: CartTypes.Item) => void;
  onIncrement?: (item: CartTypes.Item) => void;
}

const QuantityCounter = ({
  count = 0,
  className,
  onDecrement,
  onIncrement,
}: QuantityCounterProps) => {
  return (
    <div className={clsx('inline-flex items-center', className)}>
      <button
        className="font-body-small cursor-pointer select-none p-1"
        onClick={onDecrement}
      >
        -
      </button>
      <p className="mx-2 w-5 text-center">{count}</p>
      <button
        className="font-body-small cursor-pointer select-none p-1"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
};

export const CartItem = ({
  className,
  cartItem,
  onRemove,
  onDecrement,
  onIncrement,
}: CartItemProps) => {
  return (
    <div className={clsx('flex', className)}>
      <div className="w-1/2">
        <img src={cartItem.image} alt={cartItem.name} />
      </div>
      <div className="flex w-1/2 flex-col justify-between pl-2">
        <div className="top">
          <div className="flex">
            <p>{cartItem.name} </p>
            <Icons.Close
              onClick={() => onRemove && onRemove(cartItem)}
              className="ml-auto mr-1 cursor-pointer"
              height={8}
              width={8}
              strokeWidth={1.5}
              stroke="black"
            />
          </div>
          <p className="font-body-small text-darkGray">
            {moneyUtils.formatUSD(cartItem.price)}
          </p>
        </div>
        <div className="bottom font-body-small text-darkGray">
          QTY:
          <QuantityCounter
            count={cartItem.quantity}
            onIncrement={() => onIncrement && onIncrement(cartItem)}
            onDecrement={() => onDecrement && onDecrement(cartItem)}
          />
        </div>
      </div>
    </div>
  );
};
