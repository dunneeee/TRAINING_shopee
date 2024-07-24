import { useScrollTop } from '@/hooks';
import { ContactForm } from './components';
import { HelpNavbarLayout } from '@/components/Layouts';

const Contact = () => {
  useScrollTop();
  return (
    <HelpNavbarLayout>
      <div className="mx-auto w-full max-w-xl">
        <h3 className="mb-16 w-full">Contact</h3>
        <ContactForm />
      </div>
    </HelpNavbarLayout>
  );
};

export default Contact;
