import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { BadgeType, ProductBadge } from '.';
import { moneyUtils } from '@/utils';
import { ProductTypes } from '@/types';

export type ProductData = ProductTypes.ShortType & {
  badge?: BadgeType;
};

interface ProductItemProps {
  product: ProductData;
  className?: string;
}

export const ProductItem = ({ product, className }: ProductItemProps) => {
  const { name, price, badge, discount, category, id, image } = product;

  const currentLink = '/products/' + id;

  const productClasses = clsx('overflow-hidden flex flex-col', className);
  return (
    <div className={productClasses}>
      <Link to={currentLink} className="relative block w-full">
        {image && (
          <img
            className="w-full rounded-lg object-contain"
            src={image}
            alt={name}
          />
        )}
        {badge && (
          <ProductBadge className="absolute left-0 top-0 m-2" type={badge}>
            {badge === 'category' && category}
            {badge === 'soldOut' && 'Sold'}
            {badge === 'new' && 'New'}
            {badge === 'discount' &&
              discount &&
              `- %${moneyUtils.getDiscountPercentage(price, discount)}`}
          </ProductBadge>
        )}
      </Link>
      <Link to={currentLink}>
        <p className="mt-2">{name}</p>
      </Link>
      <div className="mt-1 text-primary">
        <span
          className={clsx({
            'text-error line-through': discount,
          })}
        >
          {moneyUtils.formatUSD(price)}
        </span>
        {discount && (
          <span className="ml-2">{moneyUtils.formatUSD(discount)}</span>
        )}
      </div>
    </div>
  );
};
