export interface User {
  id: number | string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export type UserLogin = Pick<User, 'email' | 'password'>;

export type UserRegister = Pick<
  User,
  'firstName' | 'lastName' | 'email' | 'password'
>;
