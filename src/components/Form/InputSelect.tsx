import clsx from 'clsx';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { forwardRef } from 'react';

interface Option {
  label: React.ReactNode;
  value: string | number | string[];
}

type InputSelectProps = FieldWrapperPassThroughProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
    options: Option[];
  };

export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
  ({ label, error, className, options, ...props }: InputSelectProps, ref) => {
    return (
      <FieldWrapper label={label} error={error}>
        <select
          ref={ref}
          className={clsx(
            'border-b border-b-gray py-2 outline-none',
            className
          )}
          {...props}
        >
          {options.map((op) => (
            <option key={op.label?.toString()} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </FieldWrapper>
    );
  }
);
