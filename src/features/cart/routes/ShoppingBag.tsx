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
    <section className={clsx(className)}>
      <div className="flex h-full flex-col">
        <div className="wrapper mx-0 mb-6 flex items-center pt-3">
          <Icons.AngleArrowRight
            onClick={onBack}
            className="-rotate-180 cursor-pointer"
            height={16}
            width={9}
          />
          <h5 className="flex-1 text-center text-black">Shopping bag</h5>
        </div>

        {cartState.items.length > 0 && (
          <p className="font-body-small wrapper mx-0 text-darkGray">
            {cartState.items.length} items
          </p>
        )}

        <div className="wrapper w-full flex-1 overflow-auto">
          <CartItemGrid cartItems={shoppingItems} cartDispatch={cartDispatch} />
        </div>

        <div className="border-t border-lightGray bg-white py-9">
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
    </section>
  );
};
