import { ProductProvider } from './Product';

interface AppStateProps {
  children: React.ReactNode;
}

export const AppState = ({ children }: AppStateProps) => {
  return <ProductProvider>{children}</ProductProvider>;
};
