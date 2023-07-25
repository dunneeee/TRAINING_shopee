import { ShoppingBag } from '@/features/cart';
import { useCart, useToggle } from '@/hooks';
import clsx from 'clsx';
import { useEffect } from 'react';

export interface WithShoppingBagProps {
  toggleShoppingBag?: () => void;
  totalItems?: number;
}

export const withShoppingBag = <T extends WithShoppingBagProps>(
  Component: React.ComponentType<T>
) => {
  const EnhancedComponent = (props: Omit<T, keyof WithShoppingBagProps>) => {
    const { toggle: isOpen, handleToggle } = useToggle();
    const { cartState } = useCart();
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }, [isOpen]);
    return (
      <>
        <Component
          {...(props as T)}
          totalItems={cartState.totalItems}
          toggleShoppingBag={handleToggle}
        />
        <ShoppingBag
          onBack={handleToggle}
          className={clsx(
            'fixed left-0 top-0 z-[99] h-full w-full translate-x-full bg-white transition',
            {
              '!translate-x-0': isOpen,
            }
          )}
        />
      </>
    );
  };

  return EnhancedComponent;
};
