import { AuthTypes } from '@/types';
import { AuthAction, AuthActionTypes } from '..';

export interface AuthState {
  users: AuthTypes.User[];
  login: {
    user: AuthTypes.User | null;
    error: string | null;
  };
  register: {
    error: string | null;
    success: boolean;
  };
}

export const initialAuthState: AuthState = {
  users: [
    {
      id: 1,
      email: 'dunneee@gmail.com',
      name: 'duneee',
      password: '123123123',
      role: 'admin',
      firstName: 'Dung',
      lastName: 'Le The',
    },
  ],
  login: {
    user: null,
    error: null,
  },
  register: {
    error: null,
    success: false,
  },
};

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      const payload = action.payload;
      const user = state.users.find((u) => u.email === payload.email) || null;
      if (!user)
        return {
          ...state,
          login: {
            user: null,
            error: 'User not found!',
          },
        };
      if (user.password !== payload.password)
        return {
          ...state,
          login: {
            user: null,
            error: 'Password is incorrect!',
          },
        };
      return {
        ...state,
        login: {
          user,
          error: null,
        },
      };
    }
    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        login: {
          user: null,
          error: null,
        },
      };
    }
    case AuthActionTypes.REGISTER: {
      const { email, lastName, firstName, password } = action.payload;
      const user = state.users.find((u) => u.email === email) || null;
      if (user)
        return {
          ...state,
          register: { error: 'User with this email is exist!', success: false },
        };
      const newUser = {
        id: state.users.length + 1,
        email,
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        password,
        role: 'user',
      };

      return {
        ...state,
        users: [...state.users, newUser],
        register: {
          error: null,
          success: true,
        },
      };
    }
    case AuthActionTypes.RESET_ERROR: {
      return {
        ...state,
        login: {
          ...state.login,
          error: null,
        },
        register: {
          ...state.register,
          error: null,
          success: false,
        },
      };
    }
    default:
      return state;
  }
};
