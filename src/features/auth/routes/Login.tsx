import { useAuth } from '@/hooks';
import { AuthHeader, LoginForm } from '../components';
import { LoginFormSubmitData } from '../types';
import { authResetError, login } from '@/redux';
import { useEffect } from 'react';
import { Link } from '@/components/Elements';

const handleRememberUser = (data: LoginFormSubmitData) => {
  if (data.remember) {
    const userLogin = localStorage.getItem('userLogin');
    if (userLogin) {
      const user = JSON.parse(userLogin);
      if (user.email !== data.email || user.password !== data.password) {
        localStorage.setItem('userLogin', JSON.stringify(data));
      }
    } else {
      localStorage.setItem('userLogin', JSON.stringify(data));
    }
  } else {
    localStorage.removeItem('userLogin');
  }
};

const Login = () => {
  const { authDispatch, loginState, isAuthenticated } = useAuth();
  const handleLogin = (data: LoginFormSubmitData) => {
    handleRememberUser(data);
    authDispatch(login(data));
  };

  useEffect(() => () => authDispatch(authResetError()), [authDispatch]);

  if (isAuthenticated) {
    return null;
  }

  return (
    <section className="wrapper">
      <div className="mx-auto md:max-w-lg">
        <AuthHeader />
        <LoginForm onSubmit={handleLogin} error={loginState.error} />
        <Link
          to="/account/forgot-password"
          className="font-body-small md:font-body-medium mt-4 block text-center"
        >
          Have you forgotten your password?
        </Link>
      </div>
    </section>
  );
};

export default Login;
