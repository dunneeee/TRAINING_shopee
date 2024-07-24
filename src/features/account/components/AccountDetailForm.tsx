import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { useAuth, useFormValidator } from '@/hooks';
import clsx from 'clsx';
import { accountDetailRules } from '../helppers';
import { AccountDetailFormData } from '../types';
import { useEffect } from 'react';

interface AccountDetailFormProps {
  className?: string;
  onSubmit?: (data: AccountDetailFormData) => void;
  error?: string | null;
}

export const AccountDetailForm = ({
  className,
  onSubmit,
  error,
}: AccountDetailFormProps) => {
  const { getInputProps, getFormValidationResult, setFieldValues } =
    useFormValidator(accountDetailRules);

  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, fields } = getFormValidationResult();
    if (isValid) {
      onSubmit?.(fields as AccountDetailFormData);
    }
  };

  useEffect(() => {
    if (user) {
      setFieldValues({
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: user.name,
        email: user.email,
      });
    }
  }, [user, setFieldValues]);

  return (
    <Form className={clsx(className)} onSubmit={handleSubmit} error={error}>
      <ul>
        <li className="mb-11">
          <InputField
            placeholder="First name*"
            className="w-full"
            {...getInputProps('firstName')}
          />
        </li>
        <li className="mb-11">
          <InputField
            placeholder="Last name*"
            className="w-full"
            {...getInputProps('lastName')}
          />
        </li>
        <li className="mb-11">
          <InputField
            placeholder="Display name*"
            className="w-full"
            {...getInputProps('displayName')}
          />
          <p className="font-body-small text-darkGray">
            This will be how your name will be displayed in the account section
            and in reviews.
          </p>
        </li>
        <li className="mb-10">
          <InputField
            placeholder="Email Address*"
            className="w-full"
            {...getInputProps('email')}
          />
        </li>
        <li className="mb-11">
          <Button uppercase type="submit" className="w-full">
            Save Change
          </Button>
        </li>
      </ul>
    </Form>
  );
};
