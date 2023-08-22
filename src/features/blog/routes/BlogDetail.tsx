import { CommentForm, CommentItem } from '@/features/comments';
import { useBlogPost, useScrollTop } from '@/hooks';
import { dateUtils } from '@/utils';
import clsx from 'clsx';
import { Navigate, useParams } from 'react-router-dom';
import { BlogPostTypes } from '..';

interface BlogContentProps {
  content: BlogPostTypes.Content;
  className?: string;
}

const COMMENTS = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
    createdAt: new Date().toDateString(),
    id: '1',
    postId: '1',
    replies: [
      {
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
        createdAt: new Date().toDateString(),
        id: '2',
        postId: '1',
        replies: [],
        userId: '2',
      },
    ],
    userId: '1',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
    createdAt: new Date().toDateString(),
    id: '2',
    postId: '1',
    replies: [],
    userId: '1',
  },
];

const BlogContent = ({ className, content }: BlogContentProps) => {
  let element = null;
  switch (content.type) {
    case 'image':
      element = (
        <img
          src={content.url}
          alt={content.alt}
          className={clsx(
            className,
            'mx-auto block w-full max-w-2xl object-cover'
          )}
        />
      );
      break;
    case 'text':
      element = (
        <p className={clsx('font-body-small md:font-body-medium', className)}>
          {content.text}
        </p>
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
            <li
              key={index}
              className="font-body-small md:font-body-medium ml-5 list-disc"
            >
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
        <p className="font-body-small md:font-body-medium">
          <span className="text-darkGray">by</span> {blogPost.author}
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
      <div className="line mb-9 bg-gray"></div>
      <div className="mb-14">
        <h5 className="mb-3">Leave a reply</h5>
        <p className="font-body-small md:font-body-medium text-darkGray">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="-m-2 flex flex-wrap">
          <CommentForm className="w-full p-2 md:w-1/2" />
          <ul className="w-full p-2 md:w-1/2">
            {COMMENTS.map((comment, index) => (
              <li key={comment.id}>
                <CommentItem comment={comment} />
                {index !== COMMENTS.length - 1 && (
                  <div className="line my-6 bg-gray"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
