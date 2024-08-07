import { Icons } from '@/constants';
import clsx from 'clsx';
import { moneyUtils } from '@/utils';
import { Button } from '@/components/Elements';
import { Link } from 'react-router-dom';
import { CartItemGrid } from '../components';
import { useShoppingItem } from '../hooks';

interface ShoppingBagProps {
  className?: string;
  onBack?: () => void;
}

export const ShoppingBag = ({ className, onBack }: ShoppingBagProps) => {
  const { cartState, cartDispatch, shoppingItems } = useShoppingItem();

  return (
    <div className={clsx(className)}>
      <div className="flex h-full flex-col">
        <div className="wrapper mb-6 flex w-full items-center pt-3">
          <Icons.AngleArrowRight
            onClick={onBack}
            className="-rotate-180 cursor-pointer md:hidden"
            height={16}
            width={9}
          />
          <h5 className="flex-1 text-center text-black">Shopping bag</h5>
        </div>

        {cartState.items.length > 0 && (
          <p className="font-body-small md:font-body-medium wrapper w-full text-darkGray">
            {cartState.items.length} items
          </p>
        )}

        <div className="wrapper w-full flex-1 overflow-auto">
          <CartItemGrid cartItems={shoppingItems} cartDispatch={cartDispatch} />
        </div>

        <div className="md:wrapper w-full border-t border-lightGray bg-white py-9 md:py-2">
          <div className="wrapper">
            <p className="mb-4 flex justify-between text-black">
              <span>Subtotal ({cartState.totalItems} items) </span>
              <span className="ml-auto inline-block">
                {moneyUtils.formatUSD(cartState.totalPrice)}
              </span>
            </p>
            <Link to={'/shopping-cart'} onClick={onBack}>
              <Button variant="outline" className="w-full" uppercase>
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
