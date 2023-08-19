import { ValidateRules } from '@/hooks';
import { validationUtils } from '@/utils';

export interface BillingAddressFields {
  firstName: string;
  company: string;
  country: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  email: string;
  orderNotes: string;
}

export const billingAddressRules: ValidateRules<BillingAddressFields> = [
  {
    field: 'firstName',
    validate: validationUtils.validateName,
  },
  {
    field: 'company',
    validate: () => null,
  },
  {
    field: 'country',
    validate: validationUtils.validateIsRequire,
  },
  {
    field: 'address',
    validate: validationUtils.validateIsRequire,
  },
  {
    field: 'postalCode',
    validate: validationUtils.validateIsRequire,
  },
  {
    field: 'city',
    validate: validationUtils.validateIsRequire,
  },
  {
    field: 'phone',
    validate: validationUtils.validateNumberPhone,
  },
  {
    field: 'email',
    validate: validationUtils.validateEmail,
  },
  {
    field: 'orderNotes',
    validate: () => null,
  },
];
