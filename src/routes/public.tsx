import { AuthRoutes } from '@/features/auth';
import { MyRouteObject } from './generateLayout';

export const publicRoutes: MyRouteObject[] = [
  {
    path: '/account/*',
    element: <AuthRoutes />,
  },
];
