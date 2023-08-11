import { Route, Routes } from 'react-router-dom';
import { ProductDetail } from './ProductDetail';
import { NotFound } from '@/features/misc';

export const ProductRoutes = () => {
  return (
    <Routes>
      <Route path=":productId" element={<ProductDetail />} />
      <Route path="*" element={<NotFound label="Product not found." />} />
    </Routes>
  );
};
