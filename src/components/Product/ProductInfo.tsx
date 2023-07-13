import { useSelector } from 'react-redux';
import { RootState } from '../../appState/store';
import cn from 'classnames';
import Card from '../Card';
import UserInfo from '../User/UserInfo';
import { LiaAwardSolid } from 'react-icons/lia';
import CardLabelWithIcon from '../CardLabel/CardLabelWithIcon';
import Image from '../Image';
import Title from '../Title';
import RichTextEditor from '../TextEditor/RichTextEditor';

interface Props {
  product: ProductObject;
  configData: ConfigObject;
}

const ProductInfo = ({ product, configData }: Props) => {
  const { picture, name, type, description } = product;
  const { hasUserSection, mainColor } = configData;

  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);

  return (
    <Card>
      <CardLabelWithIcon
        isEditing={isEditingPage}
        mainColor={mainColor}
        name={type.name}
        type={type}
        icon={<LiaAwardSolid className="w-5 h-5 text-white" />}
      />
      <div className="flex flex-col lg:flex-row justify-center lg:items-center">
        <div
          className={cn(
            hasUserSection ? 'border-r border-[#E5E7EB]' : '',
            'lg:basis-2/3',
          )}
        >
          <div className="relative flex justify-center">
            <Image imgUrl={picture} isEditing={isEditingPage} />
          </div>

          <div className="flex flex-col gap-2.5 px-2.5 py-5 lg:p-5">
            <Title text={name} />
            <RichTextEditor contentFromAPI={description} />
          </div>
        </div>
        <div
          className={cn(
            hasUserSection ? 'lg:basis-1/3 px-2.5 py-5 lg:p-5' : 'hidden',
          )}
        >
          <UserInfo product={product} />
        </div>
      </div>
    </Card>
  );
};

export default ProductInfo;
