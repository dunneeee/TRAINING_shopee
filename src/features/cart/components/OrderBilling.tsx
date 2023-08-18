import { CartTypes } from '@/types';
import { moneyUtils } from '@/utils';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { PaymentMethod } from '.';
import { Icons } from '@/constants';
import { Button } from '@/components/Elements';

interface OrderItemProps {
  className?: string;
  header?: boolean;
  label?: string;
  children?: React.ReactNode;
  line?: boolean;
}

const OrderItem = ({
  className,
  header = false,
  line = false,
  label = '',
  children,
}: OrderItemProps) => {
  return (
    <>
      <li className={clsx('flex items-center justify-between', className)}>
        <p
          className={clsx(
            'font-body-small',
            header ? 'text-black' : 'text-darkGray'
          )}
        >
          {label}
        </p>
        <div
          className={clsx(
            'font-body-small',
            header ? 'text-black' : 'text-darkGray'
          )}
        >
          {children}
        </div>
      </li>
      {line && <li className="line my-4 bg-gray"></li>}
    </>
  );
};

interface OrderBillingProps {
  className?: string;
  items: CartTypes.Item[];
  subtotal?: number;
  shipping?: number;
  onPlaceOrder?: () => void;
}

interface CurrentItem {
  id: string;
  totalPrice: number;
  name: string;
}

export const OrderBilling = ({
  className,
  items,
  shipping = 0,
  subtotal = 0,
  onPlaceOrder,
}: OrderBillingProps) => {
  const [currentItem, setCurrentItem] = useState<CurrentItem[] | null>(null);

  useEffect(() => {
    const currentItems = items.map((item) => ({
      id: item.id,
      totalPrice: item.price * item.quantity,
      name: item.name,
    }));
    setCurrentItem(currentItems);
  }, [items]);

  return (
    <>
      <h5>Your Order</h5>
      <ul className={clsx('mt-7 rounded bg-lightGray p-4', className)}>
        <OrderItem header label="PRODUCT" line>
          TOTAL
        </OrderItem>
        {currentItem &&
          currentItem.map((item, index) => (
            <OrderItem
              key={item.id}
              className={clsx({
                'mb-11': index !== currentItem.length - 1,
              })}
              line={index === currentItem.length - 1}
              label={item.name}
            >
              {moneyUtils.formatUSD(item.totalPrice)}
            </OrderItem>
          ))}
        <OrderItem label="SUBTOTAL" line header>
          <span className="text-darkGray">
            {moneyUtils.formatUSD(subtotal)}
          </span>
        </OrderItem>
        <OrderItem label="SHIPPING" line header>
          <span className="text-darkGray">
            {shipping === 0 ? 'Free shipping' : moneyUtils.formatUSD(shipping)}
          </span>
        </OrderItem>
        <OrderItem label="TOTAL" line header>
          {moneyUtils.formatUSD(subtotal + shipping)}
        </OrderItem>
        <li className="mt-10">
          <PaymentMethod
            paymentOptions={[
              {
                label: 'Direct bank transfer',
                value: 'direct-bank-transfer',
                description:
                  'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account',
              },
              {
                label: 'Check payments',
                value: 'check-payments',
              },
              {
                label: 'Cash on delivery',
                value: 'cash-on-delivery',
              },
              {
                label: (
                  <span className="flex">
                    PayPal <Icons.PayPal className="ml-2" />
                  </span>
                ),
                value: 'paypal',
              },
            ]}
          />
        </li>
        <li>
          <Button
            uppercase
            className="w-full"
            onClick={onPlaceOrder}
            type="submit"
          >
            Place Order
          </Button>
        </li>
      </ul>
    </>
  );
};
