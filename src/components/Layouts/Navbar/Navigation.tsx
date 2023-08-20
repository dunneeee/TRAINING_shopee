import { NavigationItem } from './NavigationItem';
import clsx from 'clsx';

const navigationItems = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/shop',
    label: 'Shop',
  },
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/blog',
    label: 'Blog',
  },
  {
    to: '/help',
    label: 'Help',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
  {
    to: '/search',
    label: 'Search',
  },
];

interface NavigationProps {
  closeNavbar?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Navigation = ({
  className,
  closeNavbar,
  children,
}: NavigationProps) => {
  return (
    <ul className={clsx(className)}>
      {navigationItems.map((item) => (
        <NavigationItem key={item.to} to={item.to} onClick={closeNavbar}>
          {item.label}
        </NavigationItem>
      ))}
      {children}
    </ul>
  );
};
