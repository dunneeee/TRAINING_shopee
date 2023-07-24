import { ProductState, initialProductState } from '@/redux';
import { ProductAction } from '@/redux/actions';
import { Dispatch, createContext } from 'react';

export interface ProductContext {
  state: ProductState;
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContext>({
  state: initialProductState,
  dispatch: () => initialProductState,
});
