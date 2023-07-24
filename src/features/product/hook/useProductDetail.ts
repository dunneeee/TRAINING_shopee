import { useProduct } from '@/hook';

export const useProductDetail = (productId: string = '') => {
  const { getProducts } = useProduct();
  if (!productId) return null;
  const product = getProducts((product) => product.id === productId)[0] || null;
  return product;
};
