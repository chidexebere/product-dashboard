type ConfigObject = {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
};

type ProductObject = {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: TrlObject;
  categories: ListObject[];
  implementationEffortText: string;
  investmentEffort: string;
  trl: ListObject;
  video: string;
  user: UserObject;
  company: CompanyObject;
  businessModels: ListObject[];
};

type ListObject = {
  id: number;
  name: string;
};

type UserObject = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
};

type CompanyObject = {
  name: string;
  logo: string;
  address: {
    id: number;
    country: {
      name: string;
      region: string;
    };
    state: string;
    city: {
      name: string;
      countryId: number;
      stateId: number;
    };
    street: string;
    house: string;
    zipCode: string;
    longitude: string;
    latitude: string;
    fallbackString: string;
    cityRegion: string;
  };
};

type TrlObject = {
  id: number;
  name: string;
  description: string;
};

type PayloadObject = {
  [k: string]:
    | string
    | ListObject
    | ListObject[]
    | UserObject
    | CompanyObject
    | TrlObject;
};
