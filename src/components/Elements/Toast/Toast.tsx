import clsx from 'clsx';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const VARIANTS = {
  success: {
    bg: 'bg-primary',
    text: 'text-black',
    link: 'text-primary',
    after: 'after:bg-primary',
  },
};

export type ToastType = keyof typeof VARIANTS;

interface ToastProps {
  type?: keyof typeof VARIANTS;
  children: React.ReactNode;
  link?: {
    to: string;
    label: string;
  };
  duration?: number;
  remove: () => void;
  className?: string;
}

export const Toast = ({
  type = 'success',
  children,
  link,
  duration = 5,
  className,
  remove,
}: ToastProps) => {
  const styles = VARIANTS[type];
  useEffect(() => {
    const timer = setTimeout(() => {
      remove();
    }, duration * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [duration, remove]);
  return (
    <div className={clsx('w-full bg-lightGray', className)}>
      <div
        className={clsx(
          'wrapper relative flex py-4',
          'after:absolute after:left-0 after:top-0 after:h-[2px] after:w-full',
          styles.after
        )}
      >
        <div
          className={clsx(
            'flex h-3 w-3 items-center justify-center rounded-full  p-2 text-center',
            styles.bg
          )}
        >
          <p className="check text-[8px] font-bold text-white">✓</p>
        </div>
        <div className={clsx('font-body-small px-1', styles.text)}>
          {children}
        </div>
        {link && (
          <Link
            to={link.to}
            className={clsx('font-body-small ml-auto block', styles.link)}
          >
            {link.label}
          </Link>
        )}
      </div>
    </div>
  );
};
