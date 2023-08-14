import { About, Contact, Home, NotFound, Shop } from '@/features/misc';
import { MyRouteObject } from './generateLayout';
import { ProductRoutes } from '@/features/product';
import { CartRoutes } from '@/features/cart';
import { OnlyHeader } from '@/components/Layouts';
import { HelpRoutes } from '@/features/helps';
import { BlogRoutes } from '@/features/blog';

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
    path: '/shopping-cart/*',
    element: <CartRoutes />,
    layout: OnlyHeader,
  },
  {
    path: '/help/*',
    element: <HelpRoutes />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/blog/*',
    element: <BlogRoutes />,
  },
  {
    path: '*',
    element: <NotFound />,
    layout: null,
  },
];
