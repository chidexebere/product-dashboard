interface Props {
  children: React.ReactNode;
  className: string;
}

const CardLabel = ({ children, className }: Props) => {
  return (
    <span
      className={`absolute z-10 flex items-center border w-fit ${className}`}
    >
      {children}
    </span>
  );
};

export default CardLabel;
