import clsx from 'clsx';
import { BlogItem } from '.';
import { Pagination } from '@/components/Elements';
import { usePage } from '@/hooks';
import { BlogPostTypes } from '..';

interface BlogGridProps {
  className?: string;
  blogs: BlogPostTypes.ShortType[];
  pageSize?: number;
}

export const BlogGrid = ({ blogs, className, pageSize = 4 }: BlogGridProps) => {
  const {
    currentData: currentBlogs,
    currentPage,
    setPage,
  } = usePage({
    data: blogs,
    pageSize,
    currentPage: 1,
  });

  const onPageChange = (page: number) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  return (
    <div className={clsx('overflow-hidden', className)}>
      <ul className="-m-2 flex flex-wrap">
        {currentBlogs.map((blog) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
          />
        ))}
      </ul>
      <Pagination
        className="mt-10"
        currentPage={currentPage}
        onPageChange={onPageChange}
        pageSize={pageSize}
        totalCount={blogs.length}
      />
    </div>
  );
};
