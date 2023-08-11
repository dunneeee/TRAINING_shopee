import clsx from 'clsx';
import { ProductData, ProductItem } from '.';
import { useMemo } from 'react';

interface ProductGridProps {
  products: ProductData[];
  className?: string;
  columns?: number;
  gap?: number;
}

const useGridColumns = (columns: number) => {
  return useMemo(() => {
    return `w-1/${columns} p-2`;
  }, [columns]);
};

export const ProductGrid = ({
  products,
  className,
  columns = 2,
}: ProductGridProps) => {
  const gridColumns = useGridColumns(columns);
  return (
    <div className={clsx('overflow-hidden', className)}>
      <ul className="-m-2 flex flex-wrap">
        {products.map((product) => {
          return (
            <li
              className={clsx(gridColumns, 'p-2')}
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
