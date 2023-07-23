import clsx from 'clsx';
const TYPES = {
  discount: 'text-white bg-primary',
  category: 'text-white bg-black',
  soldOut: 'bg-primary text-white',
  new: 'bg-white text-black',
};

export type BadgeType = keyof typeof TYPES;

interface ProductBadgeProps {
  type?: BadgeType;
  children?: React.ReactNode;
  className?: string;
}

export const ProductBadge = ({
  type = 'discount',
  children,
  className,
}: ProductBadgeProps) => {
  const badgeClasses = clsx(
    'font-body-small rounded px-2 py-[2px]',
    TYPES[type],
    className
  );
  const element = children
    ? children
    : type.charAt(0).toUpperCase() + type.slice(1);
  return <div className={badgeClasses}>{element}</div>;
};
