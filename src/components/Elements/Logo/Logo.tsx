import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="logo font-allerta text-2xl leading-10">
      <span className="text-primary">S</span>
      <span className="text-black">HOPPE</span>
    </Link>
  );
};

export default Logo;
