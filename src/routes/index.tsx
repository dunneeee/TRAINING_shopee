import { useRoutes } from 'react-router-dom';
import { commonRoutes } from './common';
import generateLayout from './generateLayout';

export const AppRoutes = () => {
  const routes = [...generateLayout(commonRoutes)];

  const element = useRoutes(routes);
  return <>{element}</>;
};
