import { ProductContext } from '@/contexts';
import { initialProductState, productReducer } from '@/redux';
import { useReducer } from 'react';

interface ProductProps {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: ProductProps) => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
