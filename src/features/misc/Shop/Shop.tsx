import { ProductData, ProductGrid } from '@/components/Product';
import { FilterButton } from './components';
import { useProduct } from '@/hooks';

const Shop = () => {
  const { productState } = useProduct();
  return (
    <section className="wrapper">
      <h3 className="mb-4">Shop</h3>
      <FilterButton className="mb-4" />
      <ProductGrid products={productState.sortProducts as ProductData[]} />
    </section>
  );
};

export default Shop;
