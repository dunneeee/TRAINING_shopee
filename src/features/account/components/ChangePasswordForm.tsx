import { InputField } from '@/components/Form';
import clsx from 'clsx';

interface ChangePasswordFormProps {
  className?: string;
}

export const ChangePasswordForm = ({ className }: ChangePasswordFormProps) => {
  return (
    <form className={clsx(className)}>
      <ul>
        <li className="mb-12">
          <InputField
            placeholder="Current password (leave blank to leave unchanged)"
            className="w-full"
          />
        </li>
        <li className="mb-12">
          <InputField
            placeholder="New password (leave blank to leave unchanged)"
            className="w-full"
          />
        </li>
        <li className="mb-12">
          <InputField placeholder="Confirm new password" className="w-full" />
        </li>
      </ul>
    </form>
  );
};
