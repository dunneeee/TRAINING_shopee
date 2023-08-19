import clsx from 'clsx';
import { BillingForm } from '../components';
import { useState } from 'react';

interface InfoBlockProps {
  className?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  open?: boolean;
  onClick?: () => void;
}

const InfoBlock = ({
  className,
  title,
  children,
  description,
  open = false,
  onClick,
}: InfoBlockProps) => {
  return (
    <div className={clsx(className)}>
      <h5 className="mb-4">{title}</h5>
      <div className={clsx(open && 'hidden')}>
        <button
          className="font-body-large mb-4 text-primary transition hover:text-black"
          onClick={onClick}
        >
          ADD
        </button>
        <p className="font-body-small text-darkGray">{description}</p>
      </div>
      <div className={clsx(!open && 'hidden')}>{children}</div>
    </div>
  );
};

const Address = () => {
  const [billingOpen, setBillingOpen] = useState(false);

  const handleBillingClick = () => {
    setBillingOpen(!billingOpen);
  };
  return (
    <section className="wrapper">
      <p className="font-body-small mb-6">
        The following addresses will be used on the checkout page by default.
      </p>
      <InfoBlock
        onClick={handleBillingClick}
        open={billingOpen}
        className="mb-11"
        title="Billing address"
        description="You have not set up this type of address yet."
      >
        <BillingForm className="mb-10" />
      </InfoBlock>
      <InfoBlock
        className="mb-11"
        title="Shipping address"
        description="You have not set up this type of address yet."
      />
    </section>
  );
};

export default Address;
