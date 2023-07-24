import { CartTypes } from '@/types';

export enum CartActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
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
