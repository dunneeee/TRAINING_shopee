import { Button } from '@/components/Elements';
import { Form, InputField, InputSelect } from '@/components/Form';
import { useFormValidator } from '@/hooks';
import clsx from 'clsx';
import { billingAddressRules } from '../helppers';
import { BillingAddressFormData } from '../types';

interface BillingFormProps {
  className?: string;
  error?: string | null;
  onSubmit?: (data: BillingAddressFormData) => void;
}

export const BillingForm = ({
  className,
  error,
  onSubmit,
}: BillingFormProps) => {
  const {
    getInputProps,
    getFieldProps,
    getSetFieldFunc,
    getFormValidationResult,
    errors: billingFormErrors,
  } = useFormValidator(billingAddressRules);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, fields } = getFormValidationResult();
    if (isValid) {
      onSubmit?.(fields);
    }
  };

  return (
    <Form className={clsx(className)} onSubmit={handleSubmit} error={error}>
      <ul className="mt-6">
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
            {...getInputProps('company')}
          />
        </li>
        <li className="mb-6">
          <InputSelect
            value={getFieldProps('country').value}
            onChange={(e) => getSetFieldFunc('country')(e.target.value)}
            error={billingFormErrors.country}
            className="w-full"
            options={[
              {
                label: 'Country',
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
            {...getInputProps('postalCode')}
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
          <InputField
            placeholder="Order notes"
            className="w-full"
            {...getInputProps('orderNotes')}
          />
        </li>
        <li>
          <Button uppercase className="w-full" type="submit">
            Save Address
          </Button>
        </li>
      </ul>
    </Form>
  );
};
