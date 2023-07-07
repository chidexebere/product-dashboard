interface Props {
  children: React.ReactNode;
  className?: string;
}

const Breadcrumb = ({ children, className }: Props) => {
  return (
    <nav className="">
      <ol className={className}>{children}</ol>
    </nav>
  );
};

export default Breadcrumb;
