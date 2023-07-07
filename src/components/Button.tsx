interface Props {
  className?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  children: React.ReactNode;
  value?: string;
  styles?: React.CSSProperties;
}

const Button = ({
  className,
  handleClick,
  isDisabled,
  children,
  value,
  styles,
}: Props) => {
  const defaultClass =
    'text-primary inline-block px-2.5 py-1.25 rounded-md flex items-center border h-[30px]';

  const buttonClass = className
    ? `${defaultClass} ${className}`
    : `${defaultClass}`;

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={buttonClass}
      value={value}
      onClick={handleClick}
      style={styles}
    >
      {children}
    </button>
  );
};

export default Button;
