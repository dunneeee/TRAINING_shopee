import { Icons } from '@/constants';
import clsx from 'clsx';
import { useState } from 'react';

interface DisclosureProps {
  children?: React.ReactNode;
  open?: boolean;
  title?: string;
}

export const Disclosure = ({
  children,
  open = false,
  title = '',
}: DisclosureProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className="flex cursor-pointer items-center py-2"
        onClick={toggleOpen}
      >
        <p className="font-body-small">{title}</p>
        <span className="ml-auto">
          <Icons.AngleArrowRight
            className={clsx({
              'rotate-90': isOpen,
            })}
          />
        </span>
      </div>
      <div
        className={clsx('font-body-small text-darkGray', {
          hidden: !isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};
