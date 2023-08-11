import clsx from 'clsx';
import { Navigation } from './Navigation';
import { NavigationItem } from './NavigationItem';
import { Icons } from '@/constants';
import { useNavbar } from '@/hooks';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { closeNavbar } = useNavbar();
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
        <NavigationItem leftIcon={<Icons.Logout />} onClick={closeNavbar}>
          Logout
        </NavigationItem>
      </ul>
    </nav>
  );
};
