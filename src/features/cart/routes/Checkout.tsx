import { Link } from '@/components/Elements';
import { BillingDetailsForm, OrderBilling } from '../components';
import { useShoppingItem } from '../hooks';
import { useScrollTop } from '@/hooks';

export const Checkout = () => {
  useScrollTop();
  const { shoppingItems, cartState } = useShoppingItem();

  return (
    <section className="wrapper">
      <h5>Checkout</h5>
      <div className="mb-9 mt-6">
        <p className="font-body-small">
          Returning customer? <Link to="/login">Click here to login</Link>
        </p>
        <p className="font-body-small">
          Have a coupon?
          <Link to="/shopping-cart"> Click here to enter your code</Link>
        </p>
      </div>
      <BillingDetailsForm className="mb-10" />
      <OrderBilling
        items={shoppingItems}
        subtotal={cartState.totalPrice}
        className="mb-10"
      />
    </section>
  );
};
