import { Dispatch, SetStateAction, useState } from 'react';
import { useAddProduct } from '../../api/hooks';
import AddLabel from './AddlLabel';
import EditWithInput from '../Input/EditWithInput';

interface Props {
  newLists: ListObject[];
  setNewLists: Dispatch<SetStateAction<ListObject[]>>;
}

const CreateLabel = ({ newLists, setNewLists }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const addNewList = useAddProduct();

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setName(value);
  };

  const handleAddList = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (name) {
      const newList = { id: Math.random(), name };
      addNewList.mutate(name);
      setNewLists([...newLists, newList]);
    }
    setName('');
    toggleForm();
  };

  return isOpen ? (
    <EditWithInput name={name} onChange={handleInputChange}>
      <div className="flex gap-x-1 items-center ml-2">
        <button
          className="py-1 px-3 bg-blue-200 hover:text-white hover:bg-blue-400"
          onClick={handleAddList}
        >
          &#43;
        </button>

        <button
          className="py-1 px-3 bg-red-200 hover:text-white hover:bg-red-400"
          onClick={toggleForm}
        >
          &#120;
        </button>
      </div>
    </EditWithInput>
  ) : (
    <AddLabel onClick={toggleForm} />
  );
};

export default CreateLabel;
