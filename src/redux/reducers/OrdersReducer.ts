import { OrdersTypes } from '@/types';
import { OrdersAction } from '..';

export interface OrdersState {
  orders: OrdersTypes.Billing[];
}

export const initialOrdersState: OrdersState = {
  orders: [
    {
      id: 7643980998990,
      date: '2021-08-08',
      status: 'delivered',
      total: 105,
    },
    {
      id: 7643980998890,
      date: '2021-08-08',
      status: 'delivered',
      total: 105,
    },
  ],
};

export const ordersReducer = (state: OrdersState, action: OrdersAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
