import { Button } from '@/components/Elements';
import { Icons } from '@/constants';
import clsx from 'clsx';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export interface HelpItemProps {
  leftIcon?: React.ReactNode;
  title: string;
  to: string;
  className?: string;
}

export type HelpItemThroughProps = Omit<HelpItemProps, 'className'>;

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
    to: '/help/privacy',
    leftIcon: <Icons.PadLock />,
  },
  {
    title: 'Retun & Exchanges',
    to: '#',
    leftIcon: <Icons.Return />,
  },
];

export const HelpItem = ({ title, to, leftIcon, className }: HelpItemProps) => {
  return (
    <li className={clsx('wrapper hover:bg-lightGray xl:px-1', className)}>
      <Link className="flex items-center py-[22px] transition " to={to}>
        {leftIcon && <span className="mr-4">{leftIcon}</span>}
        <span>{title}</span>
        <span className="ml-auto">{<Icons.AngleArrowRight />}</span>
      </Link>
    </li>
  );
};

export const HelpLinkList = () => {
  return (
    <ul className="">
      {helpItems.map((item, index) => {
        return (
          <Fragment key={index}>
            <HelpItem {...item} key={item.to} />
            <li className="wrapper">
              <div className="line bg-lightGray"></div>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
};

interface HelpNavbarProps {
  className?: string;
}

export const HelpNavbar = ({ className }: HelpNavbarProps) => {
  return (
    <div className={clsx(className)}>
      <HelpLinkList />
      <div className="wrapper mt-10">
        <Link to="/contact">
          <Button variant="outline" className="w-full">
            Contact
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HelpNavbar;
