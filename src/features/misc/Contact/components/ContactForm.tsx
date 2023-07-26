import { Button } from '@/components/Elements';
import { InputField, InputSelect, TextareaField } from '@/components/Form';
import clsx from 'clsx';

interface ContachtFormProps {
  className?: string;
}

export const ContachtForm = ({ className }: ContachtFormProps) => {
  return (
    <form action="#" className={clsx('', className)}>
      <ul>
        <li className="mb-12">
          <InputField placeholder="First name" className="w-full" />
        </li>
        <li className="mb-12">
          <InputField placeholder="Last name" className="w-full" />
        </li>
        <li className="mb-12">
          <InputField placeholder="Email" className="w-full" />
        </li>
        <li className="mb-12">
          <InputSelect
            className="w-full"
            options={[
              {
                label: 'Subject',
              },
            ]}
          />
        </li>
        <li className="mb-12">
          <TextareaField
            placeholder="Messages"
            className="w-full bg-transparent"
          />
        </li>
        <li className="mb-12">
          <Button uppercase className="w-full">
            Send
          </Button>
        </li>
      </ul>
    </form>
  );
};
