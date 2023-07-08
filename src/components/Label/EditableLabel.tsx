import { Dispatch, SetStateAction, useState } from 'react';
import { useEditProduct } from '../../api/hooks';
import EdiText from 'react-editext';

interface EditableLabelProps {
  listId: number;
  name: string;
}
const EditableLabel = ({ listId, name }: EditableLabelProps) => {
  const [newName, setNewName] = useState(name);

  const editNewList = useEditProduct();

  const handleEditList = (newName: string) => {
    editNewList.mutate({ id: listId, name: newName });
    setNewName(newName);
  };

  return (
    <EdiText
      type="text"
      value={newName}
      onSave={handleEditList}
      editOnViewClick={true}
      hideIcons={true}
      editButtonClassName="border-0"
      viewContainerClassName="inputClass h-9 px-3 cursor-pointer flex items-center gap-x-1.5"
      saveButtonContent="&#10003;"
      saveButtonClassName="py-1 px-2 bg-slate-200 hover:text-white hover:bg-slate-400 mx-1"
      cancelButtonContent="&#120;"
      cancelButtonClassName="py-1 px-3 bg-red-200 hover:text-white hover:bg-red-400"
      inputProps={{
        className: 'inputClass px-3 py-1 border-0',
      }}
    />
  );
};

interface EditableSingleLabelProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}
const EditableSingleLabel = ({ name, setName }: EditableSingleLabelProps) => {
  const [newName, setNewName] = useState(name);

  const editNewList = useEditProduct();

  const handleEditList = (newName: string) => {
    editNewList.mutate(newName);
    setNewName(newName);
  };

  return (
    <EdiText
      type="text"
      value={newName}
      onSave={handleEditList}
      editOnViewClick={true}
      hideIcons={true}
      editButtonClassName="border-0"
      viewContainerClassName="inputClass h-9 px-3 cursor-pointer flex items-center gap-x-1.5"
      saveButtonContent="&#10003;"
      saveButtonClassName="py-1 px-2 bg-slate-200 hover:text-white hover:bg-slate-400 mx-1"
      cancelButtonContent="&#120;"
      cancelButtonClassName="py-1 px-3 bg-red-200 hover:text-white hover:bg-red-400"
      inputProps={{
        className: 'inputClass px-3 py-1 border-0',
      }}
    />
  );
};

export { EditableLabel, EditableSingleLabel };
