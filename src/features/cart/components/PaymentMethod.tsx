import { InputRadio } from '@/components/Form';
import clsx from 'clsx';
import { useState } from 'react';

interface PaymentOption {
  label: React.ReactNode;
  value: string;
  description?: string;
}

interface PaymentMethodProps {
  className?: string;
  paymentOptions: PaymentOption[];
  onSelectedOption?: (option: PaymentOption) => void;
}

export const PaymentMethod = ({
  className,
  paymentOptions,
  onSelectedOption,
}: PaymentMethodProps) => {
  const [selectedOption, setSelectedOption] = useState<PaymentOption>(
    paymentOptions[0]
  );
  const handlePaymentMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = paymentOptions.find(
      (op) => op.value === e.target.value
    ) as PaymentOption;
    onSelectedOption && onSelectedOption(selected);
    setSelectedOption(selected);
  };

  return (
    <ul className={clsx(className)}>
      {paymentOptions.map((op) => (
        <li key={op.value} className="mb-5">
          <InputRadio
            onChange={handlePaymentMethod}
            label={op.label}
            value={op.value}
            checked={selectedOption.value === op.value}
          >
            <p className="font-body-small md:font-body-medium mt-3 text-darkGray">
              {op.description}
            </p>
          </InputRadio>
        </li>
      ))}
    </ul>
  );
};
