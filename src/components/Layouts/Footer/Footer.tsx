import { Link } from '@/components/Elements';
import { Icons } from '@/constants';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  return (
    <footer
      className={clsx(
        'flex flex-wrap md:border-t md:border-gray md:py-6',
        className
      )}
    >
      <div
        className={clsx(
          'footer-top mb-10 w-full',
          'h-fit md:order-2 md:flex md:w-1/2 md:flex-wrap md:justify-end'
        )}
      >
        <div
          className={clsx(
            'input font-body-medium flex items-center border-b border-black',
            'md:w-8/12'
          )}
        >
          <input
            className="font-body-medium w-full py-1"
            placeholder="Give an email, get the newsletter."
          />
          <div className="icon">
            <Icons.ArrowRight className="cursor-pointer" />
          </div>
        </div>
        <div className="font-body-small mt-3 flex items-center">
          <input type="checkbox" className="mr-1" />
          <span>I agree to the website’s terms and conditions</span>
        </div>
        <ul className="mt-10 hidden w-full justify-end gap-x-4 md:flex">
          <li>
            <Icons.Facebook className="h-4 w-4 " />
          </li>
          <li>
            <Icons.Instagram className="h-4 w-4" />
          </li>
          <li>
            <Icons.Twitter className="h-4 w-4" />
          </li>
        </ul>
      </div>
      <ul
        className={clsx(
          'links mb-10 flex w-full flex-wrap',
          'md:order-1 md:w-1/2 md:gap-x-10'
        )}
      >
        <Link
          className={clsx(
            'font-body-small mb-2 block w-full',
            'md:font-body-medium md:w-auto md:font-normal md:text-darkGray'
          )}
          to="/contact"
        >
          CONTACT
        </Link>
        <Link
          className={clsx(
            'font-body-small mb-2 block w-full',
            'md:font-body-medium md:w-auto md:font-normal md:text-darkGray'
          )}
        >
          TERMS OF SERVICES
        </Link>
        <Link
          className={clsx(
            'font-body-small mb-2 block w-full',
            'md:font-body-medium md:w-auto md:font-normal md:text-darkGray'
          )}
        >
          SHIPPING AND RETURNS
        </Link>
        <li className="mt-10 w-full">
          <div className="follows_us mb-10 flex items-center md:hidden">
            <span>Follow us</span>
            <span className="line ml-3 inline-block w-12"></span>
            <div className="flex">
              <Link className="ml-2">
                <Icons.Facebook />
              </Link>
              <Link className="ml-4">
                <Icons.Instagram />
              </Link>
              <Link className="ml-4">
                <Icons.Twitter />
              </Link>
            </div>
          </div>
          <p className="mb-4">
            © 2020 Shelly. Terms of use and privacy policy.
          </p>
        </li>
      </ul>
    </footer>
  );
};
