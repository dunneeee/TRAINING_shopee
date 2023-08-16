import { Button, Link } from '@/components/Elements';
import { InputField } from '@/components/Form';

interface AuthFormProps {
  type?: 'login' | 'register';
}

export const AuthForm = ({ type = 'login' }: AuthFormProps) => {
  return (
    <form className="">
      <ul>
        <li className="mt-11">
          <InputField className="w-full" placeholder="Email" />
        </li>
        <li className="mt-11">
          <InputField className="w-full" placeholder="Password" />
        </li>
        {type === 'register' && (
          <li className="mt-11">
            <InputField className="w-full" placeholder="Confirm Password" />
          </li>
        )}
        <li className="mt-6">
          <label
            htmlFor="auth-remember-me"
            className="flex cursor-pointer items-center"
          >
            <input
              type="checkbox"
              name=""
              id="auth-remember-me"
              className="h-3 w-3"
            />
            <span className="ml-1">
              {type === 'login'
                ? 'Remember me'
                : 'I agree to the terms and conditions'}
            </span>
          </label>
        </li>
        <li className="mt-3">
          <Button className="w-full">
            {type === 'login' ? 'Sign In' : 'Register'}
          </Button>
        </li>
        {type === 'login' && (
          <li className="mt-4">
            <Link
              to="forgot-password"
              className="font-body-small block w-full text-center"
            >
              Have you forgotten your password?
            </Link>
          </li>
        )}
      </ul>
    </form>
  );
};
