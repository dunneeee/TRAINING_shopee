import { Message } from '@/components/Elements';

const Downloads = () => {
  return (
    <section className="wrapper">
      <Message
        message="No Download has been made yet."
        link={{
          to: '/shop',
          text: 'BROWSE PRODUCT',
        }}
      ></Message>
    </section>
  );
};

export default Downloads;
