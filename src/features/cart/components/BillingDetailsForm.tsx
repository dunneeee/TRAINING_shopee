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
    <form className={clsx(className)} onSubmit={handleSubmit}>
      <h5>Billing Details</h5>
      <ul className="mt-6">
        <li className="mb-6">
          <InputField
            placeholder="First name*"
            className="w-full"
            {...getFieldProps('firstName')}
            setValue={getSetFieldFunc('firstName')}
            error={errors.firstName}
          />
        </li>
        <li className="mb-6">
          <InputField
            placeholder="Company name"
            className="w-full"
            error={errors.companyName}
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
            {...getFieldProps('address')}
            setValue={getSetFieldFunc('address')}
            error={errors.address}
          />
        </li>
        <li className="mb-6">
          <InputField
            placeholder="Postcode / ZIP*"
            className="w-full"
            {...getFieldProps('postcode')}
            setValue={getSetFieldFunc('postcode')}
            error={errors.postcode}
          />
        </li>
        <li className="mb-6">
          <InputField
            placeholder="Town / City*"
            className="w-full"
            {...getFieldProps('city')}
            setValue={getSetFieldFunc('city')}
            error={errors.city}
          />
        </li>
        <li className="mb-6">
          <InputField
            placeholder="Phone*"
            className="w-full"
            {...getFieldProps('phone')}
            setValue={getSetFieldFunc('phone')}
            error={errors.phone}
          />
        </li>
        <li className="mb-6">
          <InputField
            placeholder="Email address*"
            className="w-full"
            {...getFieldProps('email')}
            setValue={getSetFieldFunc('email')}
            error={errors.email}
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
      {children}
    </form>
  );
};
