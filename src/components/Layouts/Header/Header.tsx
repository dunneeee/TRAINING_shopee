import { Logo } from '@/components/Elements';
import { Icons } from '@/constants';
import CartDot from './CartDot';
import { Search } from '@/components/Form';
import clsx from 'clsx';
import { WithNavbarProps, withNavbar } from '@/hoc';

export interface HeaderProps extends WithNavbarProps {
  onCartClick?: () => void;
  className?: string;
}

export const Header = ({
  toggleNavbar,
  onCartClick,
  className,
  closeNavbar,
  isNavbarOpen,
}: HeaderProps) => {
  const handleCartClick = () => {
    onCartClick && onCartClick();
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
        <CartDot count={1} className="absolute" />
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

export const HeaderWithNavbar = withNavbar<HeaderProps>(Header);
