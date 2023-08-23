import clsx from 'clsx';
import { forwardRef } from 'react';

const VARIANTS = {
  primary:
    'bg-black text-white transition hover:bg-white hover:border-black hover:text-black active:bg-white active:border-black active:text-black',
  inverse:
    'bg-white text-black transition hover:bg-black hover:border-white hover:text-white active:bg-black active:border-white active:text-white',
  outline:
    'text-black !border-black transition hover:bg-black hover:text-white active:bg-black active:text-white',
};

const SIZE = {
  sm: '',
  md: 'text-xs font-medium',
  lg: 'text-xl font-bold',
};

const SHAPE = {
  rounded: 'rounded',
  circle: 'rounded-full',
};

interface IconProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconProps & {
    variant?: keyof typeof VARIANTS;
    size?: keyof typeof SIZE;
    uppercase?: boolean;
    shape?: keyof typeof SHAPE;
    disabled?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      startIcon,
      endIcon,
      type = 'button',
      uppercase = false,
      shape = 'rounded',
      className,
      ...props
    },
    ref
  ) => {
    const buttonClasses = clsx(
      'p-2 border border-transparent',
      {
        uppercase: uppercase,
      },
      VARIANTS[variant],
      SIZE[size],
      SHAPE[shape],
      props.disabled && 'opacity-50',
      className
    );

    return (
      <button className={buttonClasses} ref={ref} type={type} {...props}>
        {startIcon && startIcon}
        <span className="mx-2">{props.children}</span>
        {endIcon && endIcon}
      </button>
    );
  }
);
