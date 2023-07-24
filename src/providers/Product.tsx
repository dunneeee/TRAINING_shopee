import { ProductContext } from '@/contexts';
import { initialProductState, productReducer } from '@/redux';
import { useReducer } from 'react';

interface ProductProps {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: ProductProps) => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );

  const contextValue = {
    productState,
    dispatch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
