import Card from '../Card';
import LabelGroup from '../Label/LabelGroup';
import { GoGear } from 'react-icons/go';
import { FaRegChessKnight } from 'react-icons/fa6';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import SingleLabel from '../Label/SingleLabel';
import Dropdown from '../Dropdown';
import { useSelector } from 'react-redux';
import { RootState } from '../../appState/store';
import cn from 'classnames';

interface Props {
  product: ProductObject;
  trlList: TrlObject[];
}

const ProductDescription = ({ product, trlList }: Props) => {
  const { categories, businessModels, trl, investmentEffort } = product;
  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);
  return (
    <Card className="py-5 px-2.5 lg:py-[30px] lg:px-5">
      <h2 className="mb-5">
        Product details
        {isEditingPage && (
          <span className="ml-5 text-primary text-blue-500">
            ( ...click on labels to edit )
          </span>
        )}
      </h2>
      <div
        className={
          isEditingPage
            ? 'flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-x-14'
            : 'flex flex-col gap-5 md:grid md:grid-cols-2 xl:gap-x-8'
        }
      >
        <div className="flex items-start gap-[6px]">
          <GoGear className="w-6 h-6 text-[#9CA3AF]" />
          <LabelGroup title="Categories" lists={categories} />
        </div>

        <div className="flex items-start gap-[6px]">
          <FaRegChessKnight className="w-6 h-6 text-[#9CA3AF]" />
          <LabelGroup title="Business Models" lists={businessModels} />
        </div>

        {trlList && (
          <div className="flex items-start gap-[6px]">
            <AiOutlineFieldTime className="w-6 h-6 text-[#9CA3AF]" />
            <div
              className={cn(
                isEditingPage ? 'gap-2' : 'gap-2.5',
                'flex flex-col items-start ',
              )}
            >
              <h2 className="text-sm font-normal text-[#6B7280]">
                Implementation Time
              </h2>
              <Dropdown value={trl.name} options={trlList} />
            </div>
          </div>
        )}

        <div className="flex items-start gap-[6px]">
          <RiMoneyDollarCircleLine className="w-6 h-6 text-[#9CA3AF]" />
          <SingleLabel title="Costs" label={investmentEffort} />
        </div>
      </div>
    </Card>
  );
};

export default ProductDescription;
