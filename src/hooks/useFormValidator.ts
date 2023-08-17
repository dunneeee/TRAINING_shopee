import { useState, useEffect, useCallback } from 'react';

type ValidatorRules<T> = Record<keyof T, (value: T[keyof T]) => string | null>;

type Errors<T> = Record<keyof T, string | null>;

interface FormValidationResult<T> {
  isValid: boolean;
  errors: Errors<T>;
}

const useFormValidator = <T>(validatorRules: ValidatorRules<T>) => {
  const [fields, setFields] = useState<T>({} as T);
  const [errors, setErrors] = useState<Errors<T>>({} as Errors<T>);

  const handleChange = (field: keyof T, value: T[keyof T]) => {
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const validateForm = useCallback(() => {
    const newErrors: Errors<T> = {} as Errors<T>;

    for (const fieldName in fields) {
      const hasRule = !!validatorRules[fieldName];
      if (hasRule) {
        const value = fields[fieldName];
        const errorMessage = validatorRules[fieldName](value);
        newErrors[fieldName] = errorMessage;
      }
    }

    setErrors(newErrors);
  }, [fields, validatorRules]);

  useEffect(() => {
    validateForm();
  }, [fields, validateForm]);

  const getFieldProps = (fieldName: keyof T) => ({
    value: fields[fieldName] || '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleChange(fieldName, e.target.value as T[keyof T]),
  });

  const getFormValidationResult = (): FormValidationResult<T> => {
    const isValid = Object.values(errors).every((error) => !error);

    return { isValid, errors };
  };

  return {
    getFieldProps,
    getFormValidationResult,
  };
};

export default useFormValidator;
