import { Home } from '@/features/misc';
import { RouteObject } from 'react-router-dom';

export const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];
