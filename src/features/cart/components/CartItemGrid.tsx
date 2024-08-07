import { CartTypes } from '@/types';
import { CartItem } from '.';
import {
  CartAction,
  decrementCartItem,
  incrementCartItem,
  removeItemFromCart,
} from '@/redux/actions';
import clsx from 'clsx';
import { Message } from '@/components/Elements';

interface CartItemGridProps {
  className?: string;
  cartItems: CartTypes.Item[];
  cartDispatch?: React.Dispatch<CartAction>;
}

export const CartItemGrid = ({
  className,
  cartItems,
  cartDispatch,
}: CartItemGridProps) => {
  const onIncrementItem = (item: CartTypes.Item) => {
    cartDispatch && cartDispatch(incrementCartItem(item.id));
  };

  const onDecrementItem = (item: CartTypes.Item) => {
    cartDispatch && cartDispatch(decrementCartItem(item.id));
  };

  const onRemoveItem = (item: CartTypes.Item) => {
    cartDispatch && cartDispatch(removeItemFromCart(item.id));
  };
  return (
    <ul className={clsx('w-full', className)}>
      {cartItems.map((item, index) => (
        <li key={item.id} className="mb-6 md:mb-0">
          <CartItem
            cartItem={item}
            onDecrement={onDecrementItem}
            onIncrement={onIncrementItem}
            onRemove={onRemoveItem}
          />
          {index !== cartItems.length - 1 && (
            <hr className="my-4 hidden text-gray md:block" />
          )}
        </li>
      ))}
      {cartItems.length === 0 && (
        <Message
          message="No items in cart"
          link={{
            to: '/shop',
            text: 'CONTINUE SHOPPING',
          }}
        />
      )}
    </ul>
  );
};
