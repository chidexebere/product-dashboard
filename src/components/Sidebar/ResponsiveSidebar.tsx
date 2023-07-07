import { slide as Menu } from 'react-burger-menu';
import Sidebar from '.';

interface Props {
  pageWrapId: string;
  outerContainerId: string;
}

const ResponsiveSidebar = ({ pageWrapId, outerContainerId }: Props) => {
  return (
    <Menu className="">
      <Sidebar />
    </Menu>
  );
};

export default ResponsiveSidebar;
