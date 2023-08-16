import { useRoutes } from 'react-router-dom';
import { commonRoutes } from './common';
import generateLayout from './generateLayout';
import { useAuth } from '@/hooks';
import { protectRoutes } from './protect';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const auth = useAuth();
  const routes = [...generateLayout(commonRoutes)];
  const optionRoutes = auth.isAuthenticated
    ? generateLayout(protectRoutes)
    : generateLayout(publicRoutes);
  const element = useRoutes([...routes, ...optionRoutes]);
  return <>{element}</>;
};
