import { useCart } from '@/hooks';
import { useMemo } from 'react';

const useShoppingItem = () => {
  const { getCartItems, cartState, cartDispatch } = useCart();
  const shoppingItems = useMemo(() => getCartItems(() => true), [getCartItems]);

  return {
    shoppingItems,
    cartDispatch,
    cartState,
  };
};

export default useShoppingItem;
