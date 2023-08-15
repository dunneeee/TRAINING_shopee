import clsx from 'clsx';
import { useState } from 'react';
import { AuthForm } from '../components';

interface ToggleAuthButtonProps {
  type?: 'login' | 'register';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ToggleAuthButton = ({
  type = 'login',
  onClick,
}: ToggleAuthButtonProps) => {
  const activeClasses = 'bg-white shadow';
  return (
    <div className="flex rounded bg-lightGray p-[2px]">
      <button
        onClick={onClick}
        name="login"
        className={clsx('h-7 flex-1 rounded p-1 transition', {
          [activeClasses]: type === 'login',
        })}
      >
        Sign In
      </button>
      <button
        onClick={onClick}
        name="register"
        className={clsx('h-7 flex-1 rounded p-1 transition', {
          [activeClasses]: type === 'register',
        })}
      >
        Register
      </button>
    </div>
  );
};

const Auth = () => {
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const handleToggleAuthType = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAuthType(e.currentTarget.name as 'login' | 'register');
  };
  return (
    <section className="wrapper">
      <h3 className="mb-6 text-center">My Account</h3>
      <ToggleAuthButton type={authType} onClick={handleToggleAuthType} />
      <AuthForm type={authType} />
    </section>
  );
};

export default Auth;
