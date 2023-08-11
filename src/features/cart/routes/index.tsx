import { Route, Routes } from 'react-router-dom';
import { ShoppingCart } from './ShoppingCart';
import { NotFound } from '@/features/misc';

export const CartRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ShoppingCart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
