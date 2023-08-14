import { AuthProvider } from '.';
import { CartProvider } from './Cart';
import { ProductProvider } from './Product';

interface AppStateProps {
  children: React.ReactNode;
}

export const AppState = ({ children }: AppStateProps) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};
