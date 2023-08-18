import { useAuth } from '@/hooks';
import { AuthHeader, LoginForm } from '../components';
import { LoginFormSubmitData } from '../types';
import { authResetError, login } from '@/redux';
import { useEffect } from 'react';
import { Link } from '@/components/Elements';

const Login = () => {
  const { authDispatch, loginState, isAuthenticated } = useAuth();
  const handleLogin = (data: LoginFormSubmitData) => authDispatch(login(data));

  useEffect(() => () => authDispatch(authResetError()), [authDispatch]);

  if (isAuthenticated) {
    return null;
  }

  return (
    <section className="wrapper">
      <AuthHeader />
      <LoginForm onSubmit={handleLogin} error={loginState.error} />
      <Link to="/account/forgot-password" className="mt-4 block text-center">
        Have you forgotten your password?
      </Link>
    </section>
  );
};

export default Login;
