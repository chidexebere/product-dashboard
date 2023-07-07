import { useCachedProduct, useProduct } from '../../api/hooks';
import Navbar from '../Nav/NavBar';
import UserProfile from '../User/UserProfile';

const Sidebar = () => {
  const cacheData = useCachedProduct();
  const { data } = useProduct();

  const newData = cacheData ? cacheData : data;

  return (
    <nav className="flex flex-col items-start gap-2.5 mt-20 mx-5 2xl:m-0">
      <div className="">
        {newData && (
          <UserProfile
            product={newData}
            profilePictureStyles="rounded-full w-[70px]"
            userNameStyles="text-lg font-semibold text-[#6B7280]"
            companyNameStyles="text-primary text-base"
          />
        )}
      </div>

      <Navbar />
    </nav>
  );
};

export default Sidebar;
