import { Button } from '@/components/Elements';
import { AccountDetailForm, ChangePasswordForm } from '../components';

const AccountDetail = () => {
  return (
    <section className="wrapper">
      <AccountDetailForm />
      <h5 className="mb-11">Password change</h5>
      <ChangePasswordForm />
      <Button uppercase className="w-full">
        SAVE CHANGES
      </Button>
    </section>
  );
};

export default AccountDetail;
