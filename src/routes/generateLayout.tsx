import { MainLayout } from '@/components/Layouts';
import { RouteObject } from 'react-router-dom';

export type MyRouteObject = RouteObject & {
  layout?: React.ComponentType<{ children: React.ReactNode }> | null;
};

const generateLayout = (routes: MyRouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    const { layout: Layout, ...rest } = route;
    return {
      ...rest,
      element: Layout ? (
        <Layout>{rest.element}</Layout>
      ) : Layout === null ? (
        rest.element
      ) : (
        <MainLayout>{rest.element}</MainLayout>
      ),
    };
  });
};

export default generateLayout;
