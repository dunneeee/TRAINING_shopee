import { BlogPostTypes } from '@/types';
import clsx from 'clsx';
import { BlogItem } from '.';
import { Pagination } from '@/components/Elements';
import { usePage } from '@/hooks';

interface BlogGridProps {
  className?: string;
  blogs: BlogPostTypes.ShortType[];
  pageSize?: number;
}

export const BlogGrid = ({ blogs, className, pageSize = 3 }: BlogGridProps) => {
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
    document.documentElement.scrollTop = 0;
    setPage(page);
  };

  return (
    <div className={clsx('overflow-hidden', className)}>
      <ul className="-m-2 flex flex-wrap">
        {currentBlogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} className="w-full p-2" />
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
