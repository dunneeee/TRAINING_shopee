import clsx from 'clsx';

interface FieldWrapperProps {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: string;
}

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'children' | 'className'
>;

export const FieldWrapper = ({
  children,
  className,
  error,
  label,
}: FieldWrapperProps) => {
  return (
    <div className="">
      <label className={clsx('block', className)}>{children}</label>
      {label}
      {error && <div className="mt-1 text-xs text-error">{error}</div>}
    </div>
  );
};
