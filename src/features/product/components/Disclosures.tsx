import { Disclosure } from '@/components/Elements';
import { ProductTypes } from '@/types';

interface DisclosureProps {
  product: ProductTypes.Type;
}

export const Disclosures = ({ product }: DisclosureProps) => {
  return (
    <div className="">
      <Disclosure title="Description">{product.description}</Disclosure>
      <Disclosure title="Additional information">
        {product.additionalInfo}
      </Disclosure>
      <Disclosure
        title={`Review(${product.reviews?.length || 0})`}
      ></Disclosure>
    </div>
  );
};
