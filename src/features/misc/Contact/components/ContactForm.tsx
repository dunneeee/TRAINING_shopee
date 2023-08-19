import { Button } from '@/components/Elements';
import {
  Form,
  InputField,
  InputSelect,
  TextareaField,
} from '@/components/Form';
import { useAuth, useFormValidator } from '@/hooks';
import clsx from 'clsx';
import { contactValidateRules } from '../helppers';
import { TextareaHTMLAttributes, useEffect } from 'react';
import { ContactFormData } from '../types';

interface ContachtFormProps {
  className?: string;
  onSubmit?: (data: ContactFormData) => void;
}

export const ContactForm = ({ className, onSubmit }: ContachtFormProps) => {
  const { getInputProps, getFormValidationResult, setFieldValues } =
    useFormValidator(contactValidateRules);

  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fields, isValid } = getFormValidationResult();
    if (isValid) {
      onSubmit?.(fields as ContactFormData);
    }
  };

  useEffect(() => {
    if (user) {
      setFieldValues({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }
  }, [setFieldValues, user]);

  return (
    <Form className={clsx('', className)} onSubmit={handleSubmit}>
      <ul>
        <li className="mb-12">
          <InputField
            placeholder="First name"
            className="w-full"
            {...getInputProps('firstName')}
          />
        </li>
        <li className="mb-12">
          <InputField
            placeholder="Last name"
            className="w-full"
            {...getInputProps('lastName')}
          />
        </li>
        <li className="mb-12">
          <InputField
            placeholder="Email"
            className="w-full"
            {...getInputProps('email')}
          />
        </li>
        <li className="mb-12">
          <InputSelect
            value={getInputProps('subject').value}
            onChange={(e) => getInputProps('subject').setValue(e.target.value)}
            error={getInputProps('subject').error}
            className="w-full"
            options={[
              {
                label: 'Subject',
                value: '',
              },
              {
                label: 'Subject 1',
                value: 'subject1',
              },
            ]}
          />
        </li>
        <li className="mb-12">
          <TextareaField
            placeholder="Messages"
            className="w-full bg-transparent"
            value={getInputProps('message').value}
            onChange={
              getInputProps('message')
                .onChange as TextareaHTMLAttributes<HTMLTextAreaElement>['onChange']
            }
          />
        </li>
        <li className="mb-12">
          <Button uppercase className="w-full" type="submit">
            Send
          </Button>
        </li>
      </ul>
    </Form>
  );
};
