import { HelpNavbar } from '@/features/helps/components';

interface HelpNavbarLayoutProps {
  children: React.ReactNode;
}

const HelpNavbarLayout = ({ children }: HelpNavbarLayoutProps) => {
  return (
    <section className="wrapper overflow-hidden">
      <div className="-m-2 flex flex-wrap">
        <HelpNavbar className="hidden p-2 md:block md:w-3/12" />
        <div className="w-full p-2 md:flex md:w-9/12 md:items-center md:justify-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HelpNavbarLayout;
