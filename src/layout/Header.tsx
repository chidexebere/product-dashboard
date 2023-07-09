import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../appState/store';
import { useCachedAppConfig, useCachedProduct, useProduct } from '../api/hooks';
import Select from '../components/Select';
import { selectConfig } from '../appState/slice';
import { useDispatch } from 'react-redux';
import Avatar from '../components/User/Avatar';
import Searchbar from '../components/Searchbar';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { PiBellLight } from 'react-icons/pi';

const appConfig = [
  { text: 'APP 1', value: 1 },
  { text: 'APP 2', value: 2 },
];

const lang = [
  { text: 'EN', value: 'ENG' },
  { text: 'DE', value: 'DE' },
];

const Header = () => {
  const APP_ID = useSelector((state: RootState) => state.app.appId);
  const appConfigData = useCachedAppConfig(APP_ID);
  const cacheData = useCachedProduct();
  const { data } = useProduct();

  const newData = cacheData ? cacheData : data;

  const dispatch = useDispatch();

  const handleSelectAppConfig = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target as HTMLSelectElement;
    dispatch(selectConfig(value));
  };

  return (
    <header
      className="h-auto w-full px-4 shadow sticky top-0 z-50"
      style={{ backgroundColor: `${appConfigData?.mainColor}` }}
    >
      <div className="flex justify-center">
        <nav className="flex items-center justify-between w-full 2xl:w-[1410px] p-4 2xl:px-0 ml-8 2xl:m-0 ">
          <div className="w-full 2xl:w-[280px]">
            <Link to="/" className="">
              <img
                src={appConfigData?.logo}
                alt="Logo"
                loading="lazy"
                width="100"
                height="50"
              />
            </Link>
          </div>
          <div className="flex items-center justify-end 2xl:justify-between w-full 2xl:w-[1130px]">
            <div className="hidden 2xl:block 2xl:w-[500px]">
              <Searchbar />
            </div>
            <div className="flex items-center justify-end gap-x-4">
              <HiOutlineChatBubbleOvalLeftEllipsis className="text-primary text-white w-5 h-5 cursor-pointer hidden md:block " />
              <Select
                className="text-primary bg-transparent text-white hidden md:block"
                options={lang}
              />
              <PiBellLight className="text-primary text-white w-5 h-5 cursor-pointer hidden md:block" />
              {newData && (
                <Avatar
                  imgUrl={newData.user.profilePicture}
                  className=" hidden md:block rounded-full w-[25px]"
                />
              )}
              <Select
                className="text-primary bg-black text-white text-sm px-3 py-1 font-medium rounded-lg focus:ring-gray-500 focus:border-gray-500 uppercase"
                options={appConfig}
                handleChange={handleSelectAppConfig}
                selected={APP_ID}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
