import { ProductTypes } from '@/types';
import { ProductAction, ProductActionType } from '../actions';
import { ProductConstants } from '@/constants';

export interface ProductState {
  products: ProductTypes.Type[];
  sortProducts: ProductTypes.ShortType[];
  filter: {
    keyword: string;
    category: string;
  };
}

export const initialProductState: ProductState = {
  products: [],
  sortProducts: ProductConstants.SORT_LIST,
  filter: {
    keyword: '',
    category: '',
  },
};

export const productReducer = (
  state = initialProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionType.SET_FILTER_KEYWORD:
      return {
        ...state,
        filter: {
          ...state.filter,
          keyword: action.payload,
        },
      };
    default:
      return state;
  }
};
