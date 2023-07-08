import { useSelector } from 'react-redux';
import { RootState } from '../../appState/store';
import EditableDropdown from './EditableDropdown';
import Label from '../Label';

interface Props {
  options: TrlObject[];
  value: string;
}

const Dropdown = ({ options, value }: Props) => {
  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);
  return (
    <>
      {isEditingPage ? (
        <EditableDropdown value={value} options={options} />
      ) : (
        <Label name={value} />
      )}
    </>
  );
};

export default Dropdown;
