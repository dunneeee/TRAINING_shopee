import { MainLayout } from '@/components/Layouts';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../hooks';
import { NotFound } from '@/features/misc';
import { moneyUtils } from '@/utils';
import { Icons } from '@/constants';
import { Button, Link, Toast } from '@/components/Elements';
import { Disclosures, Overview } from '../components';
import { useCart, useScrollTop, useToast } from '@/hooks';
import { ProductDraggableList } from '@/components/Product';
import { addItemToCart } from '@/redux/actions';

export const ProductDetail = () => {
  useScrollTop();
  const { productId } = useParams();
  const { product, relatedProducts } = useProductDetail(productId);
  const { cartDispatch } = useCart();
  const { hideToast, showToast, toast } = useToast();
  if (!product) return <NotFound label="Product not found." />;

  const handleAddToCart = () => {
    const { id, name, price, images } = product;
    cartDispatch(
      addItemToCart({
        id,
        name,
        price,
        image: images[0],
        quantity: 1,
      })
    );
    showToast('success', 'The item added your shopping bag.', {
      to: '/shopping-cart',
      label: 'View Cart',
    });
  };

  return (
    <MainLayout>
      {toast && (
        <Toast
          remove={hideToast}
          type={toast.type}
          className="md:wrapper fixed bottom-0 z-[99] md:left-1/2 md:-translate-x-1/2"
          link={toast.link}
        >
          {toast.message}
        </Toast>
      )}
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
          <Button
            uppercase
            variant="outline"
            className="mt-6 w-full"
            onClick={handleAddToCart}
          >
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
          to="/shop"
        >
          Continue shopping
          <Icons.AngleArrowRight className="ml-auto" />
        </Link>
      </section>
    </MainLayout>
  );
};
