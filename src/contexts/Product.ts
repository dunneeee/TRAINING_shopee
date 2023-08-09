import { ProductState, initialProductState } from '@/redux';
import { ProductAction } from '@/redux/actions';
import { Dispatch, createContext } from 'react';

export interface ProductContextType {
  productState: ProductState;
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextType>({
  productState: initialProductState,
  dispatch: () => initialProductState,
});
