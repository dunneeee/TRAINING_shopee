import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { useFormValidator } from '@/hooks';
import clsx from 'clsx';
import { validateRegisterRules } from '../helppers';
import { RegisterFormSubmitData } from '../types';

interface RegisterFormProps {
  onSubmit?: (e: RegisterFormSubmitData) => void;
  error?: string | null;
  className?: string;
}

const RegisterForm = ({ onSubmit, error, className }: RegisterFormProps) => {
  const {
    getFieldProps,
    errors: fieldErrors,
    getFormValidationResult,
    getSetFieldFunc,
  } = useFormValidator(validateRegisterRules);

  const hasErrorMarginClasses = error ? 'mt-3' : 'mt-20';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, fields } = getFormValidationResult();
    isValid &&
      onSubmit &&
      onSubmit({
        email: fields.email,
        firstName: fields.firstName,
        lastName: fields.lastName,
        password: fields.password,
        agree: true,
      });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className={clsx(className, 'mt-3')}
      error={error}
    >
      <ul className={hasErrorMarginClasses}>
        <li className="mb-11">
          <InputField
            className="w-full"
            placeholder="First Name"
            {...getFieldProps('firstName')}
            error={fieldErrors.firstName}
            setValue={getSetFieldFunc('firstName')}
          />
        </li>
        <li className="mb-11">
          <InputField
            className="w-full"
            placeholder="Last Name"
            {...getFieldProps('lastName')}
            error={fieldErrors.lastName}
            setValue={getSetFieldFunc('lastName')}
          />
        </li>
        <li className="mb-11">
          <InputField
            className="w-full"
            placeholder="Email"
            {...getFieldProps('email')}
            error={fieldErrors.email}
            setValue={getSetFieldFunc('email')}
          />
        </li>
        <li
          className="
          mb-11
        "
        >
          <InputField
            className="w-full"
            placeholder="Password"
            type="password"
            {...getFieldProps('password')}
            error={fieldErrors.password}
            setValue={getSetFieldFunc('password')}
          />
        </li>
        <li className="mb-11">
          <InputField
            className="w-full"
            placeholder="Confirm Password"
            type="password"
            {...getFieldProps('confirmPassword')}
            error={fieldErrors.confirmPassword}
            setValue={getSetFieldFunc('confirmPassword')}
          />
        </li>
        <li className="">
          <Button uppercase className="w-full" type="submit">
            Sign In
          </Button>
        </li>
      </ul>
    </Form>
  );
};

export default RegisterForm;
