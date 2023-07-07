import Avatar from './Avatar';

interface Props {
  product: ProductObject;
  profilePictureStyles: string;
  userNameStyles: string;
  companyNameStyles: string;
}

const UserProfile = ({
  product,
  profilePictureStyles,
  userNameStyles,
  companyNameStyles,
}: Props) => {
  const { user, company } = product;

  return (
    <div className="flex items-center gap-x-2.5 pb-2.5">
      <Avatar className={profilePictureStyles} imgUrl={user.position} />
      <div className="flex flex-col items-start gap-y-[5px] py-[5px]">
        <p className={userNameStyles}>
          {user.firstName} {user.lastName}
        </p>
        <p className={companyNameStyles}>{company.name}</p>
      </div>
    </div>
  );
};

export default UserProfile;
