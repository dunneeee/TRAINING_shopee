import { useRoutes } from 'react-router-dom';
import { commonRoutes } from './common';

export const AppRoutes = () => {
  const element = useRoutes([...commonRoutes]);
  return <>{element}</>;
};
