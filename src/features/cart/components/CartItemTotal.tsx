import { Button, Disclosure } from '@/components/Elements';
import { InputSelect } from '@/components/Form';
import { moneyUtils } from '@/utils';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface CartItemTotalProps {
  className?: string;
  subtotal?: number;
}

interface ItemProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const Item = ({ children, className, label }: ItemProps) => {
  return (
    <li className={clsx('flex', className)}>
      <div className="font-body-small w-1/3">{label}</div>
      <div className="font-body-small w-2/3 text-darkGray">{children}</div>
    </li>
  );
};

export const CartItemTotal = ({
  className,
  subtotal = 0,
}: CartItemTotalProps) => {
  return (
    <div className={clsx('rounded bg-lightGray p-4', className)}>
      <h5 className="mb-6">Cart totals</h5>
      <ul className="">
        <Item label="SUBTOTAL" className="mb-6">
          {moneyUtils.formatUSD(subtotal)}
        </Item>
        <Item label="SHIPPING">
          <p className="font-body-small">
            Shipping costs will be calculated once you have provided address.
          </p>
          <Disclosure title="Calculate Shipping" titleClasses="text-black">
            <div className="">
              <InputSelect
                className="mb-4 w-full"
                options={[
                  {
                    label: 'Select a country',
                  },
                ]}
              />
              <InputSelect
                className="mb-4 w-full"
                options={[
                  {
                    label: 'City',
                  },
                ]}
              />
              <InputSelect
                className="mb-4 w-full"
                options={[
                  {
                    label: 'Postcode / Zip',
                  },
                ]}
              />
              <Button variant="outline" uppercase className="w-full bg-white">
                Update Total
              </Button>
            </div>
          </Disclosure>
        </Item>
        <div className="line my-8 bg-darkGray"></div>
        <Item label="TOTAL">
          <p className="font-body-small text-end">
            {moneyUtils.formatUSD(subtotal)}
          </p>
        </Item>
      </ul>
      <Link to="checkout">
        <Button className="mt-4 w-full" uppercase>
          Proceed To Checkout
        </Button>
      </Link>
    </div>
  );
};
