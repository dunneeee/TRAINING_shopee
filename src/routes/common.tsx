import { Home } from '@/features/misc';
import { MyRouteObject } from './generateLayout';

export const commonRoutes: MyRouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];
