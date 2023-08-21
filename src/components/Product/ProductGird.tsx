import clsx from 'clsx';
import { ProductData, ProductItem } from '.';

interface ProductGridProps {
  products: ProductData[];
  className?: string;
  gap?: number;
}

export const ProductGrid = ({ products, className }: ProductGridProps) => {
  return (
    <div className={clsx('overflow-hidden', className)}>
      <ul className="-m-2 flex flex-wrap">
        {products.map((product) => {
          return (
            <li
              className={clsx('w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5', 'p-2')}
              key={product.name + product.id}
            >
              <ProductItem className="h-full w-full" product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
