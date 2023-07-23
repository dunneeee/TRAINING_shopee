import { Footer, Header } from '..';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header className="wrapper" />
      {children}
      <Footer className="wrapper mt-10" />
    </>
  );
};

export default MainLayout;
