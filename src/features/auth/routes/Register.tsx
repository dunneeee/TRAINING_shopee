import { useAuth } from '@/hooks';
import { AuthHeader, RegisterForm } from '../components';
import { RegisterFormSubmitData } from '../types';
import { authResetError, register } from '@/redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const Register = () => {
  const { authDispatch, registerState } = useAuth();
  const handleRegister = (data: RegisterFormSubmitData) =>
    authDispatch(register(data));
  useEffect(() => () => authDispatch(authResetError()), [authDispatch]);
  if (registerState.success) return <Navigate to="/account/login" />;

  return (
    <section className="wrapper">
      <AuthHeader />
      <RegisterForm onSubmit={handleRegister} error={registerState.error} />
    </section>
  );
};

export default Register;
