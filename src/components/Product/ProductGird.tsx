import clsx from 'clsx';
import { ProductData, ProductItem } from '.';

interface ProductGridProps {
  products: ProductData[];
  className?: string;
}

export const ProductGrid = ({ products, className }: ProductGridProps) => {
  return (
    <div className="overflow-hidden">
      <ul className={clsx('-m-2 flex flex-wrap', className)}>
        {products.map((product) => {
          return (
            <li className="w-1/2 p-2" key={product.name + product.id}>
              <ProductItem className="h-full w-full" product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
