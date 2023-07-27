import { useBlogPost, useScrollTop } from '@/hooks';
import { dateUtils } from '@/utils';
import clsx from 'clsx';
import { Navigate, useParams } from 'react-router-dom';
import { BlogPostTypes } from '..';

interface BlogContentProps {
  content: BlogPostTypes.Content;
  className?: string;
}

const BlogContent = ({ className, content }: BlogContentProps) => {
  let element = null;
  switch (content.type) {
    case 'image':
      element = (
        <img src={content.url} alt={content.alt} className={className} />
      );
      break;
    case 'text':
      element = (
        <p className={clsx('font-body-small', className)}>{content.text}</p>
      );
      break;
    case 'subheader':
      element = <h5 className={clsx(className)}>{content.text}</h5>;
      break;
    case 'header':
      element = <h3 className={clsx(className)}>{content.text}</h3>;
      break;
    case 'list':
      element = (
        <ul className={clsx(className)}>
          {content.items.map((item, index) => (
            <li key={index} className="font-body-small ml-5 list-disc">
              {item}
            </li>
          ))}
        </ul>
      );
      break;
    default:
      break;
  }

  return element;
};

export const BlogDetail = () => {
  useScrollTop();
  const { postId } = useParams();
  const { getBlogPost } = useBlogPost();
  const blogPost = getBlogPost(postId || '');
  if (!blogPost) return <Navigate to="/blog" />;
  return (
    <section className="wrapper">
      <div className="mb-6 text-center">
        <h3 className="mb-[10px] capitalize">{blogPost.title}</h3>
        <p className="font-body-small">
          <span className="text-darkGray">by</span> {blogPost.author}{' '}
          <span className="text-darkGray">
            - {dateUtils.formatDate(blogPost.published)}
          </span>
        </p>
      </div>
      <div className="mb-11">
        {blogPost.content.map((content, index) => (
          <BlogContent key={index} content={content} className="mb-4" />
        ))}
      </div>
      <div className="line bg-gray"></div>
    </section>
  );
};
