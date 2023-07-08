import { useState } from 'react';
import CreateLabel from './CreateLabel';
import { EditableLabel } from './EditableLabel';
import { useSelector } from 'react-redux';
import { RootState } from '../../appState/store';
import Label from '.';

interface Props {
  lists: ListObject[];
  title: string;
}
const LabelGroup = ({ lists, title }: Props) => {
  const [newLists, setNewLists] = useState(lists);

  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);

  return (
    <>
      {isEditingPage ? (
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-normal text-[#6B7280]">{title}</h2>
            <CreateLabel newLists={newLists} setNewLists={setNewLists} />
          </div>
          <div className="flex flex-wrap items-start gap-[5px]">
            {newLists.map((list) => (
              <div key={`${list.id}`}>
                <EditableLabel name={list.name} listId={list.id} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-normal text-[#6B7280]">{title}</h2>
          </div>
          <div className="flex flex-wrap items-start gap-[5px]">
            {newLists.map((list) => (
              <div key={`${list.id}`}>
                <Label name={list.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LabelGroup;
