import { ProductData, ProductGrid, SearchProduct } from '@/components/Product';
import { FilterButton } from './components';
import { useProduct, useScrollTop } from '@/hooks';
import { InputSelect } from '@/components/Form';
import { useMemo, useState } from 'react';
import { ProductTypes } from '@/types';

const Shop = () => {
  useScrollTop();
  const [sortBy, setSortBy] = useState('');
  const { getSortProducts, productState } = useProduct();
  const renderProducts = useMemo(
    () =>
      getSortProducts(
        productState.sortProducts,
        sortBy as keyof ProductTypes.Type
      ),
    [sortBy, getSortProducts, productState.sortProducts]
  );
  return (
    <section className="wrapper overflow-hidden">
      <h3 className="mb-4">Shop</h3>
      <div className="-m-2 flex flex-wrap">
        <div className="w-full p-2 md:w-3/12">
          <SearchProduct className="mb-4 hidden md:flex" />
          <FilterButton className="mb-2 block md:hidden" />
          <div className="filter-box">
            <InputSelect
              className="mt-8 hidden w-full md:block"
              shape="square"
              onChange={(e) => setSortBy(e.target.value)}
              options={[
                {
                  label: 'Sort By',
                  value: '',
                },
                {
                  label: 'Name',
                  value: 'name',
                },
                {
                  label: 'Price',
                  value: 'price',
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full p-2 md:w-9/12">
          <ProductGrid products={renderProducts as ProductData[]} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
