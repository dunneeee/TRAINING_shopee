import { OrdersTypes } from '@/types';
import { dateUtils } from '@/utils';
import clsx from 'clsx';

interface OrdersBillingProps {
  className?: string;
  order: OrdersTypes.Billing;
  allowDownload?: boolean;
}

export const OrdersBilling = ({
  className,
  order,
  allowDownload = false,
}: OrdersBillingProps) => {
  const { date, id, status, total } = order;
  return (
    <div className={clsx(className)}>
      <ul className="font-body-small mb-6 flex justify-between">
        <li>ORDER NUMBER</li>
        <li className="text-darkGray">{id}</li>
      </ul>
      <ul className="font-body-small mb-6 flex justify-between">
        <li>DATE</li>
        <li className="text-darkGray">{dateUtils.formatDate(date)}</li>
      </ul>
      <ul className="font-body-small mb-6 flex justify-between">
        <li>STATUS</li>
        <li className="text-darkGray">{status}</li>
      </ul>
      <ul className="font-body-small mb-6 flex justify-between">
        <li>TOTAL</li>
        <li className="text-darkGray">{total}</li>
      </ul>
      <ul className="font-body-small mb-6 flex justify-between">
        <li>ACTIONS</li>
        <li className="">
          <button className="font-body-small px-1 text-primary hover:text-black">
            View Order
          </button>
          {allowDownload && (
            <button className="font-body-small border-l border-darkGray px-1 text-primary hover:text-black">
              Download
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
