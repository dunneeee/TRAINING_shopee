import { BlogPostConstants } from '@/constants';
import { BlogPostTypes } from '@/features/blog';

const useBlogPost = () => {
  const getBlogPosts = () => BlogPostConstants.BLOGS;
  const getBlogPost = (id: string) =>
    BlogPostConstants.BLOGS.find((blog) => blog.id === id);
  const convertToShort = (
    blog: BlogPostTypes.Type
  ): BlogPostTypes.ShortType => ({
    id: blog.id,
    description: blog.description,
    published: blog.published,
    subtitle: blog.subtitle,
    topic: blog.topic,
    background: blog.background,
  });
  const getBlogPostShort = (id: string) =>
    convertToShort(getBlogPost(id) as BlogPostTypes.Type);

  const getBlogPostShorts = () => BlogPostConstants.BLOGS.map(convertToShort);

  return {
    getBlogPosts,
    getBlogPost,
    getBlogPostShort,
    getBlogPostShorts,
  };
};

export default useBlogPost;
