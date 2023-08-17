import { AuthProvider } from '.';
import { CartProvider } from './Cart';
import { OrdersProvider } from './Orders';
import { ProductProvider } from './Product';

interface AppStateProps {
  children: React.ReactNode;
}

export const AppState = ({ children }: AppStateProps) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <OrdersProvider>{children}</OrdersProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};
