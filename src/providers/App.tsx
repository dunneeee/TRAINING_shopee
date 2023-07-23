import { BrowserRouter as Router } from 'react-router-dom';
interface AppProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProps) => {
  return <Router>{children}</Router>;
};
