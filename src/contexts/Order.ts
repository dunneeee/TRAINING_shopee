import { OrdersAction, OrdersState, initialOrdersState } from '@/redux';
import { createContext } from 'react';

export interface OrdersContextType {
  ordersState: OrdersState;
  ordersDispatch: React.Dispatch<OrdersAction>;
}

export const OrdersContext = createContext<OrdersContextType>({
  ordersState: initialOrdersState,
  ordersDispatch: () => initialOrdersState,
});
