import { forwardRef } from 'react';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import clsx from 'clsx';

type TextareaFieldProps = FieldWrapperPassThroughProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaField = forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(({ label, error, className, ...props }, ref) => {
  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        ref={ref}
        className={clsx('border-b border-b-gray py-2 outline-none', className)}
        {...props}
      />
    </FieldWrapper>
  );
});
