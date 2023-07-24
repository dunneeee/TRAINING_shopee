import { ProductState, initialProductState } from '@/redux';
import { ProductAction } from '@/redux/actions';
import { Dispatch, createContext } from 'react';

export interface ProductContext {
  productState: ProductState;
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContext>({
  productState: initialProductState,
  dispatch: () => initialProductState,
});
