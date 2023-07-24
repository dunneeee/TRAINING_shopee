import { MainLayout } from '@/components/Layouts';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../hook';
import { NotFound } from '@/features/misc';

export const ProductDetail = () => {
  const { productId } = useParams();
  const product = useProductDetail(productId);
  if (!product) return <NotFound label="Product not found." />;
  return (
    <MainLayout>
      <section className="wrapper">
        <p>This is detail of product with productid {productId}</p>
      </section>
    </MainLayout>
  );
};
