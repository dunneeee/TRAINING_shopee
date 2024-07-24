import clsx from 'clsx';
import { Navigation } from './Navigation';
import { NavigationItem } from './NavigationItem';
import { Icons } from '@/constants';
import { useAuth, useNavbar } from '@/hooks';
import { logout } from '@/redux';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { closeNavbar } = useNavbar();
  const { isAuthenticated, authDispatch } = useAuth();
  const handleLogout = () => {
    authDispatch(logout());
    closeNavbar();
  };
  return (
    <nav className={clsx('', className)}>
      <Navigation closeNavbar={closeNavbar} />
      <div className="line mb-6 bg-lightGray"></div>
      <ul className="">
        <NavigationItem
          to={isAuthenticated ? '/account' : '/account/login'}
          leftIcon={<Icons.User />}
          onClick={closeNavbar}
        >
          {isAuthenticated ? 'Account' : 'Login'}
        </NavigationItem>
        {isAuthenticated && (
          <NavigationItem leftIcon={<Icons.Logout />} onClick={handleLogout}>
            Logout
          </NavigationItem>
        )}
      </ul>
    </nav>
  );
};
