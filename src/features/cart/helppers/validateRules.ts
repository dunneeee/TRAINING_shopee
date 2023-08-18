import { ValidateRules } from '@/hooks';
import { validationUtils } from '@/utils';

export interface BillingFields {
  firstName: string;
  companyName: string;
  country: string;
  address: string;
  postcode: string;
  city: string;
  phone: string;
  email: string;
  isCreateAccount: boolean;
  isShippingDifferent: boolean;
  orderNotes: string;
}

export const validateBillingRules: ValidateRules<BillingFields> = [
  {
    field: 'firstName',
    validate: (value) => validationUtils.validateName(value as string),
  },
  {
    field: 'companyName',
    validate: () => null,
  },
  {
    field: 'country',
    validate: (value) => validationUtils.validateIsRequire(value as string),
  },
  {
    field: 'address',
    validate: (value) => validationUtils.validateIsRequire(value as string),
  },
  {
    field: 'postcode',
    validate: (value) => validationUtils.validateIsRequire(value as string),
  },
  {
    field: 'city',
    validate: (value) => validationUtils.validateIsRequire(value as string),
  },
  {
    field: 'phone',
    validate: (value) => validationUtils.validateNumberPhone(value as string),
  },
  {
    field: 'email',
    validate: (value) => validationUtils.validateEmail(value as string),
  },
  {
    field: 'isCreateAccount',
    validate: () => null,
    defaultValue: false,
  },
  {
    field: 'isShippingDifferent',
    validate: () => null,
    defaultValue: false,
  },
  {
    field: 'orderNotes',
    validate: () => null,
  },
];
