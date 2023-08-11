import { useNavbar } from '@/hooks';
import { Footer, HeaderWithNavbar, Navbar } from '..';

interface OnlyHeaderProps {
  children: React.ReactNode;
}

const OnlyHeader = ({ children }: OnlyHeaderProps) => {
  const { isNavbarOpen } = useNavbar();
  return (
    <>
      <HeaderWithNavbar className="wrapper mb-6" />
      {isNavbarOpen ? <Navbar className="wrapper" /> : children}
      {!isNavbarOpen && <Footer className="wrapper mt-10" />}
    </>
  );
};

export default OnlyHeader;
