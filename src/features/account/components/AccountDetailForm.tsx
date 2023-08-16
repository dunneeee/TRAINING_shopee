import { InputField } from '@/components/Form';
import clsx from 'clsx';

interface AccountDetailFormProps {
  className?: string;
}

export const AccountDetailForm = ({ className }: AccountDetailFormProps) => {
  return (
    <form className={clsx(className)}>
      <ul>
        <li className="mb-11">
          <InputField placeholder="First name*" className="w-full" />
        </li>
        <li className="mb-11">
          <InputField placeholder="Last name*" className="w-full" />
        </li>
        <li className="mb-11">
          <InputField placeholder="Display name*" className="w-full" />
          <p className="font-body-small text-darkGray">
            This will be how your name will be displayed in the account section
            and in reviews.
          </p>
        </li>
        <li className="mb-11">
          <InputField placeholder="Email Address*" className="w-full" />
        </li>
      </ul>
    </form>
  );
};
