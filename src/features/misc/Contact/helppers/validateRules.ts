import { ValidateRules } from '@/hooks';
import { validationUtils } from '@/utils';

export interface ContactFields {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const contactValidateRules: ValidateRules<ContactFields> = [
  {
    field: 'firstName',
    validate: validationUtils.validateName,
  },
  {
    field: 'lastName',
    validate: validationUtils.validateName,
  },
  {
    field: 'email',
    validate: validationUtils.validateEmail,
  },
  {
    field: 'subject',
    validate: validationUtils.validateIsRequire,
  },
  {
    field: 'message',
    validate: () => null,
  },
];
