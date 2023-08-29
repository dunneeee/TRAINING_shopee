import { useNavbar } from '@/hooks';
import { Footer, HeaderWithNavbar, Navbar } from '..';
import { SearchProduct } from '@/components/Product';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isNavbarOpen } = useNavbar();
  return (
    <>
      <HeaderWithNavbar className="wrapper" />
      <div className="wrapper mb-10 md:hidden">
        <SearchProduct />
      </div>
      {isNavbarOpen ? <Navbar className="wrapper" /> : children}
      {!isNavbarOpen && <Footer className="wrapper mt-10" />}
    </>
  );
};

export default MainLayout;
