import { useProduct } from '@/hooks';
import { useMemo } from 'react';

export const useProductDetail = (productId: string = '') => {
  const { getProducts, productState } = useProduct();
  const product = useMemo(
    () => getProducts((product) => product.id === productId)[0] || null,
    [productId, getProducts]
  );

  const relatedProducts = useMemo(() => {
    const products = productState.sortProducts.filter(
      (p) => p.id !== productId
    );
    return products;
  }, [productState.sortProducts, productId]);

  return {
    product,
    relatedProducts,
  };
};
