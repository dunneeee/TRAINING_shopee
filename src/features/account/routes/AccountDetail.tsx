import { AccountDetailForm, ChangePasswordForm } from '../components';

const AccountDetail = () => {
  return (
    <section className="wrapper">
      <div className="md:mx-auto md:max-w-lg">
        <h5 className="mb-11">Account details</h5>
        <AccountDetailForm />
        <h5 className="mb-11">Password change</h5>
        <ChangePasswordForm />
      </div>
    </section>
  );
};

export default AccountDetail;
