import { ChangeEvent, useState } from 'react';

export interface FieldValidation<T> {
  field: keyof T;
  validate: (value: T[keyof T], fields: T) => string | null;
}

interface FormValidationResult<T> {
  fields: T;
  isValid: boolean;
}

export type ValidateRules<T> = FieldValidation<T>[];

export const useFormValidator = <T>(validateRules: ValidateRules<T>) => {
  const [fields, setFields] = useState({} as T);
  const [errors, setErrors] = useState({} as Record<keyof T, string | null>);
  const validateForm = () => {
    const newErrors = {} as Record<keyof T, string | null>;
    validateRules.forEach(({ field, validate }) => {
      const error = validate(fields[field], fields);
      newErrors[field] = error;
    });
    setErrors(newErrors);
  };

  const validateField = (fieldName: keyof T) => {
    const rule = validateRules.find((r) => r.field === fieldName);
    if (!rule) {
      return;
    }
    const error = rule.validate(fields[fieldName], fields);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleBlur = (fieldName: keyof T) => {
    const isFieldValue = !!fields[fieldName];
    if (isFieldValue) {
      validateField(fieldName);
    }
  };

  const handleFocus = (fieldName: keyof T) => {
    setErrors((prev) => ({ ...prev, [fieldName]: null }));
  };

  const handleChange = (filedName: keyof T, value: T[keyof T]) => {
    setFields((prev) => ({ ...prev, [filedName]: value }));
  };

  const getFormValidationResult = (): FormValidationResult<T> => {
    validateForm();
    return {
      fields,
      isValid: Object.values(errors).every((error) => !error),
    };
  };

  const getSetFieldFunc = (fieldName: keyof T) => {
    return (value: T[keyof T]) => handleChange(fieldName, value);
  };

  const getFieldProps = (fieldName: keyof T) => ({
    value: fields[fieldName] || '',
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      handleChange(fieldName, e.target.value as T[keyof T]),
    onBlur: () => handleBlur(fieldName),
    onFocus: () => handleFocus(fieldName),
  });

  return {
    getFormValidationResult,
    getSetFieldFunc,
    getFieldProps,
    handleBlur,
    handleFocus,
    errors,
  };
};
