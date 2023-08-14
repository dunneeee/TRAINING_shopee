import { AuthTypes } from '@/types';

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTER = 'REGISTER',
}

export type AuthAction =
  | { type: AuthActionTypes.LOGIN; payload: AuthTypes.UserLogin }
  | { type: AuthActionTypes.LOGOUT }
  | { type: AuthActionTypes.REGISTER; payload: AuthTypes.UserRegister };

export const login = (user: AuthTypes.UserLogin): AuthAction => {
  return {
    type: AuthActionTypes.LOGIN,
    payload: user,
  };
};

export const logout = (): AuthAction => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

export const register = (user: AuthTypes.UserRegister): AuthAction => {
  return {
    type: AuthActionTypes.REGISTER,
    payload: user,
  };
};
