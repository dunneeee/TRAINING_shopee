import clsx from 'clsx';
import { Link } from '..';

interface MessageProps {
  className?: string;
  children?: React.ReactNode;
  message?: string;
  link?: {
    to: string;
    text: string;
  };
}

export const Message = ({
  className,
  children,
  message,
  link,
}: MessageProps) => {
  return (
    <div
      className={clsx(
        'rounded border-t-[3px] border-primary bg-lightGray p-4',
        className
      )}
    >
      {message && <p className="font-body-small text-black">{message}</p>}
      {children}
      {link && (
        <Link to={link.to} className="font-body-small mt-2 text-primary">
          {link.text}
        </Link>
      )}
    </div>
  );
};
