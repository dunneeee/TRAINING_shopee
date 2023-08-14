import { CartState, initialCartState } from '@/redux';
import { CartAction } from '@/redux';
import { createContext } from 'react';

export interface CartContextType {
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType>({
  cartState: initialCartState,
  cartDispatch: () => initialCartState,
});
