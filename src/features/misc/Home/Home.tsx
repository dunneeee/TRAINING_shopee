import { ProductConstants } from '@/constants';
import { CategoryList } from './components';
import { useCategory } from './hook';

const Home = () => {
  const categories = useCategory(ProductConstants.SORT_LIST);
  return (
    <section>
      <CategoryList categories={categories} />
    </section>
  );
};

export default Home;
