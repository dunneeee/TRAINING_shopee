import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  className?: string;
  to?: string;
  children: React.ReactNode;
}

const CategoryItem = ({ className, children, to }: CategoryItemProps) => {
  const Comp = to ? Link : 'div';
  const link = to ? to : '#';
  const props = {
    className: clsx(
      'block min-w-[140px] font-body-small p-[10px] rounded border border-lightGray text-center',
      className
    ),
  };

  return (
    <Comp to={link} {...props}>
      {children}
    </Comp>
  );
};

export default CategoryItem;
