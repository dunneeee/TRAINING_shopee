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

const caculateTotalPrice = (items: CartTypes.Item[]): number => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const caculateTotalItems = (items: CartTypes.Item[]): number => {
  return items.reduce((acc, item) => acc + item.quantity, 0);
};

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
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
    case CartActionType.REMOVE_ITEM: {
      let newState = { ...state };
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        newState = {
          ...state,
          items: state.items.filter((i) => i.id !== action.payload),
          totalPrice: state.totalPrice - item.price * item.quantity,
          totalItems: state.totalItems - item.quantity,
        };
      }
      return newState;
    }
    case CartActionType.UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
        totalItems: caculateTotalItems(state.items),
        totalPrice: caculateTotalPrice(state.items),
      };
    case CartActionType.CLEAR_CART:
      return initialCartState;
    case CartActionType.SET_ITEMS:
      return {
        items: action.payload,
        totalItems: caculateTotalItems(action.payload),
        totalPrice: caculateTotalPrice(action.payload),
      };
    case CartActionType.INCREMENT_ITEM: {
      const item = state.items.find((i) => i.id === action.payload);
      let newState = { ...state };
      if (item) {
        const price = item.price;
        const quantity = item.quantity + 1;
        const newItem = { ...item, quantity, price };
        newState = {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload ? newItem : i
          ),
          totalPrice: state.totalPrice + price,
          totalItems: state.totalItems + 1,
        };
      }
      return newState;
    }
    case CartActionType.DECREMENT_ITEM: {
      const item = state.items.find((i) => i.id === action.payload);
      let newState = { ...state };
      if (item) {
        const price = item.price;
        const quantity = item.quantity - 1;
        const newItem = { ...item, quantity, price };
        newState = {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload ? newItem : i
          ),
          totalPrice: state.totalPrice - price,
          totalItems: state.totalItems - 1,
        };
      }
      return newState;
    }
    default:
      return state;
  }
};
