import { AuthTypes } from '@/types';

export type LoginFormSubmitData = AuthTypes.UserLogin & {
  remember: boolean;
};

export type RegisterFormSubmitData = AuthTypes.UserRegister & {
  agree: boolean;
};
