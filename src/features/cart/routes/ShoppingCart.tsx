import { Button } from '@/components/Elements';
import { CartItemGrid, CartItemTotal } from '../components';
import { useShoppingItem } from '../hooks';
import { InputField } from '@/components/Form';
import { useScrollTop } from '@/hooks';

export const ShoppingCart = () => {
  useScrollTop();
  const { shoppingItems, cartDispatch, cartState } = useShoppingItem();
  return (
    <section className="wrapper overflow-hidden">
      <h5 className="mb-5">Shopping Cart</h5>
      <div className="flex flex-wrap md:-mx-2">
        <div className="w-full md:w-1/2 md:px-2">
          <CartItemGrid
            className="mb-6"
            cartItems={shoppingItems}
            cartDispatch={cartDispatch}
          />
          <Button uppercase variant="outline" className="w-full md:hidden">
            Update Cart
          </Button>
          <div className="mt-9">
            <InputField placeholder="Coupon Code" className="w-full" />
            <div className="mt-6"></div>
            <Button uppercase className="w-full">
              Apply Coupon
            </Button>
          </div>
        </div>

        <div className="mt-10 w-full md:mt-0 md:w-1/2 md:px-2">
          <CartItemTotal
            className="md:ml-auto md:max-w-lg"
            subtotal={cartState.totalPrice}
          />
        </div>
      </div>
    </section>
  );
};
