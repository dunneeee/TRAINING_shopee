import { useDraggableList } from '@/hook';
import { ProductTypes } from '@/types';
import { ProductData, ProductItem } from '.';

interface ProductDraggableListProps {
  products: ProductTypes.ShortType[];
}

export const ProductDraggableList = ({
  products,
}: ProductDraggableListProps) => {
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    scrollContainerRef,
  } = useDraggableList();
  return (
    <div className="">
      <div
        className="scroll-container no-scrollbar flex overflow-x-auto"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {products.map((products) => (
          <div className="inline-block " key={products.id}>
            <ProductItem
              product={products as ProductData}
              className="mr-3 !block w-[136px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
