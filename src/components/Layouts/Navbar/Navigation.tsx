import { useNavbar } from '@/hook';
import { NavigationItem } from './NavigationItem';

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

export const Navigation = () => {
  const { closeNavbar } = useNavbar();
  return (
    <ul>
      {navigationItems.map((item) => (
        <NavigationItem key={item.to} to={item.to} onClick={closeNavbar}>
          {item.label}
        </NavigationItem>
      ))}
    </ul>
  );
};
