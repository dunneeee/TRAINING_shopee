import { ValidateRules } from '@/hooks';
import { validationUtils } from '@/utils';

export interface LoginFields {
  email: string;
  password: string;
}

export const validateLoginRules: ValidateRules<LoginFields> = [
  {
    field: 'email',
    validate: validationUtils.validateEmail,
  },
  {
    field: 'password',
    validate: validationUtils.validatePassword,
  },
];

export interface RegisterFields extends LoginFields {
  confirmPassword: string;
  firstName: string;
  lastName: string;
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
