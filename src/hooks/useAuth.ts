import { AuthContext } from '@/contexts';
import { useContext } from 'react';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return {
    authState: context.authState,
    authDispatch: context.authDispatch,
    user: context.authState.login.user,
    loginState: context.authState.login,
    registerState: context.authState.register,
    isAuthenticated: !!context.authState.login.user,
  };
};

export default useAuth;
