import { Logo } from '@/components/Elements';
import { Icons } from '@/constants';
import CartDot from './CartDot';
import { Search } from '@/components/Form';
import clsx from 'clsx';

export interface Props {
  onMenuClick?: () => void;
  onCartClick?: () => void;
  className?: string;
}

export const Header = ({ onMenuClick, onCartClick, className }: Props) => {
  return (
    <header className={clsx('flex items-center', className)}>
      <Logo />
      <div className="relative ml-auto cursor-pointer" onClick={onCartClick}>
        <Icons.ShoppingCart />
        <CartDot count={1} className="absolute" />
      </div>
      <div className="ml-4 cursor-pointer" onClick={onMenuClick}>
        <Icons.Menu />
      </div>
    </header>
  );
};

type HeaderSearchProps = Props;

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
