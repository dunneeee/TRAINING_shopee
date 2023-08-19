import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { useFormValidator } from '@/hooks';
import clsx from 'clsx';
import { validateLoginRules } from '../helppers';
import { LoginFormSubmitData } from '../types';
import { useEffect } from 'react';

interface LoginFormProps {
  onSubmit?: (data: LoginFormSubmitData) => void;
  error?: string | null;
  className?: string;
}

const LoginForm = ({ onSubmit, error, className }: LoginFormProps) => {
  const {
    getFieldProps,
    getSetFieldFunc,
    setFieldValues,
    errors: validateErrors,
    getFormValidationResult,
  } = useFormValidator(validateLoginRules);

  const hasErrorMarginClasses = error ? 'mt-3' : 'mt-20';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, fields } = getFormValidationResult();
    isValid &&
      onSubmit &&
      onSubmit({
        email: fields.email.trim(),
        password: fields.password,
        remember: fields.remeberMe,
      });
  };

  useEffect(() => {
    const userLogin = localStorage.getItem('userLogin');
    if (userLogin) {
      const { email, password } = JSON.parse(userLogin);
      setFieldValues({ email, password, remeberMe: true });
    }
  }, [setFieldValues]);

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
            placeholder="Email"
            {...getFieldProps('email')}
            setValue={getSetFieldFunc('email')}
            error={validateErrors.email}
          />
        </li>
        <li
          className="
          mb-6
        "
        >
          <InputField
            className="w-full"
            placeholder="Password"
            type="password"
            {...getFieldProps('password')}
            setValue={getSetFieldFunc('password')}
            error={validateErrors.password}
          />
        </li>
        <li className="mb-3">
          <label className="flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="mr-1 cursor-pointer"
              {...getFieldProps('remeberMe')}
            />
            <span>Remember me</span>
          </label>
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

export default LoginForm;
