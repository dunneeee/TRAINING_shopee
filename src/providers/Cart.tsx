import { ProductConstants } from '@/constants';
import { CartContext, CartContextType } from '@/contexts';
import { cartReducer, initialCartState } from '@/redux';
import { setCartItems } from '@/redux/actions';
import { CartTypes } from '@/types';
import { useEffect, useReducer } from 'react';

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const demoItems: CartTypes.Item[] = ProductConstants.PRODUCTS.slice(
      0,
      5
    ).map((p) => ({
      id: p.id,
      name: p.name,
      image: p.images[0],
      price: p.price,
      quantity: 1,
    }));

    cartDispatch(setCartItems(demoItems));
  }, []);

  const value: CartContextType = {
    cartState,
    cartDispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
