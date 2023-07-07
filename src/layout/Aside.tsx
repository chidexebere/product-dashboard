import Sidebar from '../components/Sidebar';
import ResponsiveSidebar from '../components/Sidebar/ResponsiveSidebar';

const Aside = () => {
  return (
    <aside className="relative top-0 2xl:mt-5 2xl:mr-[30px]">
      <nav className="block 2xl:hidden">
        <ResponsiveSidebar
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
      </nav>
      <nav className="hidden 2xl:block max-w-[280px]">
        <Sidebar />
      </nav>
    </aside>
  );
};

export default Aside;
