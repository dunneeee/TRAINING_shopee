import { Icons } from '@/constants';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';

interface ViewMoreProps {
  className?: string;
  toggleViewMore?: () => void;
  isViewMore?: boolean;
}

const ViewMore = ({
  className,
  toggleViewMore,
  isViewMore = false,
}: ViewMoreProps) => {
  return (
    <button
      className={clsx(
        'font-body-small md:font-body-medium inline-flex items-center text-primary',
        className
      )}
      onClick={toggleViewMore}
    >
      {isViewMore ? 'View less' : 'View more'}
      <Icons.AngleArrowRight
        className={clsx('ml-1', {
          'rotate-180 transform': isViewMore,
        })}
      />
    </button>
  );
};

interface OverviewProps {
  content?: string;
  className?: string;
  maxLength?: number;
}

export const Overview = ({
  content = '',
  className,
  maxLength = 18,
}: OverviewProps) => {
  const [showMore, setShowMore] = useState(false);
  const currentContent = useMemo(() => {
    if (content.length <= maxLength) {
      return content;
    }
    return showMore
      ? content
      : content.split(' ').slice(0, maxLength).join(' ') + '... ';
  }, [content, maxLength, showMore]);

  useEffect(() => {
    if (content.length <= maxLength) {
      setShowMore(true);
    }
  }, [content, maxLength]);

  const toggleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={clsx('text-darkGray', className)}>
      <p className="font-body-small md:font-body-medium">{currentContent}</p>
      <ViewMore toggleViewMore={toggleViewMore} isViewMore={showMore} />
    </div>
  );
};
