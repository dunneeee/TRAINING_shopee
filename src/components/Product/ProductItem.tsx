import clsx from 'clsx';
import { BadgeType, ProductBadge } from '.';
import { moneyUtils } from '@/utils';

export interface ProductData {
  name: string;
  price: number;
  discount?: number;
  type?: string;
  badge?: BadgeType;
  image?: string;
  link?: string;
}

interface ProductItemProps {
  product: ProductData;
  className?: string;
}

export const ProductItem = ({ product, className }: ProductItemProps) => {
  const { name, price, badge, discount, image, type } = product;
  const productClasses = clsx('overflow-hidden flex flex-col', className);
  return (
    <div className={productClasses}>
      <div className="relative mx-auto inline-block">
        {image && <img className="mx-auto rounded-lg" src={image} alt={name} />}
        <ProductBadge className="absolute left-0 top-0 m-2" type={badge}>
          {badge === 'category' && type}
          {badge === 'soldOut' && 'Sold'}
          {badge === 'new' && 'New'}
          {badge === 'discount' &&
            discount &&
            `- %${moneyUtils.getDiscountPercentage(price, discount)}`}
        </ProductBadge>
      </div>
      <p className="mt-2">{name}</p>
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
