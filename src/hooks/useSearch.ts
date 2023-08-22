import { ProductTypes } from '@/types';
import { useState } from 'react';
import { useProduct } from '.';

export const useSearch = <T>(
  data: T[],
  callback: (data: T, searchQuery: string, index: number) => boolean,
  delay: number = 500
) => {
  const [result, setResult] = useState<T[]>([]);
  const [search, setSearch] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        setResult(
          data.filter((item, index) => callback(item, e.target.value, index))
        );
      }, delay)
    );
  };

  return {
    result,
    search,
    handleSearch,
  };
};

export const useSearchProduct = (
  by: keyof ProductTypes.Type = 'name',
  delay: number = 500
) => {
  const { productState } = useProduct();
  let callback: (
    data: ProductTypes.Type,
    searchQuery: string,
    index: number
  ) => boolean = () => false;
  switch (by) {
    case 'name':
      callback = (data, searchQuery) =>
        !!searchQuery &&
        data.name.toLowerCase().includes(searchQuery.toLowerCase());
      break;
    case 'category':
      callback = (data, searchQuery) =>
        data.category.toLowerCase().includes(searchQuery.toLowerCase());
      break;
    default:
      break;
  }
  return useSearch(productState.products, callback, delay);
};
