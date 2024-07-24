import { OrdersContext } from '@/contexts';
import { initialOrdersState, ordersReducer } from '@/redux';
import { useReducer } from 'react';

interface OrdersProviderProps {
  children: React.ReactNode;
}

export const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const [ordersState, ordersDispatch] = useReducer(
    ordersReducer,
    initialOrdersState
  );

  const value = {
    ordersState,
    ordersDispatch,
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};
