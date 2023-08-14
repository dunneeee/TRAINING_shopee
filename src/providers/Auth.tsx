import { AuthContext } from '@/contexts';
import { authReducer, initialAuthState } from '@/redux';
import { useReducer } from 'react';
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
