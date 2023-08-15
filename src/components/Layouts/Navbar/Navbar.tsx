import clsx from 'clsx';
import { Navigation } from './Navigation';
import { NavigationItem } from './NavigationItem';
import { Icons } from '@/constants';
import { useAuth, useNavbar } from '@/hooks';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { closeNavbar } = useNavbar();
  const { isAuthenticated } = useAuth();
  return (
    <nav className={clsx('', className)}>
      <Navigation closeNavbar={closeNavbar} />
      <div className="line mb-6 bg-lightGray"></div>
      <ul className="">
        <NavigationItem
          to="/account"
          leftIcon={<Icons.User />}
          onClick={closeNavbar}
        >
          My account
        </NavigationItem>
        {isAuthenticated && (
          <NavigationItem leftIcon={<Icons.Logout />} onClick={closeNavbar}>
            Logout
          </NavigationItem>
        )}
      </ul>
    </nav>
  );
};
