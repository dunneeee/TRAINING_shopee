import { Logo } from '@/components/Elements';
import { Icons } from '@/constants';
import CartDot from './CartDot';
import { Search } from '@/components/Form';
import clsx from 'clsx';
import {
  WithNavbarProps,
  WithShoppingBagProps,
  withNavbar,
  withShoppingBag,
} from '@/hoc';

export interface HeaderProps extends WithNavbarProps, WithShoppingBagProps {
  className?: string;
}

export const Header = ({
  toggleNavbar,
  className,
  closeNavbar,
  isNavbarOpen,
  toggleShoppingBag,
  totalItems = 0,
}: HeaderProps) => {
  const handleCartClick = () => {
    toggleShoppingBag && toggleShoppingBag();
    closeNavbar && closeNavbar();
  };

  const handleLogoClick = () => {
    closeNavbar && closeNavbar();
  };

  return (
    <header className={clsx('flex items-center', className)}>
      <Logo onClick={handleLogoClick} />
      <div
        className="relative ml-auto cursor-pointer"
        onClick={handleCartClick}
      >
        <Icons.ShoppingCart />
        {totalItems > 0 && <CartDot count={totalItems} className="absolute" />}
      </div>
      <div className="ml-4 cursor-pointer" onClick={toggleNavbar}>
        {isNavbarOpen ? (
          <Icons.Close className="w-4" />
        ) : (
          <Icons.Menu className="w-4" />
        )}
      </div>
    </header>
  );
};

type HeaderSearchProps = HeaderProps;

export const HeaderSearch = ({ ...props }: HeaderSearchProps) => {
  return (
    <>
      <Header {...props} />
      <div className="mt-2">
        <Search className="w-full" />
      </div>
    </>
  );
};

export const HeaderWithNavbar = withShoppingBag<HeaderProps>(
  withNavbar<HeaderProps>(Header)
);
