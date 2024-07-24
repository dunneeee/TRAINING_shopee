import { ValidateRules } from '@/hooks';
import { validationUtils } from '@/utils';

export interface LoginFields {
  email: string;
  password: string;
  remeberMe: boolean;
}

export const validateLoginRules: ValidateRules<LoginFields> = [
  {
    field: 'email',
    validate: (value) => validationUtils.validateEmail(value as string),
  },
  {
    field: 'password',
    validate: (value) => validationUtils.validatePassword(value as string),
  },
  {
    field: 'remeberMe',
    validate: () => null,
    defaultValue: false,
  },
];

export interface RegisterFields {
  confirmPassword: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const validateRegisterRules: ValidateRules<RegisterFields> = [
  {
    field: 'email',
    validate: validationUtils.validateEmail,
  },
  {
    field: 'password',
    validate: validationUtils.validatePassword,
  },
  {
    field: 'confirmPassword',
    validate: (value, fields) =>
      validationUtils.validateConfirmPassword(value, fields.password),
  },
  {
    field: 'firstName',
    validate: validationUtils.validateName,
  },
  {
    field: 'lastName',
    validate: validationUtils.validateName,
  },
];
