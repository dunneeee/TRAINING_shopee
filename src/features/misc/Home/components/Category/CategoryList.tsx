import { useDraggableList } from '@/hooks';
import { CategoryItem } from '.';
import clsx from 'clsx';

export interface Category {
  title: string;
  to?: string;
}

interface CategoryListProps {
  categories: Category[];
  className?: string;
}

export const CategoryList = ({ categories, className }: CategoryListProps) => {
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    scrollContainerRef,
  } = useDraggableList();
  return (
    <div className={clsx('wrapper', className)}>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="scroll-container no-scrollbar flex overflow-x-auto"
      >
        {categories.map((category, index) => {
          return (
            <CategoryItem className="mr-2" key={index} to={category.to}>
              {category.title}
            </CategoryItem>
          );
        })}
      </div>
    </div>
  );
};
