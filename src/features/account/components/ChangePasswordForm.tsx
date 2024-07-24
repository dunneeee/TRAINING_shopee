import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';
import { useFormValidator } from '@/hooks';
import clsx from 'clsx';
import { passwordChangeRules } from '../helppers';
import { ChangePasswordFormData } from '../types';
import { Form } from '@/components/Form';

interface ChangePasswordFormProps {
  className?: string;
  onSubmit?: (data: ChangePasswordFormData) => void;
  error?: string | null;
}

export const ChangePasswordForm = ({
  className,
  onSubmit,
  error,
}: ChangePasswordFormProps) => {
  const { getInputProps, getFormValidationResult } =
    useFormValidator(passwordChangeRules);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, fields } = getFormValidationResult();
    if (isValid) {
      onSubmit?.(fields as ChangePasswordFormData);
    }
  };
  return (
    <Form className={clsx(className)} onSubmit={handleSubmit} error={error}>
      <ul>
        <li className="mb-12">
          <InputField
            placeholder="Current password (leave blank to leave unchanged)"
            className="w-full"
            type="password"
            {...getInputProps('currentPassword')}
          />
        </li>
        <li className="mb-12">
          <InputField
            type="password"
            placeholder="New password (leave blank to leave unchanged)"
            className="w-full"
            {...getInputProps('newPassword')}
          />
        </li>
        <li className="mb-10">
          <InputField
            type="password"
            placeholder="Confirm new password"
            className="w-full"
            {...getInputProps('confirmNewPassword')}
          />
        </li>
        <li className="mb-12">
          <Button uppercase className="w-full" type="submit">
            Change Password
          </Button>
        </li>
      </ul>
    </Form>
  );
};
