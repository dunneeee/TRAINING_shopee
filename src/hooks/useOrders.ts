import { OrdersContext } from '@/contexts';
import { useContext } from 'react';

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context)
    throw new Error('useOrders must be used within a OrdersProvider');
  const returnValue = {
    ...context,
    orders: context.ordersState.orders,
  };
  return returnValue;
};
