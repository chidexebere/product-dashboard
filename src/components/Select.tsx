type SelectOptions = {
  text: string;
  value: string | number;
};

interface Props {
  options: SelectOptions[];
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  selected?: string | number;
}

const Select = ({ options, handleChange, className, selected }: Props) => {
  return (
    <select
      name="dropdown"
      id="dropdown-select"
      className={`border-0 w-fit cursor-pointer ${className}`}
      onChange={handleChange}
      value={selected}
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
