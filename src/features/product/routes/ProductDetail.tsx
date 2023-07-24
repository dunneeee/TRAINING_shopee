import { MainLayout } from '@/components/Layouts';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../hook';
import { NotFound } from '@/features/misc';
import { moneyUtils } from '@/utils';
import { Icons } from '@/constants';
import { Button, Link } from '@/components/Elements';
import { Disclosures, Overview } from '../components';
import { useScrollTop } from '@/hook';
import { ProductDraggableList } from '@/components/Product';

export const ProductDetail = () => {
  useScrollTop();
  const { productId } = useParams();
  const { product, relatedProducts } = useProductDetail(productId);
  if (!product) return <NotFound label="Product not found." />;
  return (
    <MainLayout>
      <section className="wrapper">
        <div className="">
          <div className="max-w-[374px]">
            <img src={product.images[0]} className="h-full w-full" />
          </div>
          <div className="mt-4 h-[2px] bg-lightGray">
            <div className="h-[2px] w-1/3 translate-x-10 bg-darkGray"></div>
          </div>
        </div>

        <div className="mt-6">
          <h3>{product.name}</h3>
          <div className="flex">
            <h5 className="text-primary">
              {moneyUtils.formatUSD(product.price)}
            </h5>
            <Icons.Share className="ml-auto cursor-pointer" />
          </div>
          <Button uppercase variant="outline" className="mt-6 w-full">
            Add To Cart
          </Button>
          <Overview content={product.overview} className="mt-4" />
        </div>

        <div className="line my-4 w-full bg-lightGray"></div>
        <Disclosures product={product} />
        <div className="line my-4 w-full bg-lightGray"></div>
        <div className="mb-4">
          <h5 className="mb-2">Similar Items</h5>
          <ProductDraggableList products={relatedProducts} />
        </div>
        <Link
          className="font-body-small flex text-primary"
          variants="secondary"
        >
          Continue shopping
          <Icons.AngleArrowRight className="ml-auto" />
        </Link>
      </section>
    </MainLayout>
  );
};
