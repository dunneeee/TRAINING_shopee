import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';

const ForgotPassword = () => {
  return (
    <section className="wrapper">
      <div className="mx-auto md:max-w-lg">
        <div className="mb-16">
          <h3 className="mb-4 text-center">Lost Password</h3>
          <p className="font-body-small md:font-body-medium">
            If you've forgotten your password, enter your e-mail address and
            we'll send you an e-mail
          </p>
        </div>
        <form className="">
          <InputField className="mb-10 w-full" placeholder="Email" />
          <Button uppercase className="w-full">
            Reset Password
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
