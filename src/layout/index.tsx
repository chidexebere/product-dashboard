import Aside from './Aside';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-row w-full justify-center min-h-screen ">
        <Aside />
        <main className="w-full md:mx-5 2xl:mx-0 max-w-[1130px] ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
