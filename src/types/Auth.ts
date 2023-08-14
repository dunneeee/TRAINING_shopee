export interface User {
  id: number | string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export type UserLogin = Pick<User, 'email' | 'password'>;

export type UserRegister = Pick<User, 'name' | 'email' | 'password'>;
