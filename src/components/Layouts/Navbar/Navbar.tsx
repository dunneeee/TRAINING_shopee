import clsx from 'clsx';
import { Navigation } from './Navigation';
import { NavigationItem } from './NavigationItem';
import { Icons } from '@/constants';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={clsx('', className)}>
      <Navigation />
      <div className="line mb-6 bg-lightGray"></div>
      <ul className="">
        <NavigationItem to="/account" leftIcon={<Icons.User />}>
          My account
        </NavigationItem>
        <NavigationItem leftIcon={<Icons.Logout />}>Logout</NavigationItem>
      </ul>
    </nav>
  );
};
