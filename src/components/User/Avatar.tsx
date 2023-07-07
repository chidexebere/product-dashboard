interface Props {
  imgUrl: string;
  className: string;
}

const Avatar = ({ imgUrl, className }: Props) => {
  return (
    <img
      className={className}
      src={imgUrl}
      alt="user profile picture"
      loading="lazy"
      width="12"
      height="12"
    />
  );
};

export default Avatar;
