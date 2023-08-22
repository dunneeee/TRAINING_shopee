import { ProductContext } from '@/contexts';
import { ProductTypes } from '@/types';
import { useCallback, useContext } from 'react';

const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error('useProduct must be used within a ProductProvider');

  const getProducts = useCallback(
    (
      filter: (product: ProductTypes.Type, index: number) => boolean = () =>
        true
    ): ProductTypes.Type[] => context.productState.products.filter(filter),
    [context.productState.products]
  );

  const getSortProducts = useCallback(
    (data: ProductTypes.ShortType[], by: keyof ProductTypes.Type = 'name') => {
      switch (by) {
        case 'name':
          data.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'price':
          data.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
      return data;
    },
    []
  );

  const returnValue = {
    productState: context.productState,
    productDispatch: context.dispatch,
    getProducts,
    getSortProducts,
  };
  return returnValue;
};

export default useProduct;
