import clsx from 'clsx';
import { forwardRef } from 'react';

interface InputRadioProps {
  label?: React.ReactNode;
  value?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(
  ({ checked = false, label, onChange, value, children }, ref) => {
    return (
      <div className="">
        <label
          className="font-body-small md:font-body-medium flex items-center text-black"
          id={value}
        >
          <div
            className={clsx(
              'relative mr-[10px] flex h-4 w-4 items-center',
              'after:absolute after:h-full after:w-full after:rounded-full after:border-2',
              checked &&
                'before:absolute before:h-full before:w-full before:scale-50 before:rounded-full before:bg-black'
            )}
          >
            <input
              id={value}
              className={clsx('h-full w-full opacity-0')}
              type="radio"
              ref={ref}
              value={value}
              checked={checked}
              onChange={onChange}
            />
          </div>
          {label}
        </label>
        {checked && children}
      </div>
    );
  }
);
