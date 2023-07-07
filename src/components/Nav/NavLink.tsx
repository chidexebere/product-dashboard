import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  title: string;
  slug: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string | number;
}

const NavLink = ({
  title,
  slug,
  icon,
  isActive,
  handleClick,
  value,
}: Props) => {
  return (
    <li
      className={cn(
        isActive
          ? 'border-r-2 border-[#000] text-[#000]'
          : 'border-0 text-[#374151]',
        'w-full pl-2.5 pt-2.5 pb-[8px] hover:text-gray-800 hover:bg-gray-100',
      )}
    >
      <Link to={slug} className="text-base font-normal">
        <button
          className="flex items-center"
          onClick={handleClick}
          value={value}
        >
          <span className="mr-[12px]">{icon}</span>
          <span className="">{title}</span>
        </button>
      </Link>
    </li>
  );
};

export default NavLink;
