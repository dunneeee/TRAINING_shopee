import { useScrollTop } from '@/hooks';
import { HelpNavbar } from '../components';

export const Help = () => {
  useScrollTop();
  return (
    <section className="md:wrapper overflow-hidden">
      <div className="wrapper mb-9">
        <h3 className="md:hidden">Help</h3>
      </div>
      <div className="-m-2 flex flex-wrap">
        <HelpNavbar className="w-full p-2 md:w-3/12" />
        <div className="hidden md:flex md:w-9/12 md:items-center md:justify-center">
          <h3 className="">
            Lorem ih2sum dolor sit amet consectetur adipisicing elit. Quisquam
          </h3>
        </div>
      </div>
    </section>
  );
};
