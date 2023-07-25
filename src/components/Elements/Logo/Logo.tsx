import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = ({ className, onClick }: LogoProps) => {
  return (
    <Link
      to="/"
      className={clsx('logo font-allerta text-2xl leading-10', className)}
      onClick={onClick}
    >
      <span className="text-primary">S</span>
      <span className="text-black">HOPPE</span>
    </Link>
  );
};

export default Logo;
