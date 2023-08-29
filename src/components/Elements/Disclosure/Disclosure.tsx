import { Icons } from '@/constants';
import clsx from 'clsx';
import { useState } from 'react';

interface DisclosureProps {
  children?: React.ReactNode;
  open?: boolean;
  title?: string;
  className?: string;
  titleClasses?: string;
}

export const Disclosure = ({
  children,
  open = false,
  title = '',
  className,
  titleClasses,
}: DisclosureProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <div
        className="flex cursor-pointer items-center py-2"
        onClick={toggleOpen}
      >
        <p
          className={clsx('font-body-small md:font-body-medium', titleClasses)}
        >
          {title}
        </p>
        <span className="ml-auto">
          <Icons.AngleArrowRight
            className={clsx({
              'rotate-90': isOpen,
            })}
          />
        </span>
      </div>
      <div
        className={clsx('font-body-small md:font-body-medium text-darkGray', {
          hidden: !isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};
