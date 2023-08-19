import { useScrollTop } from '@/hooks';
import { ContactForm } from './components';

const Contact = () => {
  useScrollTop();
  return (
    <section className="wrapper">
      <h3 className="mb-16">Contact</h3>
      <ContactForm />
    </section>
  );
};

export default Contact;
