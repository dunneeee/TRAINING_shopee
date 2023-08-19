import { AccountDetailFields } from '../helppers';

export type AccountDetailFormData = AccountDetailFields;

export type ChangePasswordFormData = {
  currentPassword: string;
  newPassword: string;
};
