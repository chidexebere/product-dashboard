interface Props {
  onClick: (e: React.MouseEvent) => void;
}

const AddLabel = ({ onClick }: Props) => {
  return (
    <button
      className="py-0.5 px-2.5 bg-blue-200 rounded-full hover:text-white hover:bg-blue-400"
      onClick={onClick}
    >
      <span className="text-xl">&#43;</span>
    </button>
  );
};

export default AddLabel;
