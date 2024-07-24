import { Button } from '@/components/Elements';
import { InputField, TextareaField } from '@/components/Form';
import clsx from 'clsx';

interface CommentFormProps {
  className?: string;
}

export const CommentForm = ({ className }: CommentFormProps) => {
  return (
    <form action="#" className={clsx('', className)}>
      <ul>
        <li className="mb-10">
          <InputField placeholder="Enter your Name*" className="w-full" />
        </li>
        <li className="mb-10">
          <InputField placeholder="Enter your Email*" className="w-full" />
        </li>
        <li className="mb-10">
          <InputField placeholder="Enter your website" className="w-full" />
        </li>
        <li className="mb-10">
          <label
            htmlFor=""
            className="font-body-small md:font-body-medium flex items-center text-darkGray"
          >
            <input
              type="checkbox"
              className="mr-2 h-[18px] w-[18px] rounded border"
            />
            <span className="flex-1">
              Save my name, email, and website in this browser for the next time
              I comment
            </span>
          </label>
        </li>
        <li className="mb-10">
          <TextareaField placeholder="Your comment" className="w-full" />
        </li>
        <li className="mb-10">
          <Button className="h-12" uppercase>
            Post Comment
          </Button>
        </li>
      </ul>
    </form>
  );
};
