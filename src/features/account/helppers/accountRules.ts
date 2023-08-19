import { ValidateRules } from '@/hooks';
import { validationUtils } from '@/utils';

export interface AccountDetailFields {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
}

export interface PasswordChangeFields {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const accountDetailRules: ValidateRules<AccountDetailFields> = [
  {
    field: 'firstName',
    validate: validationUtils.validateName,
  },
  {
    field: 'lastName',
    validate: validationUtils.validateName,
  },
  {
    field: 'displayName',
    validate: validationUtils.validateName,
  },
  {
    field: 'email',
    validate: validationUtils.validateEmail,
  },
];

export const passwordChangeRules: ValidateRules<PasswordChangeFields> = [
  {
    field: 'currentPassword',
    validate: validationUtils.validatePassword,
  },
  {
    field: 'newPassword',
    validate: validationUtils.validatePassword,
  },
  {
    field: 'confirmNewPassword',
    validate: (value, fields) =>
      validationUtils.validateConfirmPassword(value, fields.newPassword),
  },
];
