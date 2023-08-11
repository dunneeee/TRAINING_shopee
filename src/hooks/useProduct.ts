import { ProductContext } from '@/contexts';
import { ProductTypes } from '@/types';
import { useContext } from 'react';

const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error('useProduct must be used within a ProductProvider');

  const getProducts = (
    filter: (product: ProductTypes.Type, index: number) => boolean = () => true
  ): ProductTypes.Type[] => context.productState.products.filter(filter);

  const getSortProducts = (
    filter: (
      sortProduct: ProductTypes.ShortType,
      index: number
    ) => boolean = () => true
  ): ProductTypes.ShortType[] =>
    context.productState.sortProducts.filter(filter);

  const returnValue = {
    productState: context.productState,
    productDispatch: context.dispatch,
    getProducts,
    getSortProducts,
  };
  return returnValue;
};

export default useProduct;
