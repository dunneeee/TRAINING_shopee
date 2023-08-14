import { AuthTypes } from '@/types';
import { AuthAction, AuthActionTypes } from '..';

export interface AuthState {
  users: AuthTypes.User[];
  user: AuthTypes.User | null;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  users: [],
  user: null,
  isAuthenticated: false,
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      const payload = action.payload;
      const user =
        state.users.find(
          (u) => u.email === payload.email && u.password === payload.password
        ) || null;
      return {
        ...state,
        user,
        isAuthenticated: !!user,
      };
    }
    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    }
    case AuthActionTypes.REGISTER: {
      const payload = action.payload;
      const user = {
        ...payload,
        id: state.users.length + 1,
        role: 'user',
      };
      return {
        ...state,
        users: [...state.users, user],
      };
    }
    default:
      return state;
  }
};
