import { useNavbar } from '@/hook';
import { Footer, HeaderWithNavbar, Navbar } from '..';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isNavbarOpen } = useNavbar();
  return (
    <>
      <HeaderWithNavbar className="wrapper" />
      {isNavbarOpen ? <Navbar className="wrapper" /> : children}
      <Footer className="wrapper mt-10" />
    </>
  );
};

export default MainLayout;
