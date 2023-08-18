import clsx from 'clsx';
import { Link } from '..';

const VARIANTS = {
  success: {
    border: 'border-green-500',
    text: 'text-green-500',
  },
  error: {
    border: 'border-error',
    text: 'text-error',
  },
  info: {
    border: 'border-primary',
    text: 'text-black',
  },
};

interface MessageProps {
  className?: string;
  children?: React.ReactNode;
  message?: string;
  link?: {
    to: string;
    text: string;
  };
  variant?: keyof typeof VARIANTS;
}

export const Message = ({
  className,
  children,
  message,
  link,
  variant = 'info',
}: MessageProps) => {
  return (
    <div
      className={clsx(
        'rounded border-t-[3px] bg-lightGray p-4',
        VARIANTS[variant].border,
        className
      )}
    >
      {message && (
        <p className={clsx('font-body-small', VARIANTS[variant].text)}>
          {message}
        </p>
      )}
      {children}
      {link && (
        <Link to={link.to} className="font-body-small mt-2 text-primary">
          {link.text}
        </Link>
      )}
    </div>
  );
};
