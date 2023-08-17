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
      {orders.length > 0 &&
        orders.map((order, index) => (
          <Fragment key={order.id}>
            <OrdersBilling order={order} />
            {index !== orders.length - 1 && (
              <div className="line my-10 bg-gray"></div>
            )}
          </Fragment>
        ))}
    </section>
  );
};

export default Orders;
