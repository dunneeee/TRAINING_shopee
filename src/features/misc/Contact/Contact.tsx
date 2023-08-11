import { useScrollTop } from '@/hooks';
import { ContachtForm } from './components';

const Contact = () => {
  useScrollTop();
  return (
    <section className="wrapper">
      <h3 className="mb-16">Contact</h3>
      <ContachtForm />
    </section>
  );
};

export default Contact;
