import { Home, NotFound, Shop } from '@/features/misc';
import { MyRouteObject } from './generateLayout';
import { ProductRoutes } from '@/features/product';

export const commonRoutes: MyRouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/products/*',
    element: <ProductRoutes />,
    layout: null,
  },
  {
    path: '*',
    element: <NotFound />,
    layout: null,
  },
];
