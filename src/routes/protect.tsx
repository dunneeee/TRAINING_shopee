import { AccountRoutes } from '@/features/account';
import { MyRouteObject } from './generateLayout';

export const protectRoutes: MyRouteObject[] = [
  {
    path: '/account/*',
    element: <AccountRoutes />,
  },
];
