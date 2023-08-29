import { useAuth, useToast } from '@/hooks';
import { AccountDetailForm, ChangePasswordForm } from '../components';
import { AccountDetailFormData, ChangePasswordFormData } from '../types';
import { authUpdateUser } from '@/redux';
import { Toast } from '@/components/Elements';

const AccountDetail = () => {
  const { authDispatch, user } = useAuth();
  const { hideToast, showToast, toast } = useToast();
  const handleAccDetailSubmit = (data: AccountDetailFormData) => {
    if (user) {
      authDispatch(authUpdateUser({ ...user, ...data }));
      showToast('success', 'Your account details have been updated.');
    }
  };

  const handlePasswordChangeSubmit = (data: ChangePasswordFormData) => {
    if (user) {
      if (data.currentPassword !== user.password) {
        showToast('error', 'Current password is incorrect.');
        return;
      }
      authDispatch(
        authUpdateUser({
          ...user,
          password: data.newPassword,
        })
      );
      showToast('success', 'Your password has been updated.');
    }
  };

  return (
    <section className="wrapper">
      {toast && (
        <Toast
          remove={hideToast}
          type={toast.type}
          className="md:wrapper fixed bottom-0 left-0 z-[99] md:bottom-auto md:left-1/2 md:top-2 md:-translate-x-1/2"
          link={toast.link}
        >
          {toast.message}
        </Toast>
      )}
      <div className="md:mx-auto md:max-w-lg">
        <h5 className="mb-11">Account details</h5>
        <AccountDetailForm onSubmit={handleAccDetailSubmit} />
        <h5 className="mb-11">Password change</h5>
        <ChangePasswordForm onSubmit={handlePasswordChangeSubmit} />
      </div>
    </section>
  );
};

export default AccountDetail;
