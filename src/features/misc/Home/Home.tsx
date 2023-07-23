import { ProductConstants } from '@/constants';
import { CategoryList } from './components';
import { useCategory } from './hook';
import { ProductData, ProductGrid } from '@/components/Product';

const Home = () => {
  const categories = useCategory(ProductConstants.SORT_LIST);
  return (
    <section>
      <CategoryList categories={categories} />
      <ProductGrid
        className="wrapper mt-4"
        products={ProductConstants.SORT_LIST as ProductData[]}
      />
    </section>
  );
};

export default Home;
