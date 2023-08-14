import { Route, Routes } from 'react-router-dom';
import { ShoppingCart } from './ShoppingCart';
import { NotFound } from '@/features/misc';
import { Checkout } from './Checkout';

export const CartRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
