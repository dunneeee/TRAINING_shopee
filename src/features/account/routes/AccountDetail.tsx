import { AccountDetailForm, ChangePasswordForm } from '../components';

const AccountDetail = () => {
  return (
    <section className="wrapper">
      <AccountDetailForm />
      <h5 className="mb-11">Password change</h5>
      <ChangePasswordForm />
    </section>
  );
};

export default AccountDetail;
