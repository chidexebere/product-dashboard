interface Props {
  name: string;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => void;
}

const EditWithInput = ({ name, children, onChange, handleSubmit }: Props) => {
  return (
    <form
      className="flex flex-row items-center"
      onSubmit={handleSubmit}
      onClick={handleSubmit}
    >
      <label htmlFor="formInput"></label>
      <input
        type="text"
        className={`inputClass text-gray-700 bg-white py-1 px-2`}
        id="formInput"
        placeholder="Enter name"
        autoFocus={true}
        value={name}
        onChange={onChange}
      />
      {children}
    </form>
  );
};

export default EditWithInput;
