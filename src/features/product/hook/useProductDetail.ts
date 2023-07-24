import { useProduct } from '@/hook';

export const useProductDetail = (productId: string = '') => {
  const { getProducts, getSortProducts } = useProduct();
  if (!productId)
    return {
      product: null,
      relatedProducts: [],
    };
  const product = getProducts((product) => product.id === productId)[0] || null;
  return {
    product,
    relatedProducts: getSortProducts((product) => product.id !== productId),
  };
};
