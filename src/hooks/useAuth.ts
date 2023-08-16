import { AuthContext } from '@/contexts';
import { useContext } from 'react';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return {
    ...context.authState,
    authState: context.authState,
    authDispatch: context.authDispatch,
  };
};

export default useAuth;
