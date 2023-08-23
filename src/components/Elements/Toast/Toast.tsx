import { Icons } from '@/constants';
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
  error: {
    bg: 'bg-error',
    text: 'text-error',
    link: 'text-primary',
    after: 'after:bg-error',
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

const ICONS: Record<ToastType, string> = {
  error: 'X',
  success: '✓',
};

export const Toast = ({
  type = 'success',
  children,
  link,
  duration = 3,
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
          'md:px-2',
          styles.after
        )}
      >
        <div
          className={clsx(
            'flex h-3 w-3 items-center justify-center rounded-full  p-2 text-center',
            styles.bg
          )}
        >
          <p className="check text-[8px] font-bold text-white">{ICONS[type]}</p>
        </div>
        <div className={clsx('font-body-small px-1', styles.text)}>
          {children}
        </div>
        <div className="ml-auto flex">
          {link && (
            <Link
              to={link.to}
              className={clsx(
                'font-body-small md:font-body-medium block',
                styles.link
              )}
            >
              {link.label}
            </Link>
          )}
          <button className="px-2" onClick={remove}>
            <Icons.Close className="h-3 w-3 file:bg-darkGray" />
          </button>
        </div>
      </div>
    </div>
  );
};
