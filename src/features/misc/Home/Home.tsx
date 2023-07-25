import { CategoryList } from './components';
import { useCategory } from './hook';
import { ProductData, ProductGrid } from '@/components/Product';
import { useProduct } from '@/hooks';

const Home = () => {
  const { productState } = useProduct();
  const categories = useCategory(productState.sortProducts);
  return (
    <section>
      <CategoryList categories={categories} />
      <ProductGrid
        className="wrapper mt-4"
        products={productState.sortProducts as ProductData[]}
      />
    </section>
  );
};

export default Home;
