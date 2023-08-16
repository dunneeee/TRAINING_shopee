import { InputField, InputSelect } from '@/components/Form';
import clsx from 'clsx';

interface BillingFormProps {
  className?: string;
}

export const BillingForm = ({ className }: BillingFormProps) => {
  return (
    <form className={clsx(className)}>
      <ul className="mt-6">
        <li className="mb-6">
          <InputField placeholder="First name*" className="w-full" />
        </li>
        <li className="mb-6">
          <InputField placeholder="Company name" className="w-full" />
        </li>
        <li className="mb-6">
          <InputSelect
            className="w-full"
            options={[
              {
                label: 'Country',
              },
            ]}
          />
        </li>
        <li className="mb-6">
          <InputField placeholder="Street address*" className="w-full" />
        </li>
        <li className="mb-6">
          <InputField placeholder="Postcode / ZIP*" className="w-full" />
        </li>
        <li className="mb-6">
          <InputField placeholder="Town / City*" className="w-full" />
        </li>
        <li className="mb-6">
          <InputField placeholder="Phone*" className="w-full" />
        </li>
        <li className="mb-6">
          <InputField placeholder="Email address*" className="w-full" />
        </li>
        <li>
          <InputField placeholder="Order notes" className="w-full" />
        </li>
      </ul>
    </form>
  );
};
