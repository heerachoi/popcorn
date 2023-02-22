export interface Store {
  id: string;
  view: {
    [key: string]: number;
  };
  title: string;
  address: string;
  open: string;
  close: string;
  location: string;
  item: string;
  openingTime: string[];
  closeTime: string[];
  significantContent: string;
  explain: string;
  sns: string;
  web: string;
  imgURL: string[];
  lat: string;
  lon: string;
  category: string;
  reserveURL: string;
}

export interface BookMark {
  id: string;
  storeId: string;
  userId: string;
  notification: boolean;
  title: string;
  open: string;
  close: string;
  imgURL: string;
  status: boolean;
}
