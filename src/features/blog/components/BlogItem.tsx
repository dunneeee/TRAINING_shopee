import { Link } from '@/components/Elements';
import { BlogPostTypes } from '@/types';
import { dateUtils, textUtils } from '@/utils';
import clsx from 'clsx';

interface BlogItemProps {
  className?: string;
  blog: BlogPostTypes.ShortType;
  list?: boolean;
}

export const BlogItem = ({ blog, className, list = true }: BlogItemProps) => {
  const { id, description, published, subtitle, topic, background } = blog;
  const Comp = list ? 'li' : 'div';

  return (
    <Comp className={clsx(className)}>
      <div className="mb-4">
        <img src={background} alt={topic} />
      </div>
      <p className="font-body-small capitalize text-darkGray">
        {topic} - {dateUtils.formatDate(published)}
      </p>
      <h5>{subtitle}</h5>
      <p className="font-body-small mb-4 text-darkGray">
        {textUtils.shortWord(description)}
      </p>
      <Link className="text-primary" to={id}>
        Read More
      </Link>
    </Comp>
  );
};
