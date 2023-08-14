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
  products: ProductConstants.PRODUCTS,
  sortProducts: ProductConstants.PRODUCTS.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    category: p.category,
    image: p.images ? p.images[0] : '',
    discount: p.discount,
    badge: p.badge,
  })),
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
