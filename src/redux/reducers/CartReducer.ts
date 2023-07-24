import { CartTypes } from '@/types';
import { CartAction, CartActionType } from '../actions';

export interface CartState {
  items: CartTypes.Item[];
  totalPrice: number;
  totalItems: number;
}

export const initialCartState: CartState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD_ITEM: {
      const item = action.payload;
      const existItem = state.items.find((i) => i.id === item.id);
      let newItems: CartTypes.Item[] = [];
      if (existItem) {
        newItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newItems = [...state.items, item];
      }
      return {
        ...state,
        items: newItems,
      };
    }
    case CartActionType.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case CartActionType.UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };
    case CartActionType.CLEAR_CART:
      return initialCartState;
    default:
      return state;
  }
};
