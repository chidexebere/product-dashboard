import { RiHomeLine } from 'react-icons/ri';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import NavLink from './NavLink';
import { useDispatch } from 'react-redux';
import { selectNav } from '../../appState/slice';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const navigation = [
  { title: 'Home', iconName: 'RiHomeLine', slug: '/' },
  { title: 'Product', iconName: 'HiOutlineCpuChip', slug: '/product' },
];

const stringToComponent = (iconName: string) => {
  switch (iconName) {
    case 'RiHomeLine':
      return <RiHomeLine className="font-thin w-5 h-5" />;
    case 'HiOutlineCpuChip':
      return <HiOutlineCpuChip className="font-thin w-5 h-5" />;
    default:
      return null;
  }
};
const Navbar = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget as HTMLButtonElement;
    setPath(value);
    dispatch(selectNav(value));
  };

  return (
    <ul className="w-full flex flex-col items-start gap-2.5">
      {navigation.map((item) => (
        <NavLink
          key={item.title}
          title={item.title}
          slug={item.slug}
          icon={stringToComponent(item.iconName)}
          isActive={item.slug === path}
          value={item.title}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

export default Navbar;
