import CardLabel from '.';
import EdiText from 'react-editext';
import { HiOutlinePencil } from 'react-icons/hi';
import { useEditProduct } from '../../api/hooks';

interface Props {
  mainColor: string;
  isEditing: boolean;
  name: string;
  type: ListObject;
  icon: React.ReactNode;
}

const CardLabelWithIcon = ({
  mainColor,
  isEditing,
  name,
  icon,
  type,
}: Props) => {
  const editCardLabel = useEditProduct();

  const payload = type;

  const handleSave = (editedName: string) => {
    payload.name = editedName;
    editCardLabel.mutate({ type: payload });
  };
  return (
    <>
      {isEditing ? (
        <CardLabel className="flex items-center rounded-tl-md rounded-br-md border-[#e5e7eb]">
          <span
            className="p-2.5 rounded-tl-md rounded-br-md"
            style={{
              backgroundColor: mainColor,
            }}
          >
            {icon}
          </span>
          <EdiText
            type="text"
            value={name}
            onSave={handleSave}
            editButtonContent={
              <div className="p-2.5 hover:bg-slate-200">
                <HiOutlinePencil className="w-4 h-4 text-[#6B7280]" />
              </div>
            }
            hideIcons={true}
            editButtonClassName="border-0"
            viewContainerClassName="mx-1.5 flex items-center"
            saveButtonContent="&#10003;"
            saveButtonClassName="py-1 px-2 bg-slate-200 hover:text-white hover:bg-slate-400 mx-1"
            cancelButtonContent="&#120;"
            cancelButtonClassName="py-1 px-3 bg-red-200 hover:text-white hover:bg-red-400"
            inputProps={{
              className: 'inputClass px-3 py-1 border-0',
            }}
          />
        </CardLabel>
      ) : (
        <CardLabel className="rounded-tl-md rounded-br-md border-[#e5e7eb]">
          <span
            className="p-2.5 rounded-tl-md rounded-br-md"
            style={{
              backgroundColor: mainColor,
            }}
          >
            {icon}
          </span>
          <h2 className="bg-white py-2 px-2.5">{name}</h2>
        </CardLabel>
      )}
    </>
  );
};

export default CardLabelWithIcon;
