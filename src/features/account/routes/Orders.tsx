import { Message } from '@/components/Elements';

const Orders = () => {
  return (
    <section className="wrapper">
      <Message
        message="No order has been made yet."
        link={{
          to: '/shop',
          text: 'BROWSE PRODUCT',
        }}
      ></Message>
    </section>
  );
};

export default Orders;
