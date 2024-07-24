import { Logo } from '@/components/Elements';
import { Icons } from '@/constants';
import CartDot from './CartDot';
import clsx from 'clsx';

import { WithNavbarProps, withNavbar } from '@/hocs';
import { useAuth, useCart, useClickOutside } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import { ShoppingBag } from '@/features/cart';
import { Navigation, NavigationItem } from '..';
import { logout } from '@/redux';

export interface HeaderProps extends WithNavbarProps {
  className?: string;
}

export const Header = ({
  toggleNavbar,
  className,
  closeNavbar,
  isNavbarOpen,
}: HeaderProps) => {
  const [shoppingBagOpen, setShoppingBag] = useState(false);
  const { cartState } = useCart();
  const { isAuthenticated, authDispatch } = useAuth();

  const toggleShoppingBag = () => {
    setShoppingBag((prev) => !prev);
  };

  const handleCartClick = () => {
    toggleShoppingBag();
    closeNavbar && closeNavbar();
  };

  const handleLogoClick = () => {
    closeNavbar && closeNavbar();
  };

  const handleLogout = () => {
    authDispatch(logout());
  };

  const shoppingBagContainRef = useRef<HTMLDivElement>(null);

  useClickOutside(shoppingBagContainRef, () => {
    setShoppingBag(false);
  });

  useEffect(() => {
    if (shoppingBagOpen) {
      document.body.classList.add('overflow-hidden', 'md:!overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [shoppingBagOpen]);

  return (
    <header
      className={clsx(
        'flex items-center',
        'relative after:absolute after:bottom-0 after:left-0 after:hidden after:h-px after:w-full after:bg-gray md:mb-3 after:md:block',
        className
      )}
    >
      <Logo onClick={handleLogoClick} />
      <Navigation className="ml-auto mr-4 hidden gap-4 md:flex">
        <NavigationItem to={isAuthenticated ? '/account' : '/account/login'}>
          {isAuthenticated ? 'Account' : 'Login'}
        </NavigationItem>
        {isAuthenticated && (
          <NavigationItem onClick={handleLogout}>Logout</NavigationItem>
        )}
      </Navigation>
      <div className="relative ml-auto md:ml-0" ref={shoppingBagContainRef}>
        <Icons.ShoppingCart
          className="cursor-pointer"
          onClick={handleCartClick}
        />
        {cartState.totalItems > 0 && (
          <CartDot count={cartState.totalItems} className="absolute" />
        )}
        <ShoppingBag
          onBack={toggleShoppingBag}
          className={clsx(
            'fixed left-0 top-0 z-[99] h-full w-full translate-x-full bg-white transition',
            'md:invisible md:absolute md:left-auto md:right-0 md:top-[calc(100%+1rem)] md:z-[999] md:h-96 md:w-96 md:translate-x-0 md:rounded md:border md:border-gray md:p-4 md:pt-0 md:opacity-0 md:transition-opacity',
            {
              ' !translate-x-0 md:!visible md:!opacity-100': shoppingBagOpen,
            }
          )}
        />
      </div>
      <div className="ml-4 cursor-pointer md:hidden" onClick={toggleNavbar}>
        {isNavbarOpen ? (
          <Icons.Close className="w-4" />
        ) : (
          <Icons.Menu className="w-4" />
        )}
      </div>
    </header>
  );
};

export const HeaderWithNavbar = withNavbar<HeaderProps>(Header);
