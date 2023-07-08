interface Props {
  name: string;
}

const Label = ({ name }: Props) => {
  return (
    <span className="text-primary flex items-center bg-[#E5E7EB] px-3.5 py-[5px] rounded-3xl">
      {name}
    </span>
  );
};

export default Label;
