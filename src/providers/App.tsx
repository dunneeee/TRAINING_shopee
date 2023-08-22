import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarProvider } from '.';
interface AppProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProps) => {
  return (
    <NavbarProvider>
      <Router>
        <div className="overflow-hidden">{children}</div>
      </Router>
    </NavbarProvider>
  );
};
