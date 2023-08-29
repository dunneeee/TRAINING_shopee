import { ProductTypes } from '@/types';
import { moneyUtils } from '@/utils';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface ProductSearchResultProps {
  product: ProductTypes.Type;
  className?: string;
}

export const ProductSearchResult = ({
  product,
  className,
}: ProductSearchResultProps) => {
  return (
    <Link
      className={clsx(
        'flex cursor-pointer overflow-hidden rounded bg-white transition hover:bg-lightGray',
        className
      )}
      to={'/products/' + product.id}
    >
      <div className="h-12 w-12">
        <img
          src={product.images[0]}
          alt=""
          className="block w-full max-w-full object-cover"
        />
      </div>
      <div className="px-2">
        <p className="font-body-small md:font-body-medium">{product.name}</p>
        <p className="font-body-small md:font-body-medium text-primary">
          {moneyUtils.formatUSD(product.price)}
        </p>
      </div>
    </Link>
  );
};
