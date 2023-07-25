import { ShoppingBag } from '@/features/cart';
import { useCart, useToggle } from '@/hook';
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
        {isOpen && (
          <ShoppingBag
            onBack={handleToggle}
            className="fixed left-0 top-0 z-[99] h-full w-full bg-white"
          />
        )}
      </>
    );
  };

  return EnhancedComponent;
};
