export interface LoginFormSubmitData {
  email: string;
  password: string;
  remember: boolean;
}

export interface RegisterFormSubmitData {
  email: string;
  password: string;
  name: string;
  agree: boolean;
}
