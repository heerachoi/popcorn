export interface LocationType {
  Ma: string;
  La: string;
}

export interface FoodData {
  position: {
    lat: string;
    lng: string;
  };
  title: string;
  address: string;
  category: string;
  placeURL: string;
  id: string;
  phone: string;
  imgURL: string;
}

export interface Params {
  query: string;
  sort: string;
  page: number;
  size: number;
}

export interface AirPollutionChangeTheText {
  [key: string]: string | number;
}

export interface AddressResult {
  [key: string]: string | number;
}

export interface weatherKoText {
  [key: string]: string 
}