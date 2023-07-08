import { IoLocationOutline } from 'react-icons/io5';
import UserProfile from './UserProfile';
import Map from '../Map';

interface Props {
  product: ProductObject;
}

const UserInfo = ({ product }: Props) => {
  const { company } = product;
  const { address } = company;
  const { house, street, city, country } = address;
  return (
    <div className="flex flex-col gap-y-2.5 justify-center items-start self-stretch ">
      <h2>Product By</h2>
      <div className="pt-2.5">
        <img
          className="w-4/5 md:w-1/2 lg:w-[200px]"
          src={company.logo}
          alt="company logo"
          loading="lazy"
          width="200"
          height="37"
        />
      </div>

      <UserProfile
        product={product}
        profilePictureStyles="rounded-full w-[60px]"
        userNameStyles="text-sm font-semibold text-[#6B7280]"
        companyNameStyles="text-primary"
      />

      <div className="flex items-start gap-x-[5px] text-primary py-2.5">
        <IoLocationOutline className="h-4 w-4" />
        <div className="flex flex-col items-start gap-y-[5px]">
          <p className="">
            {street} {house}{' '}
          </p>
          <p className="">
            {city.name} {country.name}
          </p>
        </div>
      </div>

      <Map product={product} />
    </div>
  );
};

export default UserInfo;
