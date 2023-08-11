import { Button } from '@/components/Elements';
import { CartItemGrid, CartItemTotal } from '../components';
import { useShoppingItem } from '../hooks';
import { InputField } from '@/components/Form';

export const ShoppingCart = () => {
  const { shoppingItems, cartDispatch, cartState } = useShoppingItem();
  return (
    <section className="wrapper">
      <h5 className="mb-5">Shopping Cart</h5>
      <CartItemGrid
        className="mb-6"
        cartItems={shoppingItems}
        cartDispatch={cartDispatch}
      />
      <Button uppercase variant="outline" className="w-full">
        Update Cart
      </Button>
      <div className="mt-9">
        <InputField placeholder="Coupon Code" className="w-full" />
        <div className="mt-6"></div>
        <Button uppercase className="w-full">
          Apply Coupon
        </Button>
      </div>
      <CartItemTotal className="mt-10" subtotal={cartState.totalPrice} />
    </section>
  );
};
