import clsx from 'clsx';
import {
  LinkProps as ReactLinkProps,
  Link as ReactLink,
} from 'react-router-dom';

const VARIANTS = {
  primary: 'text-black hover:text-black transition',
  secondary: 'text-darkGray hover:text-black transition',
};

const ISACTIVES = {
  primary:
    'relative after:bg-black after:w-full after:absolute after:h-px after:bottom-0 after:left-0',
  secondary: 'text-black',
};

export type LinkProps = Omit<ReactLinkProps, 'to'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variants?: keyof typeof VARIANTS;
    isActive?: boolean;
    to?: string;
  };

export const Link = ({
  className,
  children,
  variants = 'primary',
  isActive = false,
  to,
  href,
  ...props
}: LinkProps) => {
  const Comp = to ? ReactLink : 'a';
  const linkClasses = clsx(
    '',
    VARIANTS[variants],
    isActive && ISACTIVES[variants],
    className
  );
  return (
    <Comp className={linkClasses} to={to || '#'} href={href || '#'} {...props}>
      {children}
    </Comp>
  );
};
