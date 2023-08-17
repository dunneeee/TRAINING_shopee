import { OrdersTypes } from '@/types';

export enum OrdersActionType {
  SET_ORDERS = 'SET_ORDERS',
  ADD_ORDER = 'ADD_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
  UPDATE_ORDER = 'UPDATE_ORDER',
  CLEAR_ORDERS = 'CLEAR_ORDERS',
}

export type OrdersAction =
  | {
      type: OrdersActionType.SET_ORDERS;
      payload: OrdersTypes.Billing[];
    }
  | {
      type: OrdersActionType.ADD_ORDER;
      payload: OrdersTypes.Billing;
    }
  | {
      type: OrdersActionType.REMOVE_ORDER;
      payload: number;
    }
  | {
      type: OrdersActionType.UPDATE_ORDER;
      payload: OrdersTypes.Billing;
    }
  | {
      type: OrdersActionType.CLEAR_ORDERS;
    };

export const setOrders = (orders: OrdersTypes.Billing[]): OrdersAction => {
  return {
    type: OrdersActionType.SET_ORDERS,
    payload: orders,
  };
};

export const addOrder = (order: OrdersTypes.Billing): OrdersAction => {
  return {
    type: OrdersActionType.ADD_ORDER,
    payload: order,
  };
};

export const removeOrder = (id: number): OrdersAction => {
  return {
    type: OrdersActionType.REMOVE_ORDER,
    payload: id,
  };
};

export const updateOrder = (order: OrdersTypes.Billing): OrdersAction => {
  return {
    type: OrdersActionType.UPDATE_ORDER,
    payload: order,
  };
};

export const clearOrders = (): OrdersAction => {
  return {
    type: OrdersActionType.CLEAR_ORDERS,
  };
};
