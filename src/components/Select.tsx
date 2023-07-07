type SelectOptions = {
  text: string;
  value: string | number;
};

interface Props {
  options: SelectOptions[];
  handleClick?: (e: React.MouseEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, handleClick }: Props) => {
  return (
    <select
      name="dropdown"
      id="dropdown-select"
      className="bg-black border-0 text-white text-sm w-fit px-3 py-1 font-medium rounded-lg focus:ring-gray-500 focus:border-gray-500 uppercase cursor-pointer"
      onClick={handleClick}
    >
      {options.map((option, index) => (
        <option key={`${index}${option.text}`} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
