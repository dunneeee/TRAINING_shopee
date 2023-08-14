import { useBlogPost } from '@/hooks';
import { BlogGrid } from '../components';

export const Blog = () => {
  const { getBlogPostShorts } = useBlogPost();
  return (
    <section className="wrapper">
      <h3 className="mb-10">Blog</h3>
      <BlogGrid blogs={getBlogPostShorts()} />
    </section>
  );
};
