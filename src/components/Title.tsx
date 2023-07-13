import { useSelector } from 'react-redux';
import { RootState } from '../appState/store';
import EdiText from 'react-editext';
import { useEditProduct } from '../api/hooks';

interface Props {
  text: string;
}
const Title = ({ text }: Props) => {
  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);

  const editTitle = useEditProduct();

  const handleEditTitle = (editedTitle: string) => {
    editTitle.mutate({ name: editedTitle });
  };

  return (
    <>
      {isEditingPage ? (
        <EdiText
          type="text"
          value={text}
          onSave={handleEditTitle}
          editOnViewClick={true}
          hideIcons={true}
          editButtonClassName="border-0"
          viewContainerClassName="inputClass h-9 px-3 cursor-pointer flex items-center gap-x-1.5 text-[#374151] text-base font-semibold"
          saveButtonContent="&#10003;"
          saveButtonClassName="py-1 px-2 bg-slate-200 hover:text-white hover:bg-slate-400 mx-1"
          cancelButtonContent="&#120;"
          cancelButtonClassName="py-1 px-3 bg-red-200 hover:text-white hover:bg-red-400"
          inputProps={{
            className: 'inputClass px-3 py-1 border-0',
          }}
        />
      ) : (
        <h2>{text}</h2>
      )}
    </>
  );
};

export default Title;
