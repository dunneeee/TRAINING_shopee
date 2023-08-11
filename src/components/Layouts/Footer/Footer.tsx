import { Link } from '@/components/Elements';
import { Icons } from '@/constants';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  return (
    <footer className={clsx('', className)}>
      <div className="footer-top mb-10">
        <div className="input font-body-medium flex items-center border-b border-black">
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
      </div>
      <ul className="links mb-10">
        <Link className="font-body-small mb-2 block" to="/contact">
          CONTACT
        </Link>
        <Link className="font-body-small mb-2 block">TERMS OF SERVICES</Link>
        <Link className="font-body-small mb-2 block">SHIPPING AND RETURNS</Link>
      </ul>
      <div className="follows_us mb-10 flex items-center">
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
      <p className="mb-4">© 2020 Shelly. Terms of use and privacy policy.</p>
    </footer>
  );
};
