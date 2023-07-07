interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return (
    <section
      className={`rounded-md bg-white border border-[#E5E7EB] w-full h-full ${className}`}
    >
      {children}
    </section>
  );
};

export default Card;
