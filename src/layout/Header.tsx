import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../appState/store';
import { useCachedAppConfig, useProduct } from '../api/hooks';
import Select from '../components/Select';
import { selectConfig } from '../appState/slice';
import { useDispatch } from 'react-redux';
import Avatar from '../components/User/Avatar';

const appConfig = [
  { text: 'APP 1', value: 1 },
  { text: 'APP 2', value: 2 },
];

const Header = () => {
  const APP_ID = useSelector((state: RootState) => state.app.appId);
  const appConfigData = useCachedAppConfig(APP_ID);
  const { data } = useProduct();

  const dispatch = useDispatch();

  const handleSelectAppConfig = (e: React.MouseEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { value } = e.target as HTMLSelectElement;
    dispatch(selectConfig(value));
  };

  return (
    <header
      className="h-auto w-full px-4 shadow sticky top-0 z-50"
      style={{ backgroundColor: `${appConfigData?.mainColor}` }}
    >
      <div className="flex justify-center">
        <nav className="w-full 2xl:w-[1410px] flex items-center justify-between p-4 2xl:px-0 ml-8 2xl:m-0 ">
          <Link to="/" className="">
            <img
              src={appConfigData?.logo}
              alt="Logo"
              loading="lazy"
              width="100"
              height="50"
            />
          </Link>
          <div className="flex items-center justify-end gap-x-1">
            {data && (
              <Avatar
                imgUrl={data.user.profilePicture}
                className=" hidden md:block rounded-full w-[25px] mr-2"
              />
            )}

            <Select options={appConfig} handleClick={handleSelectAppConfig} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
