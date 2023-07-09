import { Link, useNavigate } from 'react-router-dom';
import { RiHomeLine } from 'react-icons/ri';
import { HiChevronRight } from 'react-icons/hi';

import Breadcrumb from '../Breadcrumb';
import Button from '../Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../appState/store';
import { useCachedAppConfig } from '../../api/hooks';
import { useDispatch } from 'react-redux';
import { editPage } from '../../appState/slice';

interface Props {
  product: ProductObject;
}
const ProductHeader = ({ product }: Props) => {
  const APP_ID = useSelector((state: RootState) => state.app.appId);
  const appConfigData = useCachedAppConfig(APP_ID);

  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEditingPage = () => {
    dispatch(editPage());
    navigate('/product/edit');
  };

  return (
    <div
      className={
        isEditingPage
          ? 'flex flex-row justify-between items-start self-stretch lg:pt-5 gap-5'
          : 'flex flex-col lg:flex-row lg:justify-between items-start lg:self-stretch lg:pt-5 gap-5'
      }
    >
      <Breadcrumb className="text-primary flex items-center gap-x-2.5 ">
        {!isEditingPage && (
          <>
            <li>
              <Link to={`/`}>
                <RiHomeLine size={16} />
              </Link>
            </li>
            <li>
              <HiChevronRight size={20} />
            </li>
            <li className="">
              <Link to={`/product`}>Product</Link>
            </li>
            <li>
              <HiChevronRight className="mx-[-5px]" size={20} />
            </li>
          </>
        )}
        <li className="font-semibold">{product.name}</li>
        {isEditingPage && (
          <li className="text-primary text-blue-500">...editing</li>
        )}
      </Breadcrumb>

      <Button
        className="text-white hover:text-slate-400"
        handleClick={handleEditingPage}
        styles={{
          backgroundColor: appConfigData?.mainColor,
          borderColor: appConfigData?.mainColor,
        }}
      >
        {isEditingPage ? 'View Product' : 'Edit'}
      </Button>
    </div>
  );
};

export default ProductHeader;
