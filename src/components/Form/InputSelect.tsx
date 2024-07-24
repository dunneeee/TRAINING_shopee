import clsx from 'clsx';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { forwardRef } from 'react';

const SHAPES = {
  default: 'border-b',
  square: 'border',
};

interface Option {
  label: React.ReactNode;
  value?: string | number | string[];
}

type InputSelectProps = FieldWrapperPassThroughProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
    options: Option[];
    shape?: keyof typeof SHAPES;
  };

export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
  (
    {
      label,
      error,
      className,
      options,
      shape = 'default',
      ...props
    }: InputSelectProps,
    ref
  ) => {
    return (
      <FieldWrapper label={label} error={error}>
        <select
          ref={ref}
          className={clsx(
            'rounded border-gray bg-transparent py-2 outline-none',
            SHAPES[shape],
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
