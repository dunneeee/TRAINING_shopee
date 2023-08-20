import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export interface NavigationItemItemProps {
  className?: string;
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
}

export const NavigationItem = ({
  className,
  to,
  children,
  leftIcon,
  onClick,
}: NavigationItemItemProps) => {
  const link = to ? to : '#';
  const activeClasses =
    'relative after:bg-black after:w-full after:absolute after:h-px after:bottom-0 after:left-0 z-[1]';
  const currentClasses = 'py-3 cursor-pointer';
  let element = null;
  if (to)
    element = (
      <NavLink
        onClick={onClick}
        to={link}
        className={({ isActive }) => {
          return clsx(currentClasses, isActive && activeClasses, className);
        }}
      >
        <h3 className="md:font-body-medium inline-block">{children}</h3>
      </NavLink>
    );
  else
    element = (
      <span className={currentClasses} onClick={onClick}>
        <h3 className="md:font-body-medium inline-block">{children}</h3>
      </span>
    );

  return (
    <li className="flex items-center">
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      {element}
    </li>
  );
};
