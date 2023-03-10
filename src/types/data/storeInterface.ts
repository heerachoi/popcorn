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
  imgURL: string[];
  lat: string;
  lon: string;
  category: string;
}

export interface BookMark {
  id: string;
  uid: string;
  store: string;
  user: string;
  notification: boolean;
  title: string;
  open: string;
  close: string;
  imgURL: string;
  status: boolean;
}

export interface View {
  '10': number;
  '20': number;
  '30': number;
  '40+': number;
  female: number;
  male: number;
  연령모름: number;
  성별모름: number;
  all: number;
}
