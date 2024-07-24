import { InputField, InputSelect } from '@/components/Form';
import { useAuth, useFormValidator } from '@/hooks';
import clsx from 'clsx';
import { BillingFields, validateBillingRules } from '../helppers';
import { useEffect } from 'react';

export type FormBillingSubmitData = BillingFields;

interface BillingDetailsFormProps {
  className?: string;
  onSubmit?: (data: FormBillingSubmitData) => void;
  children?: React.ReactNode;
}

export const BillingDetailsForm = ({
  className,
  onSubmit,
  children,
}: BillingDetailsFormProps) => {
  const {
    getFieldProps,
    getSetFieldFunc,
    errors,
    getFormValidationResult,
    setFieldValues,
    getInputProps,
  } = useFormValidator(validateBillingRules);

  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, fields } = getFormValidationResult();
    if (isValid && onSubmit) {
      onSubmit(fields as FormBillingSubmitData);
    }
  };

  useEffect(() => {
    if (user) {
      setFieldValues({
        firstName: user.firstName,
        email: user.email,
      });
    }
  }, [user, setFieldValues]);

  return (
    <form
      className={clsx(className, 'overflow-hidden')}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap md:-mx-2">
        <ul className="mt-6 w-full md:mt-0 md:w-1/2 md:max-w-lg md:px-2">
          <h5>Billing Details</h5>
          <li className="mb-6">
            <InputField
              placeholder="First name*"
              className="w-full"
              {...getInputProps('firstName')}
            />
          </li>
          <li className="mb-6">
            <InputField
              placeholder="Company name"
              className="w-full"
              {...getInputProps('companyName')}
            />
          </li>
          <li className="mb-6">
            <InputSelect
              value={getFieldProps('country').value}
              onChange={(e) => getSetFieldFunc('country')(e.target.value)}
              className="w-full"
              error={errors.country}
              options={[
                {
                  label: 'Country',
                  value: '',
                },
                {
                  label: 'Da Nang',
                  value: 'dn',
                },
              ]}
            />
          </li>
          <li className="mb-6">
            <InputField
              placeholder="Street address*"
              className="w-full"
              {...getInputProps('address')}
            />
          </li>
          <li className="mb-6">
            <InputField
              placeholder="Postcode / ZIP*"
              className="w-full"
              {...getInputProps('postcode')}
            />
          </li>
          <li className="mb-6">
            <InputField
              placeholder="Town / City*"
              className="w-full"
              {...getInputProps('city')}
            />
          </li>
          <li className="mb-6">
            <InputField
              placeholder="Phone*"
              className="w-full"
              {...getInputProps('phone')}
            />
          </li>
          <li className="mb-6">
            <InputField
              placeholder="Email address*"
              className="w-full"
              {...getInputProps('email')}
            />
          </li>
          <li className="mb-6">
            <label className="mb-3 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                {...getFieldProps('isCreateAccount')}
              />
              Create an account?
            </label>
            <label className="mb-3 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                {...getFieldProps('isShippingDifferent')}
              />
              Ship to a different address?
            </label>
          </li>
          <li>
            <InputField
              placeholder="Order notes"
              className="w-full"
              {...getFieldProps('orderNotes')}
              error={errors.orderNotes}
            />
          </li>
        </ul>
        <div className="w-full md:ml-auto md:w-1/2 md:max-w-lg md:px-2">
          {children}
        </div>
      </div>
    </form>
  );
};
