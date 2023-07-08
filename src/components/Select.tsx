type SelectOptions = {
  text: string;
  value: string | number;
};

interface Props {
  options: SelectOptions[];
  handleClick?: (e: React.MouseEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select = ({ options, handleClick, className }: Props) => {
  return (
    <select
      name="dropdown"
      id="dropdown-select"
      className={`border-0 w-fit cursor-pointer ${className}`}
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
