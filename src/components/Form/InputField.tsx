import clsx from 'clsx';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Icons } from '@/constants';
import { forwardRef, useRef } from 'react';

type InputFieldProps = FieldWrapperPassThroughProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    setValue?: (value: string) => void;
  };

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, value, setValue, onChange, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handlerRef = (input: HTMLInputElement) => {
      inputRef.current = input;
      if (ref) {
        if (typeof ref === 'function') {
          ref(input);
        } else {
          ref.current = input;
        }
      }
    };

    const handleClearInput = () => {
      setValue && setValue('');
      inputRef.current && inputRef.current.focus();
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue && setValue(e.target.value);
      onChange && onChange(e);
    };

    return (
      <FieldWrapper label={label} error={error}>
        <div className={clsx('relative inline-block', className)}>
          <input
            className="w-full border-b border-b-gray bg-transparent py-2 pr-5"
            ref={handlerRef}
            onChange={handleOnChange}
            value={value}
            {...props}
          />
          {value && (
            <Icons.InputClose
              className="absolute right-0 top-1/2 mx-1 -translate-y-1/2 cursor-pointer"
              onClick={handleClearInput}
            />
          )}
        </div>
      </FieldWrapper>
    );
  }
);
