import { CartTypes } from '@/types';

export enum CartActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
  SET_ITEMS = 'SET_ITEMS',
  INCREMENT_ITEM = 'INCREMENT_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM',
}

export type CartAction =
  | {
      type: CartActionType.ADD_ITEM;
      payload: CartTypes.Item;
    }
  | {
      type: CartActionType.REMOVE_ITEM;
      payload: string;
    }
  | {
      type: CartActionType.UPDATE_ITEM;
      payload: CartTypes.Item;
    }
  | {
      type: CartActionType.CLEAR_CART;
    }
  | {
      type: CartActionType.SET_ITEMS;
      payload: CartTypes.Item[];
    }
  | {
      type: CartActionType.INCREMENT_ITEM;
      payload: string;
    }
  | {
      type: CartActionType.DECREMENT_ITEM;
      payload: string;
    };

export const addItemToCart = (item: CartTypes.Item): CartAction => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: item,
  };
};

export const removeItemFromCart = (id: string): CartAction => {
  return {
    type: CartActionType.REMOVE_ITEM,
    payload: id,
  };
};

export const updateItemFromCart = (item: CartTypes.Item): CartAction => {
  return {
    type: CartActionType.UPDATE_ITEM,
    payload: item,
  };
};

export const clearCart = (): CartAction => {
  return {
    type: CartActionType.CLEAR_CART,
  };
};

export const setCartItems = (items: CartTypes.Item[]): CartAction => {
  return {
    type: CartActionType.SET_ITEMS,
    payload: items,
  };
};

export const incrementCartItem = (id: string): CartAction => {
  return {
    type: CartActionType.INCREMENT_ITEM,
    payload: id,
  };
};

export const decrementCartItem = (id: string): CartAction => {
  return {
    type: CartActionType.DECREMENT_ITEM,
    payload: id,
  };
};
