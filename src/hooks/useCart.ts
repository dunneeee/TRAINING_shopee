import { CartContext } from '@/contexts';
import { CartTypes } from '@/types';
import { useContext } from 'react';

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');

  const getCartItems = (
    filter: (cartItem: CartTypes.Item, index: number) => boolean = () => true
  ): CartTypes.Item[] => context.cartState.items.filter(filter);

  const returnValue = {
    cartState: context.cartState,
    cartDispatch: context.cartDispatch,
    getCartItems,
  };
  return returnValue;
};

export default useCart;
