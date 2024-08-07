import { Message } from '@/components/Elements';
import { useOrders } from '@/hooks/useOrders';
import { Fragment } from 'react';
import { OrdersBilling } from '../components';

const Downloads = () => {
  const { orders } = useOrders();
  return (
    <section className="wrapper">
      {orders.length === 0 && (
        <Message
          message="No order has been made yet."
          link={{
            to: '/shop',
            text: 'BROWSE PRODUCT',
          }}
        ></Message>
      )}
      <ul className="">
        {orders.length > 0 &&
          orders.map((order, index) => (
            <Fragment key={order.id}>
              <OrdersBilling order={order} allowDownload />
              {index !== orders.length - 1 && (
                <li className="line my-10 bg-gray"></li>
              )}
            </Fragment>
          ))}
      </ul>
    </section>
  );
};

export default Downloads;
