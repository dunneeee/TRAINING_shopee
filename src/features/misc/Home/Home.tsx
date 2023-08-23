import { Category, CategoryList } from './components';
import { useCategory } from './hook';
import { ProductData, ProductGrid, SearchProduct } from '@/components/Product';
import { useProduct, useScrollTop } from '@/hooks';
import { Link } from '@/components/Elements';
import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

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
  const { getProductsLiteByCategory, productState } = useProduct();
  const [searchParams] = useSearchParams();

  const productsRender = useMemo(
    () => getProductsLiteByCategory(searchParams.get('category')),
    [searchParams, getProductsLiteByCategory]
  );

  const categories = useCategory(productState.sortProducts);
  return (
    <section className="md:wrapper md:overflow-hidden">
      <h3 className="wrapper md:mb-2 md:px-0">Home</h3>
      <div className="-m-2 md:flex md:flex-wrap">
        <div className="hidden p-2 md:block md:w-3/12">
          <SearchProduct className="mb-4 hidden md:flex" />
          <CategoryLinkList categories={categories} />
        </div>
        <div className="w-full p-2 md:w-9/12">
          <CategoryList categories={categories} className="md:hidden" />
          <ProductGrid
            className="wrapper mt-4 md:mt-0"
            products={productsRender as ProductData[]}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
