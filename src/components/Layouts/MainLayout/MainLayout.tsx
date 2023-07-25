import { useNavbar } from '@/hooks';
import { Footer, HeaderWithNavbar, Navbar } from '..';
import { Search } from '@/components/Form';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isNavbarOpen } = useNavbar();
  return (
    <>
      <HeaderWithNavbar className="wrapper" />
      <div className="wrapper mb-10">
        <Search className="w-full" />
      </div>
      {isNavbarOpen ? <Navbar className="wrapper" /> : children}
      {!isNavbarOpen && <Footer className="wrapper mt-10" />}
    </>
  );
};

export default MainLayout;
