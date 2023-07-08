import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../appState/store';
import Label from '.';
import { EditableSingleLabel } from './EditableLabel';

interface Props {
  label: string;
  title: string;
}
const SingleLabel = ({ label, title }: Props) => {
  const [newLabel, setNewLabel] = useState(label);

  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);

  return (
    <>
      {isEditingPage ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-normal text-[#6B7280]">{title}</h2>
          </div>
          <div className="flex flex-wrap items-start gap-[5px]">
            <EditableSingleLabel name={newLabel} setName={setNewLabel} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-normal text-[#6B7280]">{title}</h2>
          </div>
          <div className="flex flex-wrap items-start gap-[5px]">
            <Label name={newLabel} />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleLabel;
