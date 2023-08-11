import { Button } from '@/components/Elements';
import { Icons } from '@/constants';
import { useScrollTop } from '@/hooks';
import clsx from 'clsx';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface HelpItemProps {
  leftIcon?: React.ReactNode;
  title: string;
  to: string;
  className?: string;
}

type HelpItemThroughProps = Omit<HelpItemProps, 'className'>;

const helpItems: HelpItemThroughProps[] = [
  {
    title: 'Terms of Services',
    to: '#',
    leftIcon: <Icons.Accepted />,
  },
  {
    title: 'Shipping',
    to: '#',
    leftIcon: <Icons.DeliveryBox />,
  },
  {
    title: 'Privacy Policy',
    to: 'privacy',
    leftIcon: <Icons.PadLock />,
  },
  {
    title: 'Retun & Exchanges',
    to: '#',
    leftIcon: <Icons.Return />,
  },
];

const HelpItem = ({ title, to, leftIcon, className }: HelpItemProps) => {
  return (
    <>
      <li className={clsx('wrapper hover:bg-lightGray', className)}>
        <Link className="flex items-center py-[22px] transition " to={to}>
          {leftIcon && <span className="mr-4">{leftIcon}</span>}
          <span>{title}</span>
          <span className="ml-auto">{<Icons.AngleArrowRight />}</span>
        </Link>
      </li>
    </>
  );
};

export const Help = () => {
  useScrollTop();
  return (
    <section className="">
      <div className="wrapper mb-9">
        <h3 className="">Help</h3>
      </div>
      <ul className="">
        {helpItems.map((item) => {
          return (
            <Fragment key={item.to}>
              <HelpItem {...item} />
              <li className="wrapper">
                <div className="line bg-lightGray"></div>
              </li>
            </Fragment>
          );
        })}
      </ul>
      <div className="wrapper mt-10">
        <Link to="/contact">
          <Button variant="outline" className="w-full">
            Contact
          </Button>
        </Link>
      </div>
    </section>
  );
};
