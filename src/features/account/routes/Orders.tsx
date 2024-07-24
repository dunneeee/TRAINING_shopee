import { Message } from '@/components/Elements';
import { OrdersBilling } from '../components';
import { useOrders } from '@/hooks/useOrders';
import { Fragment } from 'react';

const Orders = () => {
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
              <OrdersBilling order={order} />
              {index !== orders.length - 1 && (
                <li className="line my-10 bg-gray"></li>
              )}
            </Fragment>
          ))}
      </ul>
    </section>
  );
};

export default Orders;
