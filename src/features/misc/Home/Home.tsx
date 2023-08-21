import { InputField } from '@/components/Form';
import { Category, CategoryList } from './components';
import { useCategory } from './hook';
import { ProductData, ProductGrid } from '@/components/Product';
import { useProduct, useScrollTop } from '@/hooks';
import { Link } from '@/components/Elements';
import clsx from 'clsx';

const CategoryLinkList = ({
  categories,
  className,
}: {
  categories: Category[];
  className?: string;
}) => {
  return (
    <ul className={clsx(className)}>
      <li className="px-1">
        <h5>Categories</h5>
      </li>
      {categories.map((category, index) => (
        <li key={index} className="mb-1">
          <Link
            to={category.to}
            className="block rounded px-1 py-2 transition hover:bg-lightGray"
          >
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Home = () => {
  useScrollTop();
  const { productState } = useProduct();
  const categories = useCategory(productState.sortProducts);
  return (
    <section className="md:wrapper md:overflow-hidden">
      <h3 className="wrapper md:px-0">Home</h3>
      <div className="-m-2 md:flex md:flex-wrap">
        <div className="hidden p-2 md:block md:w-3/12">
          <InputField placeholder="Search" className="mb-4 w-full px-1" />
          <CategoryLinkList categories={categories} />
        </div>
        <div className="w-full p-2 md:w-9/12">
          <CategoryList categories={categories} className="md:hidden" />
          <ProductGrid
            className="wrapper mt-4 md:mt-0"
            products={productState.sortProducts as ProductData[]}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
