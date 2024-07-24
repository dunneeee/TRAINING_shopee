import { Link } from '@/components/Elements';
import {
  BillingDetailsForm,
  FormBillingSubmitData,
  OrderBilling,
} from '../components';
import { useShoppingItem } from '../hooks';
import { useAuth, useScrollTop } from '@/hooks';

export const Checkout = () => {
  useScrollTop();
  const { shoppingItems, cartState } = useShoppingItem();
  const { isAuthenticated } = useAuth();
  const handleSubmit = (data: FormBillingSubmitData) => {
    console.log(data);
  };

  return (
    <section className="wrapper">
      <h5>Checkout</h5>
      <div className="mb-9 mt-6">
        {!isAuthenticated && (
          <p className="font-body-small md:font-body-medium">
            Returning customer?
            <Link to="/account/login">Click here to login</Link>
          </p>
        )}
        <p className="font-body-small md:font-body-medium">
          Have a coupon?
          <Link to="/shopping-cart"> Click here to enter your code</Link>
        </p>
      </div>
      <BillingDetailsForm className="mb-10" onSubmit={handleSubmit}>
        <OrderBilling
          items={shoppingItems}
          subtotal={cartState.totalPrice}
          className="mb-10"
        />
      </BillingDetailsForm>
    </section>
  );
};
