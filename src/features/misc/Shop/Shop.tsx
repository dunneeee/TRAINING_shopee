import { ProductData, ProductGrid } from '@/components/Product';
import { FilterButton } from './components';
import { useProduct, useScrollTop } from '@/hooks';
import { InputField, InputSelect } from '@/components/Form';

const Shop = () => {
  useScrollTop();
  const { productState } = useProduct();
  return (
    <section className="wrapper overflow-hidden">
      <h3 className="mb-4">Shop</h3>
      <div className="-m-2 flex flex-wrap">
        <div className="w-full p-2 md:w-3/12">
          <InputField placeholder="Search" className="hidden md:block" />
          <FilterButton className="mb-2 block md:hidden" />
          <div className="filter-box">
            <InputSelect
              className="mt-8 hidden w-full md:block"
              shape="square"
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
          <ProductGrid products={productState.sortProducts as ProductData[]} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
