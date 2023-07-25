import { useProduct } from '@/hooks';
import { useMemo } from 'react';

export const useProductDetail = (productId: string = '') => {
  const { getProducts, getSortProducts } = useProduct();
  const product = useMemo(
    () => getProducts((product) => product.id === productId)[0] || null,
    [productId, getProducts]
  );
  return {
    product,
    relatedProducts: getSortProducts((product) => product.id !== productId),
  };
};
