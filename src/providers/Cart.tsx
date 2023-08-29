import { CartContext, CartContextType } from '@/contexts';
import { cartReducer, initialCartState } from '@/redux';
import { useReducer } from 'react';

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const value: CartContextType = {
    cartState,
    cartDispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
