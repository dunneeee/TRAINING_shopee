import { ProductTypes } from '@/types';
import { Category } from '../components';

const formatCategory = (category: string) => {
  return category
    .split(/[\s-]+/)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

const useCategory = (products: ProductTypes.ShortType[]) => {
  const categories = products
    .reduce((acc: Category[], product) => {
      const category = acc.find(
        (category) => category.title === product.category
      );
      if (category) return acc;
      return [
        ...acc,
        {
          title: product.category,
          to: `?category=${product.category}`,
        },
      ];
    }, [])
    .map((category) => {
      return {
        ...category,
        title: formatCategory(category.title),
      };
    });
  return categories;
};

export default useCategory;
